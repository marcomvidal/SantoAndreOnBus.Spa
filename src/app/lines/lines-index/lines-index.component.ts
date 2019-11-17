import { Component, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { Line } from '../../models/Line';
import { LinesService } from '../lines.service';
import { FailureMessageComponent } from 'src/app/shared/failure-message/failure-message.component';
import { SuccessMessageComponent } from 'src/app/shared/success-message/success-message.component';
import { CommonComponentTasksService } from 'src/app/common-component-tasks/common-component-tasks.service';
import { ListableResource } from 'src/app/common-component-tasks/ListableResource';

@Component({
  selector: 'lines-index',
  templateUrl: './lines-index.component.html',
  styleUrls: ['./lines-index.component.css']
})
export class LinesIndexComponent implements OnInit, ListableResource {

  lines: Line[];
  isLoading: boolean = true;
  @ViewChild(FailureMessageComponent, { static: false }) failureMessage: FailureMessageComponent;
  @ViewChild(SuccessMessageComponent, { static: false }) successMessage: SuccessMessageComponent;

  constructor(private service: LinesService, private componentService: CommonComponentTasksService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getAll()
      .pipe(take(1))
      .subscribe(
        lines => this.lines = lines,
        error => this.failureMessage.showConnectivityError(),
        () => this.isLoading = false)
  }

  async onDelete(line: Line) {
    this.componentService.commitAndFeedback({
      component: this,
      transactions: () => this.service.delete(line),
      onSuccess: () => this.successMessage.onShow("A linha foi excluída com sucesso.")
    });
  }
}
