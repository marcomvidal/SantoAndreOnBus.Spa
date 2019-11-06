import { Component, ViewChild, Input } from '@angular/core';
import { Company } from '../Company';
import { CompaniesService } from '../companies.service';
import { FailureMessageComponent } from 'src/app/shared/failure-message/failure-message.component';
import { NgForm } from '@angular/forms';
import { Prefix } from '../Prefix';
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
  isEditing: boolean = false;
  @ViewChild(SuccessMessageComponent, {static: false}) successMessage: SuccessMessageComponent;
  @ViewChild(FailureMessageComponent, {static: false}) failureMessage: FailureMessageComponent;

  constructor(private service: CompaniesService) {}

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.newCompany = new Company();

    try {this.companies = await this.service.getAll();}
    catch (e) {this.failureMessage.showConnectivityError();}
    
    this.isLoading = false;
  }

  onAddPrefix(prefix: string) {
    this.newCompany.prefixes.push(new Prefix(prefix));
  }

  onRemovePrefix($event: string) {
    this.newCompany.prefixes = this.newCompany.prefixes.filter(prefix => prefix.number != $event);
  }

  async onSubmit(form: NgForm): Promise<void> {
    this.successMessage.onHide();
    this.failureMessage.onHide();
    
    this.commitChangesAndFeedback({
      transactions: async () => this.newCompany.id == null ?
          await this.service.save(this.newCompany) :
          await this.service.update(this.newCompany),
      onSuccess: () => {
        this.isEditing = false;
        this.successMessage.onShow("A empresa foi salva com sucesso.");
        form.reset();
      }
    });
  }

  async onEdit(company: Company) {
    this.isEditing = true;
    this.newCompany = company;
    window.scrollTo(0, 0);
  }

  resetForm(form: NgForm) {
    form.resetForm(form.value);
    this.isEditing = false;
    this.newCompany = new Company();
  }

  async onDelete(company: Company) {
    this.commitChangesAndFeedback({
      transactions: async () => await this.service.delete(company),
      onSuccess: () => this.successMessage.onShow("A empresa foi excluída com sucesso.")
    });
  }

  private async commitChangesAndFeedback(
    {transactions, onSuccess}:
    {transactions: () => Promise<Object>, onSuccess: () => void}) {
    try {
      this.isLoading = true;
      await transactions();
      this.loadData();
      onSuccess();
      window.scrollTo(0, 0);
    } catch (e) {
      this.isLoading = false;

      if (e.status == 400) {this.failureMessage.showFormErrors(e.error.errors);}
      else {this.failureMessage.showConnectivityError();}
    }
  }
}
