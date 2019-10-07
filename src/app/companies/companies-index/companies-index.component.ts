import { Component, ViewChild } from '@angular/core';
import { Company } from '../Company';
import { CompaniesService } from '../companies.service';
import { NgForm } from '@angular/forms';
import { Prefix } from '../Prefix';
import { FailureMessageComponent } from 'src/app/shared/failure-message/failure-message.component';
import { SuccessMessageComponent } from 'src/app/shared/success-message/success-message.component';

@Component({
  selector: 'app-companies-index',
  templateUrl: './companies-index.component.html',
  styleUrls: ['./companies-index.component.css']
})
export class CompaniesIndexComponent {
  
  newCompany: Company;
  companies: Company[];
  isLoading: boolean = true;
  @ViewChild(SuccessMessageComponent, {static: false}) successMessage: SuccessMessageComponent;
  @ViewChild(FailureMessageComponent, {static: false}) failureMessage: FailureMessageComponent;

  constructor(private service: CompaniesService) {}

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.newCompany = new Company("", new Array<Prefix>());

    try {
      this.companies = await this.service.getAll();
    } catch (e) {
      this.failureMessage.onShow("Houve um problema na obtenção dos dados. Verifique sua conexão e tente novamente.");
    }
    
    this.isLoading = false;
  }

  onAddPrefix(prefix: string) {
    this.newCompany.prefixes.push(new Prefix(prefix));
  }

  onRemovePrefix($event: string) {
    this.newCompany.prefixes = this.newCompany.prefixes.filter(prefix => prefix.number != $event);
  }

  async onSubmit(form: NgForm): Promise<void> {
    const positiveFeedback: string = "A empresa foi salva com sucesso.";
    const negativeFeedback: string = "Houve um problema no envio dos dados. Verifique sua conexão e tente novamente.";

    this.commitChangesAndFeedback({
      transactions: async () => this.newCompany.id == null ?
          await this.service.save(this.newCompany) :
          await this.service.update(this.newCompany),
      onSuccess: () => {this.successMessage.onShow(positiveFeedback); form.reset();},
      onFailure: () => this.failureMessage.onShow(negativeFeedback)
    });
  }

  async onEdit(company: Company) {
    window.scrollTo(0, 0);
    this.newCompany = company;
  }

  async onDelete(company: Company) {
    const positiveFeedback: string = "A empresa foi excluída com sucesso.";
    const negativeFeedback: string = "Houve um problema no envio dos dados. Verifique sua conexão e tente novamente";

    this.commitChangesAndFeedback({
      transactions: async () => await this.service.delete(company),
      onSuccess: () => this.successMessage.onShow(positiveFeedback),
      onFailure: () => this.failureMessage.onShow(negativeFeedback)
    });
  }

  private async commitChangesAndFeedback(
    {transactions, onSuccess, onFailure}:
    {transactions: () => Promise<Object>, onSuccess: () => void, onFailure: () => void}) {
    try {
      this.isLoading = true;
      await transactions();
      this.loadData();
      onSuccess();
      window.scrollTo(0, 0);
    } catch (e) {
      this.isLoading = false;
      onFailure();
    }
  }
}
