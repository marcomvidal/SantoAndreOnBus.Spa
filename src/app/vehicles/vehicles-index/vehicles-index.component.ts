import { Component, OnInit, ViewChild } from '@angular/core';
import { FailureMessageComponent } from 'src/app/shared/failure-message/failure-message.component';
import { SuccessMessageComponent } from 'src/app/shared/success-message/success-message.component';
import { Vehicle } from '../../models/Vehicle';
import { VehiclesService } from '../vehicles.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vehicles-index',
  templateUrl: './vehicles-index.component.html',
  styleUrls: ['./vehicles-index.component.css']
})
export class VehiclesIndexComponent implements OnInit {

  newVehicle: Vehicle;
  vehicles: Vehicle[];
  isEditing: boolean = false;
  isLoading: boolean = true;
  @ViewChild(SuccessMessageComponent, { static: false }) successMessage: SuccessMessageComponent;
  @ViewChild(FailureMessageComponent, { static: false }) failureMessage: FailureMessageComponent;

  constructor(private service: VehiclesService) { }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.newVehicle = new Vehicle();

    try { this.vehicles = await this.service.getAll(); }
    catch (e) { this.failureMessage.showConnectivityError(); }

    this.isLoading = false;
  }

  async onSubmit(form: NgForm): Promise<void> {
    this.successMessage.onHide();
    this.failureMessage.onHide();

    this.commitChangesAndFeedback({
      transactions: async () => this.newVehicle.id == null ?
        await this.service.save(this.newVehicle) :
        await this.service.update(this.newVehicle),
      onSuccess: () => {
        this.isEditing = false;
        this.successMessage.onShow("O veículo foi salvo com sucesso.");
        form.reset();
      }
    });
  }

  async onEdit(vehicle: Vehicle) {
    this.isEditing = true;
    this.newVehicle = vehicle;
    window.scrollTo(0, 0);
  }

  resetForm(form: NgForm) {
    form.resetForm(form.value);
    this.isEditing = false;
    this.newVehicle = new Vehicle();
  }

  async onDelete(vehicle: Vehicle) {
    this.commitChangesAndFeedback({
      transactions: async () => await this.service.delete(vehicle),
      onSuccess: () => this.successMessage.onShow("O veículo foi excluído com sucesso.")
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
