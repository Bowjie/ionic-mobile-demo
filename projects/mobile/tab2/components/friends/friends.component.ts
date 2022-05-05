import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  public friendList = [
    {
      name: 'Pokémon Yellow',
      avatarUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    },
    {
      name: 'Lemon',
      isOnline: true,
      avatarUrl: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png',
    },
    {
      name: 'Billy',
      isOnline: true,
      avatarUrl: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png',
    },
    {
      name: 'Bella',
      isOnline: false,
      avatarUrl: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png',
    },
    {
      name: 'Billy',
      isOnline: true,
      avatarUrl: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png',
    },
    {
      name: 'Bella',
      isOnline: false,
      avatarUrl: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png',
    },
    {
      name: 'Billy',
      isOnline: false,
      avatarUrl: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png',
    },
    {
      name: 'Bella',
      isOnline: true,
      avatarUrl: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png',
    },
    {
      name: 'Billy',
      isOnline: true,
      avatarUrl: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png',
    },
    {
      name: 'Bella',
      isOnline: true,
      avatarUrl: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png',
    },
    {
      name: 'Billy',
      isOnline: true,
      avatarUrl: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png',
    },
    {
      name: 'Bella ',
      isOnline: true,
      avatarUrl: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
