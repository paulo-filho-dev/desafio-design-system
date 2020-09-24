import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeadingComponent } from './components/typograph/heading/heading.component';
import { ParagraphComponent } from './components/typograph/paragraph/paragraph.component';
import { SubtitleComponent } from './components/typograph/subtitle/subtitle.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeadingComponent,
    ParagraphComponent,
    SubtitleComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
