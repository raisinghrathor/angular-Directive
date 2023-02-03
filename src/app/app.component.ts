import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  TemplateRef,
  VERSION,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { MessageDirective } from './message.directive';
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
   
     
      //MessageDirective
      console.log("@ViewChildren with Directive");
      console.log("View Children Length",this.msgList.length);
       this.msgList.forEach(msgd=>msgd.vcRef.createEmbeddedView(this.msgTempRef));
      
    
    
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
  //Message Directive
  @ViewChildren(MessageDirective) msgList:QueryList<MessageDirective>
  @ViewChild('msgTemp',{static:false})msgTempRef:TemplateRef<any>;

}
