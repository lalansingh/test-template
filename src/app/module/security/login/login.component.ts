import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userId: string;
  public userName: string;
  public password: string;
  constructor(private route: Router) { }

  ngOnInit() {
    // this.userId = 'lalan';
    // this.userName = 'singh';
  }
  public onLoginClick = (): void => {
    this.route.navigate(['/dashboard']);
  }
}
