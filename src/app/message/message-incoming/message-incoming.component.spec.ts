import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageIncomingComponent } from './message-incoming.component';

describe('MessageIncomingComponent', () => {
  let component: MessageIncomingComponent;
  let fixture: ComponentFixture<MessageIncomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageIncomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageIncomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
