import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];

  constructor(private usersService: UsersService){
  }

  ngOnInit() {
    this.users = this.usersService.activeUsers; //injeção do objeto do servico no objeto user desse componente de bosta
  }

  onSetToInactive(id: number) {
    this.usersService.updateInactive(id);
  }
}
