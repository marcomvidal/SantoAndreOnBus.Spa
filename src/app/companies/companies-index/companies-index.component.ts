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

  constructor(private service: CompaniesService) {
    this.newCompany = {name: '', prefixes: []};
  }

  ngOnInit() {}

  onPrefixesUpdate($event: string[]): void {
    this.newCompany.prefixes = $event;
  }

  onSubmit(form: NgForm): void {
    this.service.save(this.newCompany);
  }
}
