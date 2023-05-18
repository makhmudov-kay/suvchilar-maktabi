import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import { read, utils, writeFile } from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class ExportAsExcellService {
  constructor() {}

  exportAsExcell(data: any, headers: any) {
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    ws['!cols'] = [
      { wch: 16 },
      { wch: 14 },
      { wch: 20 },
      { wch: 15 },
      { wch: 30 },
      { wch: 25 },
      { wch: 20 },
      { wch: 25 },
      { wch: 20 },
    ];
    utils.sheet_add_aoa(ws, headers, { origin: 'A2' });
    utils.sheet_add_json(ws, data, {
      origin: 'A3',
      skipHeader: true,
    });
    utils.book_append_sheet(wb, ws, 'Arizalar');
    writeFile(wb, 'suvchilar-maktabi.xlsx');
  }
}
