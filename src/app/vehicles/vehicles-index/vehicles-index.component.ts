import { Component, OnInit, ViewChild } from '@angular/core';
import { FailureMessageComponent } from 'src/app/shared/failure-message/failure-message.component';
import { SuccessMessageComponent } from 'src/app/shared/success-message/success-message.component';
import { Vehicle } from '../Vehicle';
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
  isLoading: boolean = true;
  @ViewChild(SuccessMessageComponent, {static: false}) successMessage: SuccessMessageComponent;
  @ViewChild(FailureMessageComponent, {static: false}) failureMessage: FailureMessageComponent;

  constructor(private service: VehiclesService) {}

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.newVehicle = new Vehicle("");

    try {
      this.vehicles = await this.service.getAll();
    } catch (e) {
      this.failureMessage.onShow("Houve um problema na obtenção dos dados. Verifique sua conexão e tente novamente.");
    }

    this.isLoading = false;
  }

  async onSubmit(form: NgForm): Promise<void> {
    const positiveFeedback: string = "O veículo foi salvo com sucesso.";
    const negativeFeedback: string = "Houve um problema no envio dos dados. Verifique sua conexão e tente novamente.";

    this.commitChangesAndFeedback({
      transactions: async () => this.newVehicle.id == null ?
          await this.service.save(this.newVehicle) :
          await this.service.update(this.newVehicle),
      onSuccess: () => {this.successMessage.onShow(positiveFeedback); form.reset();},
      onFailure: () => this.failureMessage.onShow(negativeFeedback)
    });
  }

  async onEdit(vehicle: Vehicle) {
    window.scrollTo(0, 0);
    this.newVehicle = vehicle;
  }

  async onDelete(vehicle: Vehicle) {
    const positiveFeedback: string = "O veículo foi excluído com sucesso.";
    const negativeFeedback: string = "Houve um problema no envio dos dados. Verifique sua conexão e tente novamente";

    this.commitChangesAndFeedback({
      transactions: async () => await this.service.delete(vehicle),
      onSuccess: () => this.successMessage.onShow(positiveFeedback),
      onFailure: () => this.failureMessage.onShow(negativeFeedback)
    });
  }

  private async commitChangesAndFeedback(
    {transactions, onSuccess, onFailure}:
    {transactions: () => Promise<Object>, onSuccess: () => void, onFailure: () => void}) {
    try {
      this.isLoading = true;
      await transactions();
      this.loadData();
      onSuccess();
      window.scrollTo(0, 0);
    } catch (e) {
      this.isLoading = false;
      onFailure();
    }
  }
}
