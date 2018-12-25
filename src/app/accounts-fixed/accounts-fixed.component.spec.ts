import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsFixedComponent } from './accounts-fixed.component';

describe('AccountsFixedComponent', () => {
  let component: AccountsFixedComponent;
  let fixture: ComponentFixture<AccountsFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
