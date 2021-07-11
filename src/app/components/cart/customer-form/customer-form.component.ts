import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customerForm = this.fb.group({
    firstName: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
    secondName: ['', Validators.compose([Validators.required])],
    lastName: [''],
    // telNumber: ['', [Validators.pattern('^(900|901)+[0-9]{8}')]],
    telNumber: [''],
    email: ['', Validators.compose([Validators.required])],
    address: this.fb.group({
      state: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      street: ['', Validators.compose([Validators.required])],
    }),
    comment: [''],
  });

  constructor(
    private fb: FormBuilder,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  parseToJSONCartItems() {
    this.cartService.parseToJSONCartItems();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.customerForm.value);
    this.parseToJSONCartItems();
  }

  get aliases() {
    return this.customerForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
