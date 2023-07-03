import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AboutImgService } from './services/about-img.service';
import { AboutUsContentService } from './services/about-us-content.service';
import { Observable, map } from 'rxjs';
import { StudyPlanService } from './services/study-plan.service';
import { MaterialsService } from './services/materials.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  listOfData = [
    {
      name: 'td1',
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
      name: 'td4',
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
      name: 'td8',
      start: '14.00',
      finish: '15.00',
    },
    {
      name: 'td3',
      start: '15.00',
      finish: '15.10',
    },
    {
      name: 'td10',
      start: '15.10',
      finish: '16.10',
    },
  ];

  aboutImage!: string;

  tabs$!: Observable<any[]>;

  tables$!: Observable<any[]>;

  materials$!: Observable<any[]>;

  constructor(
    private $aboutImg: AboutImgService,
    private $aboutUsContent: AboutUsContentService,
    private $program: StudyPlanService,
    private $materials: MaterialsService
  ) {}

  ngOnInit() {
    this.$aboutImg.getAboutImage().subscribe((result: any) => {
      this.aboutImage = result.data[0].photo;
    });

    this.tabs$ = this.$aboutUsContent
      .getAboutUsContent()
      .pipe(map((result) => result.data));

    this.tables$ = this.$program
      .getStudyPlan()
      .pipe(map((result) => result.data));

    this.materials$ = this.$materials
      .getMaterials()
      .pipe(map((result) => result.data));
  }
}
