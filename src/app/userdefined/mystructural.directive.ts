import { Directive, TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appMystructural]'
})
export class MystructuralDirective {

 
  constructor(private mytemplate:TemplateRef<unknown>,private viewContainer:ViewContainerRef) {
    
   }
   @Input('appMystructural') set appMystructural(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.mytemplate);
    } else {
      this.viewContainer.clear();
    }
  }
}
