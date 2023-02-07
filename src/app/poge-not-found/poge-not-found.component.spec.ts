import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PogeNotFoundComponent } from './poge-not-found.component';

describe('PogeNotFoundComponent', () => {
  let component: PogeNotFoundComponent;
  let fixture: ComponentFixture<PogeNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PogeNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PogeNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
