import { EnrollementService } from '../enrollement.service';
import { User, Address } from '../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdf-forms',
  templateUrl: './tdf-forms.component.html',
  styleUrls: ['./tdf-forms.component.css']
})
export class TdfFormsComponent implements OnInit {

  constructor(private enrollService : EnrollementService) { }

  ngOnInit() {
  }

  topics= ['Angular', 'React', 'Vue'];
  addressModel = new Address('Vinayaka', 'Bangalore', 'Karntaka', 560032);
  userModel = new User('Kumar', 'kumar@test.com', 1234567890, '', 'morning', true, this.addressModel);
  
  onFormSubmit() {
    console.log("Entered");
    this.enrollService.enroll(this.userModel)
      .subscribe(
      data=> console.log("Success !", data),
      error=>console.log("Error !", error)  
      );
    
  }
}
