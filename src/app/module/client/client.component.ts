import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SubClientComponent } from "./sub-client/sub-client.component";
import { SubjectDataSharingService } from "../../shared/services/subject-data-sharing.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit, AfterViewInit, ChangeDetectorRef {
  markForCheck(): void { }
  detach(): void { }
  detectChanges(): void { }
  checkNoChanges(): void { }
  reattach(): void { }

  constructor(private cdRef: ChangeDetectorRef, private subjectService: SubjectDataSharingService) {

  }
  public fromParentData: string;
  public fromSubjectMsg: string;
  @ViewChild(SubClientComponent) child;

  ngAfterViewInit(): void {
    this.fromParentData = this.child.fromChildData;
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.subjectService.setGlobalTest('rakesh from client');
    this.subjectService.currentData.subscribe(m => this.fromSubjectMsg = m);
  }

}
