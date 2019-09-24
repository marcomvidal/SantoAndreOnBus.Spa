import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'model-table',
  templateUrl: './model-table.component.html',
  styleUrls: ['./model-table.component.css']
})
export class ModelTableComponent implements OnInit {

  @Input() columns: string[];

  constructor() { }

  ngOnInit() {
  }

}
