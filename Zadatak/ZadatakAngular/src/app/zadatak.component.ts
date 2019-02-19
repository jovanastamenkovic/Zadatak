import { Component, OnInit, Input } from '@angular/core';
import { ZadatakService } from './zadatak.service';

@Component({
  selector: 'date-value',
  templateUrl: './zadatak.component.html',
  providers: [ZadatakService]
})
export class ZadatakComponent implements OnInit {
  @Input('date') date: string;
  constructor(private zadatakService: ZadatakService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.zadatakService.getDate().subscribe(data => {
        this.date = data;
  });
}
}
