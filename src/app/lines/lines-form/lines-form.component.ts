import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Company } from 'src/app/models/Company';
import { InterestPoint } from '../../models/InterestPoint';
import { Line } from '../../models/Line';
import { Place } from '../../models/Place';
import { Vehicle } from 'src/app/models/Vehicle';
import { CompaniesService } from 'src/app/companies/companies.service';
import { LinesService } from '../lines.service';
import { VehiclesService } from 'src/app/vehicles/vehicles.service';
import { FailureMessageComponent } from 'src/app/shared/failure-message/failure-message.component';
import { SuccessMessageComponent } from 'src/app/shared/success-message/success-message.component';

@Component({
  selector: 'app-lines-form',
  templateUrl: './lines-form.component.html',
  styleUrls: ['./lines-form.component.css']
})
export class LinesFormComponent implements OnInit {

  line: Line;
  companies: Company[];
  vehicleTypes: Vehicle[];
  isLoading: boolean = true;
  isEditing: boolean = true;
  @ViewChild(SuccessMessageComponent, { static: false }) successMessage: SuccessMessageComponent;
  @ViewChild(FailureMessageComponent, { static: false }) failureMessage: FailureMessageComponent;

  constructor(private service: LinesService,
    private companyService: CompaniesService,
    private vehicleService: VehiclesService,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.line = new Line();

    try {
      this.route.params.subscribe(async params => {
        const lineName = params['lineName'];
        if (lineName) { this.line = await this.service.getByLineName(lineName); }
      });

      this.companies = await this.companyService.getAll();
      this.vehicleTypes = await this.vehicleService.getAll();
    } catch (e) { this.failureMessage.showConnectivityError(); }

    this.isLoading = false;
  }

  onAddInterestPoint(interestPoint: string) {
    this.line.interestPoints.push(new InterestPoint(interestPoint));
  }

  onRemoveInterestPoint($event: string) {
    this.line.interestPoints = this.line.interestPoints.filter(interestPoint => interestPoint.name != $event);
  }

  onAddPlace(place: string) {
    this.line.places.push(new Place(place));
  }

  onRemovePlace($event: string) {
    this.line.places = this.line.places.filter(place => place.name != $event);
  }

  onAddVehicle(vehicleType: string) {
    const vehicle: Vehicle = this.vehicleTypes.filter(v => v.name == vehicleType)[0];
    if (!this.line.vehicles.includes(vehicle)) { this.line.vehicles.push(vehicle); }
  }

  onRemoveVehicle(vehicleType: string) {
    const vehicle: Vehicle = this.vehicleTypes.filter(v => v.name == vehicleType)[0];
    this.line.vehicles = this.line.vehicles.filter(v => v.id != vehicle.id);
  }

  async onSubmit(form: NgForm): Promise<void> {
    this.successMessage.onHide();
    this.failureMessage.onHide();

    this.commitChangesAndFeedback({
      transactions: async () => this.line.id == null ?
        await this.service.save(this.line) :
        await this.service.update(this.line),
      onSuccess: () => {
        this.isEditing = false;
        this.successMessage.onShow("A linha foi salva com sucesso.");
        form.reset();
      }
    });
  }

  resetForm(form: NgForm) {
    form.resetForm(form.value);
    this.isEditing = false;
    this.line = new Line();
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
