import { Component, OnInit } from '@angular/core';
import { Line } from '../Line';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lines-form',
  templateUrl: './lines-form.component.html',
  styleUrls: ['./lines-form.component.css']
})
export class LinesFormComponent implements OnInit {

  line: Line;
  isLoading: boolean = true;

  constructor() {}
  
  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.line = new Line("", "", "", "", null, null, null, null);
  }

  async onSubmit(form: NgForm): Promise<void> {
    console.log(this.line);
  }
}
