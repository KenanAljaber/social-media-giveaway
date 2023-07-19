import { Component, HostListener, AfterViewInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  isNavbarVisible:boolean=false;


  mobileSize:number=990;
  isDesktop:boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.isDesktop = event.target.innerWidth > this.mobileSize;
  }
  constructor(private router:Router){
    this.isDesktop=window.innerWidth > this.mobileSize;
    
  }
  ngAfterViewInit(): void {
      
      
  }

  toggleNavBar(){
    this.isNavbarVisible=!this.isNavbarVisible;
  }

  goToHome(){
    this.router.navigate(['/'])
  }


}
