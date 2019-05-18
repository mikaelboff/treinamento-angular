import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotasComponent } from './page-notas.component';

describe('PageNotasComponent', () => {
  let component: PageNotasComponent;
  let fixture: ComponentFixture<PageNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
