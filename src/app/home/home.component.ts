import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { TimezoneDBService } from '../shared/timezon-db/timezone-db.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {

  latlngForm: FormGroup
  errorMessage: string;
  isLoading: boolean;
  displayTime: string;

  /**
   * Creates an instance of the HomeComponent with the injected
   * TimezoneDBService.
   *
   * @param {TimezoneDBService} timezoneDbService - The injected TimezoneDBService.
   */
  constructor(
    private timezoneDbService: TimezoneDBService) {
    this.latlngForm = new FormGroup({
      latitute: new FormControl('', [
        Validators.required
      ]),
      longtitute: new FormControl('', [
        Validators.required
      ]),
    });
    this.isLoading = false;
  }

  ngOnInit() { }

  /**
   * Handle the nameListService observable
   */
  searchTimezone() {
    this.isLoading = true;
    const latVal = this.latlngForm.controls['latitute'].value;
    const lngVal = this.latlngForm.controls['longtitute'].value;
    this.timezoneDbService.getTimeZoneByPosition(latVal, lngVal)
      .subscribe(
        data => this.displayTime = `${data.formatted} ${data.zoneName}`,
        error => this.errorMessage = <any>error,
        () => this.isLoading = false
      );
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    // this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
  }

}
