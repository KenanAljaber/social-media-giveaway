import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostWidgetComponent } from './search-post-widget.component';

describe('SearchPostWidgetComponent', () => {
  let component: SearchPostWidgetComponent;
  let fixture: ComponentFixture<SearchPostWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPostWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPostWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
