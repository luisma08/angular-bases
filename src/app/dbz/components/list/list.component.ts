import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
// import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name:'Trunk',
      power:10
    }
  ]

  @Output()
  public onDeleteCharacterId: EventEmitter<string> = new EventEmitter;

  onDeleteCharacter(id?: string): void{
    //TODO: Emitir el ID del personaje

    if( !id ) return;

    this.onDeleteCharacterId.emit(id);
  }
}
