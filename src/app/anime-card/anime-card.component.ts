import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent implements OnInit {

  @Input()
  anime = <any>{};

  recomendationList: any;

  constructor(private api: ApiServiceService) {
    this.api.get().subscribe( data => {
      this.recomendationList = data.data;

      console.log(data.data);
    }
    );

  }

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
