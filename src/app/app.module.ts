import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ReturnComponent } from './return/return.component';
import { TandcComponent } from './tandc/tandc.component';
import { ShipComponent } from './ship/ship.component';
import { PpolicyComponent } from './ppolicy/ppolicy.component';
import { TopsComponent } from './tops/tops.component';
import { DressesComponent } from './dresses/dresses.component';
import { NewComponent } from './new/new.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { CcameosComponent } from './ccameos/ccameos.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'tops', component: TopsComponent },
      { path: 'ppolicy', component: PpolicyComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'return', component: ReturnComponent },
      { path: 'tandc', component: TandcComponent },
      { path: 'ship', component: ShipComponent },
      { path: 'new', component: NewComponent },
      { path: 'bottoms', component: BottomsComponent },
      { path: 'ccameos', component: CcameosComponent },
      { path: 'dresses', component: DressesComponent },
      { path: 'about', component: AboutComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    FooterComponent,
    ContactComponent,
    ReturnComponent,
    TandcComponent,
    ShipComponent,
    PpolicyComponent,
    TopsComponent,
    DressesComponent,
    NewComponent,
    BottomsComponent,
    CcameosComponent,
    HeaderComponent,
    AboutComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/