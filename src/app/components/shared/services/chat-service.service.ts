import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ChatMessage } from '../models/chat-message';

@Injectable()
export class ChatService {

  private actionUrl: string;

  constructor(private http: HttpClient) {
    // this.actionUrl = 'http://localhost:3000/history'; <- Eigene gebaute API
    this.actionUrl = 'http://hsgapi.azurewebsites.net/history';
  }

  public addToHistory(message: ChatMessage): Observable<ChatMessage> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http.post<ChatMessage>(this.actionUrl, message, options);
  }

  public getHistory(): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(this.actionUrl);
  }
}