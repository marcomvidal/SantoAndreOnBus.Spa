import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ListableResource } from './ListableResource';
import { SubmitableForm } from './SubmitableForm';
import { LoginFormComponent } from '../login/login-form/login-form.component';

@Injectable({
  providedIn: 'root'
})
export class CommonComponentTasksService {

  commitAndFeedback(
    { component, transactions, onSuccess }:
    { 
      component: SubmitableForm | ListableResource,
      transactions: () => Observable<Object>,
      onSuccess: () => void 
    }
      ) {
      this.hideErrorMessages(component);

      transactions().subscribe(
        success => {
          component.loadData();
          onSuccess();
          window.scrollTo(0, 0);
        },
        fail => this.showSubmitErrors(component, fail));
  }

  hideErrorMessages(component: SubmitableForm | ListableResource | LoginFormComponent) {
    component.successMessage.onHide();
    component.failureMessage.onHide();
    component.isLoading = true;
  }

  showSubmitErrors(component: SubmitableForm | ListableResource | LoginFormComponent, fail: any) {
    component.isLoading = false;

    if (fail.status == 400 && typeof fail.error == "object" ) { 
      component.failureMessage.showFormErrors(fail.error.errors);
    } else if (fail.status == 400 && typeof fail.error == "string") {
      component.failureMessage.onShow(fail.error, undefined);
    } else {
      component.failureMessage.showConnectivityError();
    }
  }

  prepareToEdit(component: SubmitableForm) {
    component.isEditing = true;
    window.scrollTo(0, 0);
  }

  prepareToResetForm(component: SubmitableForm, form: NgForm) {
    form.resetForm(form.value);
    component.isEditing = false;
  }
}
