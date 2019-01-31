import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MsgLandingComponent } from './msg-landing/msg-landing.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageTestComponent } from './message-test/message-test.component';
import { MessageIncomingComponent } from './message-incoming/message-incoming.component';
import { MessageOutgoingComponent } from './message-outgoing/message-outgoing.component';

@NgModule({
  declarations: [MsgLandingComponent, ContactListComponent, MessageListComponent, MessageTestComponent, MessageIncomingComponent, MessageOutgoingComponent],
  imports: [
    CommonModule,
    MessageRoutingModule
  ]
})
export class MessageModule { }
