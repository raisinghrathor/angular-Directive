import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  VERSION,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { WriterComponent } from './writer/writer.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('name', { static: false }) elName: ElementRef;
  @ViewChild('city', { static: false }) elCity: ElementRef;

  ngAfterViewInit() {
    this.elName.nativeElement.style.backgroundColor = 'red';
    this.elName.nativeElement.style.color = 'cyan';
    this.elCity.nativeElement.style.backgroundColor = 'red';
    this.elCity.nativeElement.style.color = 'cyan';
    console.log('----@ViewChildren with component-----');
    this.writers1.forEach((writer) => console.log(writer));
    console.log('Count:', this.writers1.length);
    this.writers1.changes.subscribe((list) => {
      list.forEach((writer) =>
        console.log(writer.writername + ' - ' + writer.bookname)
      );
      console.log('Count:', this.writers1.length);
    });
    console.log('----@ViewChildren with ElementRef----');
    this.writers2.forEach((writer) => console.log(writer));
    console.log('Count:', this.writers2.length);

    console.log('---@ViewChildren with ViewContainerRef----');
    this.writer3.forEach((cref=>console.log(cref)))
    console.log('Count:',this.writer3.length);

  }
  //writer component-viewchildren
  allwritervisible: boolean = false;
  @ViewChildren(WriterComponent) writers1: QueryList<WriterComponent>;
  @ViewChildren(WriterComponent, { read: ElementRef })
  writers2: QueryList<ElementRef>;
  @ViewChildren(WriterComponent,{read:ViewContainerRef})writer3:QueryList<ViewContainerRef>
  onShowWritersVisible() {
    this.allwritervisible = this.allwritervisible === true ? false : true;
  }
}
