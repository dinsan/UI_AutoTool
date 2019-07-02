import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
  <div class="example-config">
      Selected Value: {{selectedValue}}
  </div>
  <kendo-dropdownlist [data]="listItems" [(ngModel)]="selectedValue"></kendo-dropdownlist>
`
})
export class HomeComponent implements OnInit {

  public listItems: Array<string> = [ "Small", "Medium", "Large" ];
  public selectedValue: string = "Medium";
  ngOnInit() {
  }

}
