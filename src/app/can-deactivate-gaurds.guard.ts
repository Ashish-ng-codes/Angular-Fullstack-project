// Ashish N U
// 25 October 2024

import { CanDeactivateFn } from '@angular/router';
import { BookingComponentComponent } from './booking-component/booking-component.component';

export const canDeactivateGaurdsGuard: CanDeactivateFn<BookingComponentComponent> = (component, currentRoute, currentState, nextState) => {
  if (component.hasUnsavedChanges()) {
    const valid= confirm('You have unsaved changes! Do you really want to leave?');
    if(valid){
       component.ResetFormFields();
    }
    return valid;
  }
  return true;
};
