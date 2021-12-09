import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesTableComponent } from './images-table.component';

describe('ImagesTableComponent', () => {
  let component: ImagesTableComponent;
  let fixture: ComponentFixture<ImagesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
