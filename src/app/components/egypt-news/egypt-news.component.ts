import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-egypt-news',
  templateUrl: './egypt-news.component.html',
  styleUrls: ['./egypt-news.component.css']
})
export class EgyptNewsComponent implements OnInit {

  news: any=[];

  constructor(private _newsService: NewsService) {
    this._newsService.getEgyptNews()
    .subscribe(
      (response: any) => {
        this.news = response.articles;
        console.log(JSON.stringify(response));
      });
  }

  ngOnInit(): void {

  }

}
