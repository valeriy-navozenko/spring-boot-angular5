import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit {

  public commits: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loadCommits();
  }

  loadCommits() {
    this.http.get(`${environment.apiUrl}/commits?repo=angular/angular`).subscribe(data => {
      this.commits = data;
      console.log(data);
    });
  }

}
