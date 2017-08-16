import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from  '@angular/http';
import { MaterialModule,MdButtonModule, MdCheckboxModule } from '@angular/material';
import { Routes,RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactsComponent, AddContactDialog } from './contacts/contacts.component';
import { PopularsComponent } from './populars/populars.component';

import { ContactsService } from "./contacts.service";
import 'hammerjs';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes=[
  {
    path:'',
    component:PopularsComponent
  },
  {
    path:'contacts',
    component:ContactsComponent
  },
    {
    path:'populars',
    component:PopularsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PopularsComponent,
    AddContactDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent],
  entryComponents:[AddContactDialog]
})
export class AppModule { }
