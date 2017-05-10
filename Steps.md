## Prerequisites

#### Install nodejs and npm
 
Run 

    cd ~
    
    curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
   
    sudo bash nodesource_setup.sh
  
    sudo apt-get install nodejs
   
    sudo apt-get install build-essential
   
    node -v
   
    npm -v
   
Output :
    
    node: 6.10.x
     
    npm 3.10.x
      
The nodejs package contains the nodejs binary as well as npm, so you don't need to install npm separately. However, in order for some npm packages to work (such as those that require compiling code from source), you will need to install the build-essential package
 
 
#### Install the Angular-CLI
  
 Run 
    
    sudo npm install -g @angular/cli
   
    ng -v
    
Output :
 
    angular: 4.1.x
 
    angular/cli: 1.0.x

## Create ne project

    ng new angular4-demo

    cd angular4-demo

## Create ne project

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

# Create new Module

    ng g m funnel
    
# Create new component

    cd src/app/funnel 
    
    ng g c offers

# Add Routing rules 

1) funnel.module.ts

       
    const funnelRoutes: Routes = [
      {path: 'offers', component: OffersComponent }
    ];
    
   Add the funnelRoutes to imports   
       
    RouterModule.forRoot(funnelRoutes)      
       
   Add the OffersComponent to declarations 

    declarations: [OffersComponent]



2) app.module.ts

  
    const appRoutes: Routes = [
        {path: '', redirectTo: 'offers', pathMatch: 'full'}
    ];
        
Add the appRoutes and FunnelModule to imports  

    FunnelModule,
    RouterModule.forRoot(appRoutes)

# Add router-outlet in app.component.html
  
    <router-outlet></router-outlet>
    
# Create a service 
1)  inside src/app/shared 
    
    
    ng g s offers

2) Add getall methode

    
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

3) provide the service in funnel.module.ts
  
        
     providers: [OffersService]
    
4) Get offers in the component : offers.component.ts

  
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

5) Show offers in offers.component.html 


      <h1>Offers List :</h1>
      <ul>
        <li *ngFor="let offer of offers">
          <img src="{{offer.operator.logo}}"/> {{offer.service.label}} <hr/>
        </li>
      </ul>

