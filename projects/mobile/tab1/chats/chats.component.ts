import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {
  public chatList = [
    {
      name: 'Pokémon Yellow',
      lastChat: 'Lorem Ipsum asdasdsa asdasdasda asdasdasdasds',
      lastSender: 'friend',
      avatarUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    },
    {
      name: 'Lemon',
      lastChat: 'Lorem Ipsum',
      lastSender: 'friend',
      avatarUrl: 'https://ionicframework.com/docs/demos/api/list/avatar-han.png',
    },
    {
      name: 'Rey',
      lastChat: 'Lorem Ipsum',
      lastSender: 'friend',
      avatarUrl: 'https://ionicframework.com/docs/demos/api/list/avatar-rey.png',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
