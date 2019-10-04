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
    this.newCompany = new Company('', new Array<Prefix>());

    try {
      this.companies = await this.service.getAll();
    } catch (e) {
      this.failureMessage.onShow("Houve um problema na obtenção dos dados. Verifique sua conexão e tente novamente.");
    }
    
    this.isLoading = false;
  }

  async onSubmit(form: NgForm): Promise<void> {
    try {
      if (this.newCompany.id == null) {
        await this.service.save(this.newCompany);
      } else {
        await this.service.update(this.newCompany);
      }

      this.successMessage.onShow("O salvamento desta empresa foi bem sucedido.");
      this.isLoading = true;
      this.loadData();
      form.reset();
    } catch (e) {
      this.failureMessage.onShow("Houve um problema no envio dos dados. Verifique sua conexão e tente novamente.");
    }
  }

  async onEdit(company: Company) {
    this.newCompany = company;
  }

  async onDelete(company: Company) {
    console.log(company);
  }

  onAddPrefix(prefix: string) {
    this.newCompany.prefixes.push(new Prefix(prefix));
  }

  onRemovePrefix($event: string) {
    this.newCompany.prefixes = this.newCompany.prefixes.filter(prefix => prefix.number != $event);
  }
}
