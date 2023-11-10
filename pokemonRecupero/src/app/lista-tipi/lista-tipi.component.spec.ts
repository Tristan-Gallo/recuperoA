import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipiComponent } from './lista-tipi.component';

describe('ListaTipiComponent', () => {
  let component: ListaTipiComponent;
  let fixture: ComponentFixture<ListaTipiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaTipiComponent]
    });
    fixture = TestBed.createComponent(ListaTipiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
