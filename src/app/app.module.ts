//module
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";


// Component
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { PanierService } from "./shared/services/panier.service";

// route
import { APP_ROUTES } from "./app.routes";





@NgModule({
  imports: [
      BrowserModule,
      RouterModule.forRoot(APP_ROUTES),
      HttpClientModule,
    ],
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
  providers: [PanierService]
})
export class AppModule {}
