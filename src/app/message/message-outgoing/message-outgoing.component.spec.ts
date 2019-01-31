import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOutgoingComponent } from './message-outgoing.component';

describe('MessageOutgoingComponent', () => {
  let component: MessageOutgoingComponent;
  let fixture: ComponentFixture<MessageOutgoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageOutgoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageOutgoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
