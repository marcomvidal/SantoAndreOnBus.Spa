import { SuccessMessageComponent } from '../shared/success-message/success-message.component';
import { FailureMessageComponent } from '../shared/failure-message/failure-message.component';

export interface ListableResource {
    isLoading: boolean;
    successMessage: SuccessMessageComponent;
    failureMessage: FailureMessageComponent;
    loadData(): void;
}