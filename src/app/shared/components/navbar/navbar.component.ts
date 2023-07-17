import { Component, HostListener, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  isNavbarVisible:boolean=false;

  @ViewChild('main') mainDev:ElementRef|null=null;

  mobileSize:number=990;
  isDesktop:boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.isDesktop = event.target.innerWidth > this.mobileSize;
  }
  constructor(private renderer:Renderer2){
    this.isDesktop=window.innerWidth > this.mobileSize;
    
  }
  ngAfterViewInit(): void {
      
      
  }

  toggleNavBar(){
    this.isNavbarVisible=!this.isNavbarVisible;

    if(this.isNavbarVisible){
     this.showNavbar();
     return; 
    }
    this.hideNavbar();
  }
  hideNavbar() {
  
  }
  showNavbar() {
 
  }

}
