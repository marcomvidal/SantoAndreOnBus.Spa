import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Dashboard } from '../Dashboard';
import { FailureMessageComponent } from 'src/app/shared/failure-message/failure-message.component';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent implements OnInit {

  dashboard: Dashboard = new Dashboard();
  isLoading: boolean = true;
  @ViewChild(FailureMessageComponent, {static: false}) failureMessage: FailureMessageComponent;

  constructor(private service: DashboardService) {}

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    try {
      this.dashboard = await this.service.get();
    } catch (e) {this.failureMessage.showConnectivityError();}
    
    this.isLoading = false;
  }

}
