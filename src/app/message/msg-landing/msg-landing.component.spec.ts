import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgLandingComponent } from './msg-landing.component';

describe('MsgLandingComponent', () => {
  let component: MsgLandingComponent;
  let fixture: ComponentFixture<MsgLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
