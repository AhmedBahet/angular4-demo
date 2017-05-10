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
    
    
