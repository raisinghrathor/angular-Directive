import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WriterComponent } from './writer/writer.component';
import { MessageDirective } from './message.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,WriterComponent,MessageDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
