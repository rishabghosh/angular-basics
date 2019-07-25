import { Component } from '@angular/core';
import {FeatureToggleDirective} from  "./feature-toggle.directive"

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
