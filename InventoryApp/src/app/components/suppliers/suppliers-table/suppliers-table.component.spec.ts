import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersTableComponent } from './suppliers-table.component';

describe('SuppliersTableComponent', () => {
  let component: SuppliersTableComponent;
  let fixture: ComponentFixture<SuppliersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
