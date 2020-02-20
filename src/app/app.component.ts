import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css']
})
export class AppComponent {
  title = 'HSG-ChatApp';

  public historyMessage: string = '';

  public onSubmitMessage(value: string): void {
    this.historyMessage += value;
  }
}