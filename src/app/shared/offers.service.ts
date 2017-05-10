import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class OffersService {

  constructor(protected http: Http) { }

  /**
   * Get mocked response
   * @returns
   */
  getAll()  {
    return this.http.get( 'assets/offers.json')
      .map((response: Response) => response.json());
  }
}
