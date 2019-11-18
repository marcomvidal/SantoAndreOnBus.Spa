import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from '../../models/Company';
import { Prefix } from '../../models/Prefix';
import { FailureMessageComponent } from 'src/app/shared/failure-message/failure-message.component';
import { SuccessMessageComponent } from 'src/app/shared/success-message/success-message.component';
import { SubmitableForm } from 'src/app/common-component-tasks/SubmitableForm';
import { CompaniesService } from '../companies.service';
import { CommonComponentTasksService } from 'src/app/common-component-tasks/common-component-tasks.service';


@Component({
  selector: 'app-companies-index',
  templateUrl: './companies-index.component.html',
  styleUrls: ['./companies-index.component.css']
})
export class CompaniesIndexComponent implements SubmitableForm {

  newCompany: Company;
  companies: Company[];
  isLoading: boolean = true;
  isEditing: boolean = false;
  @ViewChild(SuccessMessageComponent, { static: false }) successMessage: SuccessMessageComponent;
  @ViewChild(FailureMessageComponent, { static: false }) failureMessage: FailureMessageComponent;

  constructor(private service: CompaniesService, private componentService: CommonComponentTasksService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.newCompany = new Company();

    this.service.getAll()
      .subscribe(
        companies => this.companies = companies,
        error => this.failureMessage.showConnectivityError(),
        () => this.isLoading = false);
  }

  onAddPrefix(prefix: string) {
    this.newCompany.prefixes.push(new Prefix(prefix));
  }

  onRemovePrefix($event: string) {
    this.newCompany.prefixes = this.newCompany.prefixes.filter(prefix => prefix.number != $event);
  }

  async onSubmit(form: NgForm): Promise<void> {
    this.componentService.commitAndFeedback({
      component: this,
      transactions: () => this.newCompany.id == null ?
        this.service.save(this.newCompany) :
        this.service.update(this.newCompany),
      onSuccess: () => {
        this.isEditing = false;
        this.successMessage.onShow("A empresa foi salva com sucesso.");
        form.reset();
      }
    })
  }

  onEdit(company: Company) {
    this.componentService.prepareToEdit(this);
    this.newCompany = company;
  }

  onReset(form: NgForm) {
    this.componentService.prepareToResetForm(this, form);
    this.newCompany = new Company();
  }

  onDelete(company: Company) {
    this.componentService.commitAndFeedback({
      component: this,
      transactions: () => this.service.delete(company),
      onSuccess: () => this.successMessage.onShow("A empresa foi excluída com sucesso.")
    });
  }
}
