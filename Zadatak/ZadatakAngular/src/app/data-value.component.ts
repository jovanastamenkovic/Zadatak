import { Component, OnInit, Input } from '@angular/core';
import { DataValueService } from './data-value.service';

@Component({
  selector: 'date-value',
  templateUrl: './data-value.component.html',
  providers: []
})
export class DataValueComponent implements OnInit {
  @Input('date') date: string;

  constructor(private dataValueService: DataValueService) { }

  ngOnInit() {
  }

  refresh() {
    this.dataValueService.getDate().subscribe(data => {
      this.date = data;
    });
  }
}
