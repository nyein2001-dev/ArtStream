import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor, AngularSvgIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  artists: any[] = [
    {
      name: 'Thomas Edward',
      username: 'thewildwithyou',
      imageUrl: 'assets/img/image1.png',
      profileImageUrl: 'assets/img/img1.png'
    },
    {
      name: 'Chris Doe',
      username: 'thewildwithyou',
      imageUrl: 'assets/img/image2.png',
      profileImageUrl: 'assets/img/img2.png'
    },
    {
      name: 'Emilie Jones',
      username: 'thewildwithyou',
      imageUrl: 'assets/img/image3.png',
      profileImageUrl: 'assets/img/img3.png'
    },
    {
      name: 'Jessica Williams',
      username: 'thewildwithyou',
      imageUrl: 'assets/img/image4.png',
      profileImageUrl: 'assets/img/img4.png'
    },
    {
      name: 'Lara Leones',
      username: 'thewallart',
      imageUrl: 'assets/img/image5.png',
      profileImageUrl: 'assets/img/img5.png'
    },
    {
      name: 'Thomas J.',
      username: 'thecustomcreater',
      imageUrl: 'assets/img/news1.png',
      profileImageUrl: 'assets/img/profile1.png'
    },
    {
      name: 'John Doe',
      username: 'thewildwithyou',
      imageUrl: 'assets/img/news2.png',
      profileImageUrl: 'assets/img/profile2.png'
    },
    {
      name: 'Jane Smith',
      username: 'thewildwithyou',
      imageUrl: 'assets/img/image2.png',
      profileImageUrl: 'assets/img/img2.png'
    }
  ];


  posts: any[] = [
    {
      name: 'Thomas Edward',
      username: 'thewildwithyou',
      content: 'To design a Facebook-like newsfeed post UI using Angular and Tailwind CSS, you can create a component that displays posts in a similar format. Below is a step-by-step guide to achieve this:',
      imageUrl: 'assets/img/image1.png',
      profileImageUrl: 'assets/img/img1.png'
    },
    {
      name: 'Chris Doe',
      username: 'thewildwithyou',
      content: 'To design a Facebook-like newsfeed post UI using Angular and Tailwind CSS, you can create a component that displays posts in a similar format. Below is a step-by-step guide to achieve this:',

      imageUrl: 'assets/img/image2.png',
      profileImageUrl: 'assets/img/img2.png'
    },
    {
      name: 'Emilie Jones',
      username: 'thewildwithyou',
      content: 'To design a Facebook-like newsfeed post UI using Angular and Tailwind CSS, you can create a component that displays posts in a similar format. Below is a step-by-step guide to achieve this:',

      imageUrl: 'assets/img/image3.png',
      profileImageUrl: 'assets/img/img3.png'
    },
    {
      name: 'Jessica Williams',
      username: 'thewildwithyou',
      content: 'To design a Facebook-like newsfeed post UI using Angular and Tailwind CSS, you can create a component that displays posts in a similar format. Below is a step-by-step guide to achieve this:',

      imageUrl: 'assets/img/image4.png',
      profileImageUrl: 'assets/img/img4.png'
    },
    {
      name: 'Lara Leones',
      username: 'thewallart',
      content: 'To design a Facebook-like newsfeed post UI using Angular and Tailwind CSS, you can create a component that displays posts in a similar format. Below is a step-by-step guide to achieve this:',

      imageUrl: 'assets/img/image5.png',
      profileImageUrl: 'assets/img/img5.png'
    },
    {
      name: 'Thomas J.',
      username: 'thecustomcreater',
      content: 'To design a Facebook-like newsfeed post UI using Angular and Tailwind CSS, you can create a component that displays posts in a similar format. Below is a step-by-step guide to achieve this:',

      imageUrl: 'assets/img/news1.png',
      profileImageUrl: 'assets/img/profile1.png'
    },
    {
      name: 'John Doe',
      username: 'thewildwithyou',
      content: 'To design a Facebook-like newsfeed post UI using Angular and Tailwind CSS, you can create a component that displays posts in a similar format. Below is a step-by-step guide to achieve this:',

      imageUrl: 'assets/img/news2.png',
      profileImageUrl: 'assets/img/profile2.png'
    },
    {
      name: 'Jane Smith',
      username: 'thewildwithyou',
      content: 'To design a Facebook-like newsfeed post UI using Angular and Tailwind CSS, you can create a component that displays posts in a similar format. Below is a step-by-step guide to achieve this:',

      imageUrl: 'assets/img/image2.png',
      profileImageUrl: 'assets/img/img2.png'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}

