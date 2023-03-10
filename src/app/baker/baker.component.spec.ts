import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakerComponent } from './baker.component';

describe('BakerComponent', () => {
  let component: BakerComponent;
  let fixture: ComponentFixture<BakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
