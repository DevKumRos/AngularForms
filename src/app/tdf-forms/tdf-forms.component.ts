import { User, Address } from '../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdf-forms',
  templateUrl: './tdf-forms.component.html',
  styleUrls: ['./tdf-forms.component.css']
})
export class TdfFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  topics= ['Angular', 'React', 'Vue'];
  addressModel = new Address('Vinayaka', 'Bangalore', 'Karntaka', 560032);
  userModel = new User('', 'kumar@test.com', 1234567, '', 'morning', true, this.addressModel);
  
}
