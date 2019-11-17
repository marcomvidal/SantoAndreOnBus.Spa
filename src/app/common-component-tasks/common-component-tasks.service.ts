import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ListableResource } from './ListableResource';
import { SubmitableForm } from './SubmitableForm';

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
      component.successMessage.onHide();
      component.failureMessage.onHide();
      component.isLoading = true;

      transactions().subscribe(
        success => {
          component.loadData();
          onSuccess();
          window.scrollTo(0, 0);
        },
        fail => {
          component.isLoading = false;

          if (fail.status == 400 && typeof fail.error == "object" ) { 
            component.failureMessage.showFormErrors(fail.error.errors);
          } else if (fail.status == 400 && typeof fail.error == "string") {
            component.failureMessage.onShow(fail.error, undefined);
          } else {
            component.failureMessage.showConnectivityError();
          }
        });
  }

  prepareToEdit(component: SubmitableForm): void {
    component.isEditing = true;
    window.scrollTo(0, 0);
  }

  prepareToResetForm(component: SubmitableForm, form: NgForm): void {
    form.resetForm(form.value);
    component.isEditing = false;
  }
}