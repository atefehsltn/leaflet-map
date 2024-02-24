import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdMapComponent } from './third-map.component';

describe('ThirdMapComponent', () => {
  let component: ThirdMapComponent;
  let fixture: ComponentFixture<ThirdMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdMapComponent]
    });
    fixture = TestBed.createComponent(ThirdMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
