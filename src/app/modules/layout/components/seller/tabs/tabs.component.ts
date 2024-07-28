import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgIf, NgClass, NgFor],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})

export class TabsComponent implements OnInit {
  activeTab: string = 'artists';

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

  photographers: any[] = [
    {
      name: 'John Doe',
      username: 'johndoephoto',
      imageUrl: 'assets/img/image3.png',
      profileImageUrl: 'assets/img/img3.png'
    },
    {
      name: 'Jane Smith',
      username: 'janesmithphoto',
      imageUrl: 'assets/img/image4.png',
      profileImageUrl: 'assets/img/img4.png'
    },
    {
      name: 'Thomas J.',
      username: 'thecustomcreater',
      imageUrl: 'assets/img/news1.png',
      profileImageUrl: 'assets/img/profile1.png'
    },
    {
      name: 'Lara Leones',
      username: 'thewallart',
      imageUrl: 'assets/img/image5.png',
      profileImageUrl: 'assets/img/img5.png'
    },
    {
      name: 'Jessica Williams',
      username: 'thewildwithyou',
      imageUrl: 'assets/img/image4.png',
      profileImageUrl: 'assets/img/img4.png'
    },
    {
      name: 'Emilie Jones',
      username: 'thewildwithyou',
      imageUrl: 'assets/img/image3.png',
      profileImageUrl: 'assets/img/img3.png'
    },
    {
      name: 'Chris Doe',
      username: 'thewildwithyou',
      imageUrl: 'assets/img/image2.png',
      profileImageUrl: 'assets/img/img2.png'
    },
    {
      name: 'Thomas Edward',
      username: 'thewildwithyou',
      imageUrl: 'assets/img/image1.png',
      profileImageUrl: 'assets/img/img1.png'
    },
  ];

  toggleTab(tab: string) {
    this.activeTab = tab;
  }

  constructor() { }

  ngOnInit(): void { }
}

