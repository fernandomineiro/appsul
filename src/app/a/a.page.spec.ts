import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { APage } from './a.page';

describe('APage', () => {
  let component: APage;
  let fixture: ComponentFixture<APage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(APage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
