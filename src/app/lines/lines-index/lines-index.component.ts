import { Component, OnInit, ViewChild } from '@angular/core';
import { LinesService } from '../lines.service';
import { Line } from '../../models/Line';
import { FailureMessageComponent } from 'src/app/shared/failure-message/failure-message.component';
import { SuccessMessageComponent } from 'src/app/shared/success-message/success-message.component';

@Component({
  selector: 'lines-index',
  templateUrl: './lines-index.component.html',
  styleUrls: ['./lines-index.component.css']
})
export class LinesIndexComponent implements OnInit {

  lines: Line[];
  isLoading: boolean = true;
  @ViewChild(FailureMessageComponent, { static: false }) failureMessage: FailureMessageComponent;
  @ViewChild(SuccessMessageComponent, { static: false }) successMessage: SuccessMessageComponent;

  constructor(private service: LinesService) { }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    try {
      this.lines = await this.service.getAll();
    } catch (e) { this.failureMessage.showConnectivityError(); }

    this.isLoading = false;
  }

  async onDelete(line: Line) {
    this.commitChangesAndFeedback({
      transactions: async () => await this.service.delete(line),
      onSuccess: () => this.successMessage.onShow("A linha foi excluída com sucesso.")
    });
  }

  private async commitChangesAndFeedback(
    { transactions, onSuccess }:
      { transactions: () => Promise<Object>, onSuccess: () => void }) {
    try {
      this.isLoading = true;
      await transactions();
      this.loadData();
      onSuccess();
      window.scrollTo(0, 0);
    } catch (e) {
      this.isLoading = false;

      if (e.status == 400) { this.failureMessage.showFormErrors(e.error.errors); }
      else { this.failureMessage.showConnectivityError(); }
    }
  }
}
