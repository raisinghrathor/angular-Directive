import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
})

export class NgTemplateComponent implements OnInit {
  show: boolean;
  constructor() {
    this.show = true;
    
  }
 
  thenTemplate: TemplateRef<any> | null = null;
  @ViewChild('primarytemplate', { static: true })
  primarytemplate: TemplateRef<any> | null = null;
  @ViewChild('secondarytemplate', { static: true })
  secondarytemplate: TemplateRef<any> | null = null;

  onChangeTemplate() {
    this.thenTemplate =
      this.thenTemplate === this.primarytemplate
        ? this.secondarytemplate
        : this.primarytemplate;
  }
  ngOnInit() {
    this.thenTemplate = this.primarytemplate;
  }
}
