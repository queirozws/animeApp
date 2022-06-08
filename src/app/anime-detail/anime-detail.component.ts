import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  anime: any = 'nome';

  animeId: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {

    // this.animeId = this.activatedRoute.params
    //   .subscribe(params => {
    //     console.log(params['id']);

    //     const id =  params.id;

    //     return {id: params.id};

    //   })

    // console.log(this.animeId)

    // this.anime = this.http.get(`https://api.jikan.moe/v4/anime/${this.animeId}`)
    //   .subscribe(data => {
    //     return data; console.log(data);
    //   })

  }

}
