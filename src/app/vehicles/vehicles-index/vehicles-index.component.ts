import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vehicle } from '../../models/Vehicle';
import { FailureMessageComponent } from 'src/app/shared/failure-message/failure-message.component';
import { SuccessMessageComponent } from 'src/app/shared/success-message/success-message.component';
import { SubmitableForm } from '../../common-component-tasks/SubmitableForm';
import { VehiclesService } from '../vehicles.service';
import { CommonComponentTasksService } from 'src/app/common-component-tasks/common-component-tasks.service';


@Component({
  selector: 'app-vehicles-index',
  templateUrl: './vehicles-index.component.html',
  styleUrls: ['./vehicles-index.component.css']
})
export class VehiclesIndexComponent implements OnInit, SubmitableForm {

  newVehicle: Vehicle;
  vehicles: Vehicle[];
  isEditing: boolean = false;
  isLoading: boolean = true;
  @ViewChild(SuccessMessageComponent, { static: false }) successMessage: SuccessMessageComponent;
  @ViewChild(FailureMessageComponent, { static: false }) failureMessage: FailureMessageComponent;

  constructor(private service: VehiclesService, private componentService: CommonComponentTasksService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.newVehicle = new Vehicle();

    this.service.getAll()
      .subscribe(
        vehicles => this.vehicles = vehicles,
        error => this.failureMessage.showConnectivityError(),
        () => this.isLoading = false);
  }

  onSubmit(form: NgForm) {
    this.componentService.commitAndFeedback({
      component: this,
      transactions: () => this.newVehicle.id == null ?
        this.service.save(this.newVehicle) :
        this.service.update(this.newVehicle),
      onSuccess: () => {
        this.isEditing = false;
        this.successMessage.onShow("O veículo foi salvo com sucesso.");
        form.reset();
      }
    });
  }

  onEdit(vehicle: Vehicle) {
    this.componentService.prepareToEdit(this);
    this.newVehicle = vehicle;
  }

  onReset(form: NgForm) {
    this.componentService.prepareToResetForm(this, form);
    this.newVehicle = new Vehicle();
  }

  onDelete(vehicle: Vehicle) {
    this.componentService.commitAndFeedback({
      component: this,
      transactions: () => this.service.delete(vehicle),
      onSuccess: () => this.successMessage.onShow("O veículo foi excluído com sucesso.")
     });
  }
}
