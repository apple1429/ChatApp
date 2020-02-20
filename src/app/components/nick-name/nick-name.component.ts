import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/models/person';

@Component({
  selector: 'app-nick-name',
  templateUrl: './nick-name.component.html',
  styleUrls: ['./nick-name.component.css']
})
export class NickNameComponent implements OnInit {

  public nickname: string;
  public message: string;

  constructor() { }

  ngOnInit() {
  }

  public createNickname(value: string): void {
    // alert(value);
    Person.Nickname = value;

    this.message = `Nutzername: '${value}' erstellt`;
  }
}
