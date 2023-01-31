import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-writer',
  template: `<p>{{writername}} - {{bookname}}</p>`,
})
export class WriterComponent {
  @Input('name') writername: string;
  @Input('book') bookname: string;
}
