import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usa-news',
  templateUrl: './usa-news.component.html',
  styleUrls: ['./usa-news.component.css']
})
export class UsaNewsComponent implements OnInit {

  news: any =[];

  constructor(private _newsService: NewsService) { }

  ngOnInit(): void {
    this._newsService.getUsaNews()
      .subscribe(
        (response: any) => {
          this.news = response.articles;
          console.log(JSON.stringify(response));
        });
  }

}
