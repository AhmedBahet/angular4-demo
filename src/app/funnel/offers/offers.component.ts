import { Component, OnInit } from '@angular/core';
import {OffersService} from "../../shared/offers.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers: any;
  constructor(private  offersService: OffersService) { }

  ngOnInit() {
    this.offersService.getAll().subscribe(
      data => {
        this.offers = data.offers;
        console.log(this.offers);
      },
      error => console.log(error)
    );
  }

}
