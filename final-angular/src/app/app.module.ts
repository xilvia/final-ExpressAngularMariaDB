import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { SortbynamePipe } from './pipe/sortbyname.pipe';
import { CreateComponent } from './page/create/create.component';
import { UpdateComponent } from './page/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SortbynamePipe,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
