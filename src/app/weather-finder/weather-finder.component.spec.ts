import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFinderComponent } from './weather-finder.component';

describe('WeatherFinderComponent', () => {
  let component: WeatherFinderComponent;
  let fixture: ComponentFixture<WeatherFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherFinderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
