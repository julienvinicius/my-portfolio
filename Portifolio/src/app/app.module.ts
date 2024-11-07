import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // Importar o AppComponent
import { HeaderComponent } from './header/header.component'; // Importar o HeaderComponent
import { AboutComponent } from './about/about.component'; // Importar o AboutComponent
import { ProjectsComponent } from './projects/projects.component'; // Importar o ProjectsComponent
import { ContactComponent } from './contact/contact.component'; // Importar o ContactComponent
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser'; // Importar bootstrapApplication

// Defina a função HttpLoaderFactory corretamente
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    // Remova os componentes autônomos da declaração
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HeaderComponent, // Importar o HeaderComponent aqui
    AboutComponent, // Importar o AboutComponent aqui
    ProjectsComponent, // Importar o ProjectsComponent aqui
    ContactComponent // Importar o ContactComponent aqui
  ],
  providers: [],
})
export class AppModule { }

// Use bootstrapApplication para inicializar a aplicação
bootstrapApplication(AppComponent);