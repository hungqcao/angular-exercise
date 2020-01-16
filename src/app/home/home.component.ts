import { Component, OnInit } from '@angular/core';
import { TimezoneDBService } from '../shared/timezon-db/timezone-db.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {

  errorMessage: string;
  displayTime: string;

  /**
   * Creates an instance of the HomeComponent with the injected
   * TimezoneDBService.
   *
   * @param {TimezoneDBService} timezoneDbService - The injected TimezoneDBService.
   */
  constructor(
    private timezoneDbService: TimezoneDBService) { }

  ngOnInit() { }

  /**
   * Handle the nameListService observable
   */
  searchTimezone() {
    this.timezoneDbService.getTimeZoneByPosition(40.689247, -74.044502)
      .subscribe(
        data => this.displayTime = data.formatted,
        error => this.errorMessage = <any>error
      );
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    // this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
  }

}
