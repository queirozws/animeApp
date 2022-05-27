import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent implements OnInit {

  @Input()
  anime = <any>{};

  constructor() { }

  ngOnInit(): void {
  }

  print(value: any) {
    console.log(value)
  }

}

interface Anime {
  title: string;
  subtitle?: string;
  synopsis: string;
  rate: number;
  imageURL: string;
}
