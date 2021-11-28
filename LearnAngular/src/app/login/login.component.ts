import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../appServices/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user;
  constructor(private _header:HeaderService, private router:Router) {
    this._header.loggedInUser.subscribe(res=>{
      this.user = res;
    })
   }

  ngOnInit() {
  }

  onLoggedIn(user, password){
    
    // Created Variable for store username & password value
    var userName = user.value;
    var passWord = password.value;
    
    if(passWord =='123'){
      this._header.loggedInUser.next('Uxtrendz')
    
      // Logging values
      // console.log('email: '+ email.value);
      console.log('password: '+ passWord);
  
      // Assign Value Username to loggedInUser (Subject)
      this._header.loggedInUser.next(userName);

      this.router.navigate(['home'])
    }
    else{
      alert('Please Fill Correct Details')
    }
    
  }

}
