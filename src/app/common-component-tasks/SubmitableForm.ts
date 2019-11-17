import { SuccessMessageComponent } from '../shared/success-message/success-message.component';
import { FailureMessageComponent } from '../shared/failure-message/failure-message.component';

export interface SubmitableForm {
    isLoading: boolean;
    isEditing: boolean;
    successMessage: SuccessMessageComponent;
    failureMessage: FailureMessageComponent;
    loadData(): void;
}