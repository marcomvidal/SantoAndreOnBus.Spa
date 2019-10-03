import { Component, EventEmitter, Output } from '@angular/core';
import { Company } from '../Company';
import { CompaniesService } from '../companies.service';
import { NgForm } from '@angular/forms';
import { Prefix } from '../Prefix';

@Component({
  selector: 'app-companies-index',
  templateUrl: './companies-index.component.html',
  styleUrls: ['./companies-index.component.css']
})
export class CompaniesIndexComponent {
  
  newCompany: Company;
  companies: Company[];
  isLoading: boolean = true;
  isSuccessMessageHidden: boolean = true;

  constructor(private service: CompaniesService) {}

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.newCompany = new Company('', new Array<Prefix>());
    this.companies = await this.service.getAll();
    this.isLoading = false;
  }

  async onSubmit(form: NgForm): Promise<void> {
    await this.service.save(this.newCompany);
    this.isSuccessMessageHidden = false;
    this.isLoading = true;
    this.loadData();
    form.reset();
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
