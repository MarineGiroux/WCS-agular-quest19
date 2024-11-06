import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartUserDetailComponent } from './smart-user-detail.component';

describe('SmartUserDetailComponent', () => {
  let component: SmartUserDetailComponent;
  let fixture: ComponentFixture<SmartUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartUserDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
