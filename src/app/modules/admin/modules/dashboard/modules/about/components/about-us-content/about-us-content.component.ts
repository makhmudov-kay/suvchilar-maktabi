import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-us-content',
  templateUrl: './about-us-content.component.html',
  styleUrls: ['./about-us-content.component.less'],
})
export class AboutUsContentComponent implements OnInit {
  data$!: Observable<any>;

  isVisible = false;

  tableLoading = false;

  modalTitle = 'add';

  errorMessage = '';

  form!: UntypedFormGroup;

  loadingBtn = false;

  constructor() {}

  ngOnInit() {}

  showModal(editingData?: any) {
    this.isVisible = true;
  }

  deleteManager(id: number) {}

  handleCancel() {}

  handleOk() {}
}
