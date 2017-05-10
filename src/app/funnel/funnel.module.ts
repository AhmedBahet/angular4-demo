import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers/offers.component';
import {Routes, RouterModule} from "@angular/router";
import {OffersService} from "../shared/offers.service";

const funnelRoutes: Routes = [
  {path: 'offers', component: OffersComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(funnelRoutes)
  ],
  declarations: [OffersComponent],
  providers: [OffersService],
})
export class FunnelModule { }
