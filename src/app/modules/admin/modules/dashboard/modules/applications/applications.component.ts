import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ApplicationsService } from './services/applications.service';
import { Application } from './models/application.response';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationsComponent implements OnInit {
  data!: Application[];

  constructor(
    private $applications: ApplicationsService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.$applications.getApplicationsList().subscribe((result) => {
      this.data = result.data;
      this.cd.markForCheck();
    });
  }
}
