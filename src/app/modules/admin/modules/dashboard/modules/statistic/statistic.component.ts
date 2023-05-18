import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Statistic } from './model/statistic.response';
import { StatisticService } from './services/statistic.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticComponent implements OnInit {
  /**
   *
   */
  statisticList$!: Observable<Statistic>;

  /**
   *
   * @param $statistic
   */
  constructor(private $statistic: StatisticService) {}

  /**
   *
   */
  private getStatisticList() {
    this.statisticList$ = this.$statistic
      .getStatisticsList()
      .pipe(map((result) => result.data));
  }

  /**
   *
   */
  ngOnInit() {
    this.getStatisticList();
  }
}
