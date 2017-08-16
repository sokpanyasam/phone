import { Injectable } from '@angular/core';

interface IContact{
  name:string;
  number:string;
}

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts(){
    let contacts: IContact[]=[{
      name:'Janez',
      number:'15331513513'
    },
    {
      name:'John',
      number:'23532523523'
    },
    {
      name:'Mary',
      number:'999876666'
    },
    {
      name:'Jasmine',
      number:'3525325923'
    }
  ];
  return contacts;
  }

}
