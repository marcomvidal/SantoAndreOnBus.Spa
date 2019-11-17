import { Component, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { Dashboard } from '../../models/Dashboard';
import { FailureMessageComponent } from 'src/app/shared/failure-message/failure-message.component';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent implements OnInit {

  dashboard: Dashboard = new Dashboard();
  isLoading: boolean = true;
  @ViewChild(FailureMessageComponent, { static: false }) failureMessage: FailureMessageComponent;

  constructor(private service: DashboardService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.get()
      .pipe(take(1))
      .subscribe(dashboard => this.dashboard = dashboard, error => this.failureMessage.showConnectivityError());

    this.isLoading = false;
  }
}
