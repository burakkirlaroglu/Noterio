import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceComponentComponent } from './price-component.component';

describe('PriceComponentComponent', () => {
  let component: PriceComponentComponent;
  let fixture: ComponentFixture<PriceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
