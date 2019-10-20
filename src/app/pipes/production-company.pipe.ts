import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productionCompany'
})
export class ProductionCompanyPipe implements PipeTransform {

  private url:string = `https://image.tmdb.org/t/p/h50`;

  transform(production_company: any, ...arg: any): any {
    if(production_company.logo_path != null){
    return `${this.url}${production_company.logo_path}`;
  }
  else{
    return `assets/img/default-production-company.jpg`;
  }
}
}
