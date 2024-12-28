import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// const routes: Routes = [
//   // Add your routes here
// ];
const updatedAppConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    FontAwesomeModule,
    // provideRouter(routes),
  ],
};

bootstrapApplication(AppComponent, updatedAppConfig).catch((err) =>
  console.error(err)
);
