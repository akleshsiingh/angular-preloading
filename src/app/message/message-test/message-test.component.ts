import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-message-test',
  templateUrl: './message-test.component.html',
  styleUrls: ['./message-test.component.css']
})
export class MessageTestComponent implements OnInit, AfterViewInit {

  @ViewChild('scrollMe') scrollMe: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // let t = setTimeout(()=>{
    //   this.scrollMe.nativeElement.scrollTop = this.scrollMe.nativeElement.scrollHeight;
    //   clearInterval(t);
    // },5000)
    this.scrollMe.nativeElement.scrollTop = this.scrollMe.nativeElement.scrollHeight;
  }


}
