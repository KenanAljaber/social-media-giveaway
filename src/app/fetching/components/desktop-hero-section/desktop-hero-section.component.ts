import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'fetching-desktop-hero-section',
  templateUrl: './desktop-hero-section.component.html',
  styleUrls: ['./desktop-hero-section.component.scss']
})
export class DesktopHeroSectionComponent implements OnInit {
  mobileSize:number=1280;
  isDesktop:boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.isDesktop = event.target.innerWidth > this.mobileSize;
  }
  constructor(){
    this.isDesktop=window.innerWidth > this.mobileSize;
  }

  ngOnInit(): void {
  }
}
