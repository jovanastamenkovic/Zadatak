import { Component, OnInit } from '@angular/core';
import { ZadatakService } from './zadatak.service';
import { refreshDescendantViews } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'my-cmpdate',
  templateUrl: './zadatak.component.html',
  styleUrls: ['./zadatak.component.scss'],
  providers: [ZadatakService]
})
export class ZadatakComponent implements OnInit {

  public date: string;
  constructor(private zadatakService: ZadatakService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.zadatakService.getZadatak().subscribe(data => {
        this.date = data.DateInString;
  });
}

}
