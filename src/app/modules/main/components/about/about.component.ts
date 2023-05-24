import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  listOfData = [
    {
      name: "td1",
      start: '8.30',
      finish: '9.30',
    },
    {
      name: 'td2',
      start: '9.30',
      finish: '10.30',
    },
    {
      name: 'td3',
      start: '10.30',
      finish: '10.40',
    },
    {
      name: "td4",
      start: '10.40',
      finish: '11.40',
    },
    {
      name: 'td5',
      start: '11.40',
      finish: '12.00',
    },
    {
      name: 'td6',
      start: '12.00',
      finish: '13.00',
    },
    {
      name: 'td7',
      start: '13.00',
      finish: '14.00',
    },
    {
      name: "td8",
      start: '14.00',
      finish: '15.00',
    },
    {
      name: 'td3',
      start: '15.00',
      finish: '15.10',
    },
    {
      name: "td10",
      start: '15.10',
      finish: '16.10',
    },
  ];
}
