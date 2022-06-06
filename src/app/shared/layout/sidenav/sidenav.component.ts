import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  opened: boolean = true;

  constructor() { }

  ngOnInit(): void { }

  getAnimeList(): any {
    return [
      {
        title: 'One Punch Man',
        synopsis: 'The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch. However, having no one capable of matching his strength has led Saitama to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.',
        rate: 9.1,
        imageURL: 'https://cdn.myanimelist.net/images/anime/12/76049l.jpg',
      },
      {
        title: 'One Punch Man',
        synopsis: 'The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch. However, having no one capable of matching his strength has led Saitama to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.',
        rate: 8.1,
        imageURL: 'https://cdn.myanimelist.net/images/anime/12/76049l.jpg',
      },
      {
        title: 'One Punch Man',
        synopsis: 'The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch. However, having no one capable of matching his strength has led Saitama to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.',
        rate: 7.1,
        imageURL: 'https://cdn.myanimelist.net/images/anime/12/76049l.jpg',
      },
      {
        title: 'One Punch Man',
        synopsis: 'The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch. However, having no one capable of matching his strength has led Saitama to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.',
        rate: 5.1,
        imageURL: 'https://cdn.myanimelist.net/images/anime/12/76049l.jpg',
      },
    ]
  }

}
