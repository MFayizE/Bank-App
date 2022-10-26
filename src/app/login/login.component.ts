import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  userDetails = {
    1000:{acno:1000, username:'Akhil', password:1000, balance:10000},
    1001:{acno:1001, username:'Rono', password:1200, balance:10000},
    1002:{acno:1002, username:'Joyal', password:1040, balance:10000},
  }
  constructor() { }

  ngOnInit(): void {
  }

}
