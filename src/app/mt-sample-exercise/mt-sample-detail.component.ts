import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SelectedFarmService } from './selected-farm.service';
import { Farm } from './farm';

@Component({
  selector: 'mt-sample-detail',
  templateUrl: './mt-sample-detail.component.html',
})
export class MtSampleDetailComponent implements OnChanges {
  @Input() selectedFarm: number;
  farm: Farm;

  constructor(private selectedFarmService: SelectedFarmService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedFarm.currentValue !== undefined) {
      const id = changes.selectedFarm.currentValue - 1;
      this.selectedFarmService.getFarmById(id).then((res) => {
        this.farm = res;
      });
    }
  }
}
