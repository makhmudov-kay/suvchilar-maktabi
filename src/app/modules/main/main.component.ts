import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit, AfterViewInit {
  /**
   */
  certificateId!: number;

  /**
   *
   * @param route
   * @param cd
   */
  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.route.queryParams.subscribe((params) => {
      this.certificateId = params['certificate_id'];
      this.cd.markForCheck();
    });
  }

  /**
   *
   */
  ngOnInit() {}

  /**
   *
   */
  ngAfterViewInit(): void {
    if (this.certificateId) {
      const element = this.document.querySelector('#certificate');
      if (element) {
        element.scrollIntoView();
      }
    }
  }
}
