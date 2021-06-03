import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HeaderComponent } from '@app/components/header/header.component';
import { FeaturedComponent } from '@app/components/featured/featured.component';
import { HomepageComponent } from '@app/pages/homepage/homepage.component';
import { PostCardComponent } from '@app/components/post-card/post-card.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { AboutComponent } from '@app/pages/about/about.component';
import { ContactComponent } from '@app/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturedComponent,
    HomepageComponent,
    PostCardComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
