import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  count = 0;
  constructor(private router: Router, private _shared: SharedService) { }

  ngOnInit() {
  }

  goToLogin(){

    this.count = this.count+1;
    this._shared.setName('hello vishnu '+this.count);
    this.router.navigate(['auth']);
  }

}
