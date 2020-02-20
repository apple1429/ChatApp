import { Component, OnInit } from '@angular/core';

import { Person } from '../shared/models/person';
import { ChatService } from '../shared/services/chat-service.service';
import { ChatMessage } from '../shared/models/chat-message';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {
  public chatMessage: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  public addMessage(usereturn:boolean): void { 
    //if usereturn "this.chatMessage" auf ein bit reduzieren --> break gewährleisten (history)
    if (this.chatMessage.trim() === '') {
      return;
    }
console.log(this.chatMessage.length);

    if (!Person.Nickname) {
      alert('Nutzername fehlt!');
      return;
    }
    

    let messageToSend: ChatMessage = new ChatMessage();
    // let messageToSend: ChatMessage = new ChatMessage(this.chatMessage, Person.Nickname, null);

    messageToSend.message = this.chatMessage;
    messageToSend.nickname = Person.Nickname;

    this.chatService.addToHistory(messageToSend)
      .subscribe(
        (response: ChatMessage) => {
          this.chatMessage = '';
        }
      )
  }
}