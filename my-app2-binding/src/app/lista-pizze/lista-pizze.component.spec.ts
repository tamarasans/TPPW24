import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPizzeComponent } from './lista-pizze.component';

describe('ListaPizzeComponent', () => {
  let component: ListaPizzeComponent;
  let fixture: ComponentFixture<ListaPizzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPizzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPizzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
