import { Component, OnInit } from '@angular/core';
import { SubjectDataSharingService } from "../../../shared/services/subject-data-sharing.service";

@Component({
  selector: 'app-sub-client',
  templateUrl: './sub-client.component.html',
  styleUrls: ['./sub-client.component.css']
})
export class SubClientComponent implements OnInit {

  public fromChildData: string = "From Child Data";
  public fromSubjectMsg: string;
  constructor(private subjectService: SubjectDataSharingService) {
  }

  ngOnInit() {
    setTimeout(() => {
      alert(this.subjectService.getGlobalTest());
    }, 100);

    this.subjectService.currentData.subscribe(m => this.fromSubjectMsg = m);
  }

  private count: number = 1;
  public NewMessage = (): void => {
    this.subjectService.InvokeData("Messege " + this.count++);
  }
}
