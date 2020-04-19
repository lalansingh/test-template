import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class SubjectDataSharingService {
  private dataSource = new BehaviorSubject<string>("Hello Lalan..");
  public currentData = this.dataSource.asObservable();

  public globalTest: any;

  constructor() { }

  public InvokeData = (message: string): void => {
    this.dataSource.next(message);
  }

  public setGlobalTest(item: any) {
    this.globalTest = item;
  }
  public getGlobalTest(): any {
    return this.globalTest
  }
}
