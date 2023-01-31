import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFillingsComponent } from './no-fillings.component';

describe('NoFillingsComponent', () => {
  let component: NoFillingsComponent;
  let fixture: ComponentFixture<NoFillingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoFillingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoFillingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
