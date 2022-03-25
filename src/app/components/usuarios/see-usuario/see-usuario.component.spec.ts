import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeUsuarioComponent } from './see-usuario.component';

describe('SeeUsuarioComponent', () => {
  let component: SeeUsuarioComponent;
  let fixture: ComponentFixture<SeeUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
