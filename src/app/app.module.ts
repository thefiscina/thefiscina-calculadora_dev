import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponent } from './componentes/botao/botao.component';
import { VisorComponent } from './componentes/visor/visor.component';
import { MenuComponent } from './componentes/menu/menu.component';
 
@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    VisorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
