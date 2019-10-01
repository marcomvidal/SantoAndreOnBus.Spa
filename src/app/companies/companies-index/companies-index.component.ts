import { Component } from '@angular/core';
import { Company } from '../Company';
import { CompaniesService } from '../companies.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-companies-index',
  templateUrl: './companies-index.component.html',
  styleUrls: ['./companies-index.component.css']
})
export class CompaniesIndexComponent {
  
  newCompany: Company;
  companies: Company[];
  isLoading: boolean = true;

  constructor(private service: CompaniesService) {}

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.newCompany = {name: '', prefixes: []};
    this.companies = await this.service.getAll();
    this.isLoading = false;
  }

  onPrefixesUpdate($event: string[]): void {
    this.newCompany.prefixes = $event;
  }

  async onSubmit(form: NgForm): Promise<void> {
    await this.service.save(this.newCompany);
    this.isLoading = true;
    this.loadData();
  }
}
