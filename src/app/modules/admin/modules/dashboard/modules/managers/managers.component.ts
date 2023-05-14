import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ManagersService } from './services/managers.service';
import { Manager } from './models/mangers.response';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagersComponent implements OnInit {
  /**
   * Не получилось принять дату через map
   */
  data!: Manager[];

  /**
   *
   * @param $managers
   * @param cd
   */
  constructor(
    private $managers: ManagersService,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  private getManagersList() {
    this.$managers.getManagersList().subscribe((result) => {
      this.data = result.data;
      this.cd.markForCheck();
    });
  }

  /**
   *
   */
  ngOnInit() {
    this.getManagersList();
  }
}
