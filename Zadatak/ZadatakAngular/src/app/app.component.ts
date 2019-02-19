import { Component, OnInit } from '@angular/core';
import { DataValueService } from './data-value.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  data: string;

  constructor(private dataValueService: DataValueService) {

  }

  ngOnInit() {
    this.dataValueService.getDate().subscribe(data => {
      this.data = data;
    })
  }

}
