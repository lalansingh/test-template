import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";


@Injectable()
export class ResolveService implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.getData();
  }
  private getData = (): string => {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next('singh lalan');
        observer.complete();
      }, 2000);
    })
  }
  constructor() { }

}
