import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DataService } from './data.service';
import { Farm } from './farm';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html',
})
export class MtSampleListIndexComponent implements OnInit {
  @Output() selectFarm: EventEmitter<any> = new EventEmitter();
  allFarms: Farm[] = [];
  filteredFarms: Farm[] = [];
  byNo: boolean = false;
  byActiveDate: boolean = false;


  constructor(private dataSevice: DataService) {}

  ngOnInit() {
    
    this.dataSevice.getFarms().then((res) => {
      this.allFarms = res;
      this.filteredFarms = res;
    });
  }

  apiCall() {
    this.dataSevice.getResponse().subscribe(
      (res) => console.log('HTTP response', res),
      (err) => {
        window.alert("ERROR 404: Page not found!")
      }
    );
  }

  clickOnFarm(id: number) {
    this.selectFarm.emit(id);
  }

  clickOnFilter() {
    if (this.byNo || this.byActiveDate)
      this.filteredFarms = this.allFarms.filter(({ FarmNo, ActiveDate }) => {
        if (this.byNo && this.byActiveDate)
          return !!FarmNo.match(/100/) && ActiveDate.getFullYear() === 2020;
        if (!this.byNo && this.byActiveDate)
          return ActiveDate.getFullYear() === 2020;
        if (this.byNo && !this.byActiveDate) return !!FarmNo.match(/100/);
      });
    else this.filteredFarms = this.allFarms;
  }
}
