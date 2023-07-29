import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-number-form',
  templateUrl: './phone-number-form.component.html',
  styleUrls: ['./phone-number-form.component.css']
})
export class PhoneNumberFormComponent {

  phoneNumbers: string[] = ['']; // Initialize with one empty input field

  addPhoneNumber() {
    this.phoneNumbers.push('');
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.splice(index, 1);
  }

  onSubmit() {
    const phoneNumberData = this.phoneNumbers.map((phoneNumber, index) => ({
      [`phoneNumber${index + 1}`]: phoneNumber
    }));
    console.log(phoneNumberData);
  }
}

