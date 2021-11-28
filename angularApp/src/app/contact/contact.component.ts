import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm:NgForm;
  defaultCourse ='Angular';
  userName = '';
  genders = [
    {id :'1', value:'Male'},
    {id :'2', value:'Female'},
  ];
  defaultGender = 'Female';
  submitted = false;
  formData = {
    username: '',
    email: '',
    course: '',
    gender: ''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log(this.myForm);
    this.submitted = true;
    this.formData.username = this.myForm.value.userDetail.username;
    this.formData.email = this.myForm.value.userDetail.email;
    this.formData.course = this.myForm.value.course;
    this.formData.gender = this.myForm.value.gender;

    this.myForm.reset();
  }

  setUsername(){
    // this.myForm.setValue({
    //   userDetail: {
    //     username: 'UXtrendz',
    //     email: ''
    //   },
    //   course:'Angular',
    //   gender:'Male'
    // })
    this.myForm.form.patchValue({
      userDetail: {
        username: 'UXtrendz',
      }
    })
  }

}
