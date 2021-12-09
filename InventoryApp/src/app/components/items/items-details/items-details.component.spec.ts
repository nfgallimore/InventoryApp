import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDetailsComponent } from './items-details.component';

describe('ItemsDetailsComponent', () => {
  let component: ItemsDetailsComponent;
  let fixture: ComponentFixture<ItemsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
