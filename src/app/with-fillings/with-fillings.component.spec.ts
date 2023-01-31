import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithFillingsComponent } from './with-fillings.component';

describe('WithFillingsComponent', () => {
  let component: WithFillingsComponent;
  let fixture: ComponentFixture<WithFillingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithFillingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithFillingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
