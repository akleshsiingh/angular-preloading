import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _sharedService: SharedService ) { }

  ngOnInit() {
  }

  getName() {
    return this._sharedService.getName();
  }

}
