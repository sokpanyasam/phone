import { Component, OnInit } from '@angular/core';
import { ContactsService } from "../contacts.service";

@Component({
  selector: 'app-populars',
  templateUrl: './populars.component.html',
  styleUrls: ['./populars.component.css']
})
export class PopularsComponent implements OnInit {

  contacts:any[];

  constructor(
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.contacts=this.contactsService.getContacts().slice(0,3);
  }

}
