import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsSavingsComponent } from './accounts-savings.component';

describe('AccountsSavingsComponent', () => {
  let component: AccountsSavingsComponent;
  let fixture: ComponentFixture<AccountsSavingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsSavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
