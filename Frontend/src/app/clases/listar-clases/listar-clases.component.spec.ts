import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClasesComponent } from './listar-clases.component';

describe('ListarClasesComponent', () => {
  let component: ListarClasesComponent;
  let fixture: ComponentFixture<ListarClasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarClasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
