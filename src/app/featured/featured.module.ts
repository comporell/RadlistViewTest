import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { FeaturedRoutingModule } from './featured-routing.module'
import { FeaturedComponent } from './featured.component'

@NgModule({
  imports: [NativeScriptCommonModule, 
    NativeScriptUIListViewModule,
    FeaturedRoutingModule],
  declarations: [FeaturedComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FeaturedModule {}
