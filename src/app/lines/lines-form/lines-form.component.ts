import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Company } from 'src/app/models/Company';
import { InterestPoint } from '../../models/InterestPoint';
import { Line } from '../../models/Line';
import { Place } from '../../models/Place';
import { Vehicle } from 'src/app/models/Vehicle';
import { FailureMessageComponent } from 'src/app/shared/failure-message/failure-message.component';
import { SuccessMessageComponent } from 'src/app/shared/success-message/success-message.component';
import { SubmitableForm } from 'src/app/common-component-tasks/SubmitableForm';
import { CompaniesService } from 'src/app/companies/companies.service';
import { LinesService } from '../lines.service';
import { VehiclesService } from 'src/app/vehicles/vehicles.service';
import { CommonComponentTasksService } from 'src/app/common-component-tasks/common-component-tasks.service';


@Component({
  selector: 'app-lines-form',
  templateUrl: './lines-form.component.html',
  styleUrls: ['./lines-form.component.css']
})
export class LinesFormComponent implements OnInit, SubmitableForm {

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
    private componentService: CommonComponentTasksService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.line = new Line();

    this.route.params.subscribe(params => {
      if (params['lineName']) { 
        this.service.getByLineName(params['lineName'])
          .pipe(take(1))
          .subscribe(line => this.line = line);
      }
    });

    this.companyService.getAll()
      .pipe(take(1))
      .subscribe(companies => this.companies = companies);
    
    this.vehicleService.getAll()
      .pipe(take(1))
      .subscribe(
        vehicleTypes => this.vehicleTypes = vehicleTypes,
        error => error,
        () => this.isLoading = false);
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
    console.log(this.line);
  }

  onRemoveVehicle($event: string) {
    const vehicle: Vehicle = this.vehicleTypes.filter(v => v.name == $event)[0];
    this.line.vehicles = this.line.vehicles.filter(v => v.id != vehicle.id);
  }

  async onSubmit(form: NgForm): Promise<void> {
    this.componentService.commitAndFeedback({
      component: this,
      transactions: () => this.line.id == null ?
        this.service.save(this.line) :
        this.service.update(this.line),
      onSuccess: () => {
        this.isEditing = false;
        this.successMessage.onShow("A linha foi salva com sucesso.");
        form.reset();
      }
    });
  }

  onReset(form: NgForm) {
    this.componentService.prepareToResetForm(this, form);
    this.line = new Line();
  }
}
