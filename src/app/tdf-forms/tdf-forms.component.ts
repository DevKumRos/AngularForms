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
  submitted= false;
  topics= ['Angular', 'React', 'Vue'];
  addressModel = new Address('Vinayaka', 'Bangalore', 'Karntaka', 560032);
  userModel = new User('Kumar', 'kumar@test.com', 1234567890, '', 'morning', true, this.addressModel);
  responseInfo = false;
  responseDate:User;
  onFormSubmit() {
    console.log("Entered");
    this.submitted = true;
    this.enrollService.enroll(this.userModel)
      .subscribe(
      data=> {console.log("Success !", data);
      this.responseInfo=true;
      this.responseDate =data; 
      },
      error=>console.log("Error !", error)  
      );
    
  }
}
