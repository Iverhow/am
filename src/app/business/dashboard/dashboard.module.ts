import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedMaterialModule} from "../../shared-material/shared-material.module";
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from '@angular/router';

const routing = RouterModule.forChild([
  {path: '', component: DashboardComponent}
]);

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    routing,
    SharedMaterialModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
