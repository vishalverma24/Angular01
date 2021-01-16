import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'ngr-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  users: User[] = [
    {
      name: 'Alpha',
      username: 'alpha',
      email: 'alpha@g.com'
    },
    {
      name: 'Beta',
      username: 'beta',
      email: 'beta@g.com'
    },
    {
      name: 'Gamma',
      username: 'gamma',
      email: 'gamma@g.com'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteUser(userIndex: number) {
    this.users.splice(userIndex, 1)
  }

}
