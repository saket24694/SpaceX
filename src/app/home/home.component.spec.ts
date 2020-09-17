import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('Home Component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});

//Component renders
describe('Render Suite', () => {
  let testComponent: HomeComponent;
  it('should render the component', () => {
    expect(testComponent).toBeTruthy();
  });
});

//Arrays
describe ('Array Suite', () => {
it('Launch years should contain 2010', () => {
expect(launchYears).toContain('2010');
});
});

// Url Update
describe ("Url Suite", () => {
  it('Launch year Url change', () => {  
  const url = filter("2020", null, null);
  expect(url).toBe('http://localhost:4200/home?limit=100&launch_year=2006');  
  //expect(true).toBe(true);
  });
  
  it('Launch success Url change', () => {  
    const url = filter(null, true, null);
    expect(url).toBe('http://localhost:4200/home?limit=100&launch_success=true');  
    //expect(true).toBe(true);
    });
  
    it('Land year Url change', () => {  
      const url = filter(null, null, true);
      expect(url).toBe('http://localhost:4200/home?limit=100&land_success=true');  
      //expect(true).toBe(true);
      });
  })
  