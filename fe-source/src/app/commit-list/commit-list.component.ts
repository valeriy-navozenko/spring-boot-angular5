import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import * as moment from 'moment';
import {RoundPipe} from '../round.pipe';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css']
})
export class CommitListComponent implements OnInit {

  public commits: any = [];
  public groupedByAuthor: any = [];

  constructor(private http: HttpClient, private roudPipe: RoundPipe) {
  }

  ngOnInit() {
    this.loadCommits();
  }

  loadCommits() {
    this.http.get(`${environment.apiUrl}/commits?repo=angular/angular`).subscribe(data => {
      this.commits = data;
      this.groupedByAuthor = this.commits.reduce(function (r, a) {
        r[a.author.login] = r[a.author.login] || [];
        r[a.author.login].push(a);
        return r;
      }, Object.create(null));
    });
  }

  getKeys(item) {
    return Object.keys(item);
  }

  convertCommitMessage(message) {
    return message.replace(/(?:\r\n|\r|\n)/g, ' ');
  }

  getTimeAgo(date) {
    const endDate = moment();
    const duration = moment.duration(endDate.diff(date));
    const durationInHours = duration.asHours();
    if (durationInHours < 1) {
      return 'less then hour';
    } else if (durationInHours === 1) {
      return '1 hour';
    } else if (durationInHours <= 24) {
      return this.roudPipe.transform(durationInHours) + ' hours';
    } else {
      return this.roudPipe.transform(duration.asDays()) + ' day(s)';
    }
  }

}
