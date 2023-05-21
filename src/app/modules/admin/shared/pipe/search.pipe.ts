import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(application: any, search = ''): any {
    if (!search.trim()) {
      return application;
    }

    return application.filter((el: any) => {
      console.log(el);

      return (
        el.f_name?.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        el.l_name?.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        el.phone?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    });
  }
}
