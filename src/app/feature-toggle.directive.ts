import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFeatureToggle]'
})
export class FeatureToggleDirective implements OnInit {
  @Input() appFeatureToggle: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit() {
    console.log("...")
    if (this.appFeatureToggle) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      return
    }
    this.viewContainer.clear()
  }

}

//the input property and the selector should have the same name 
//because when using [ someValue ] you are trying to bind to it
//that's why it's important to provide a input for that also