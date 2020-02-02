import { TrademarkOppositionModule } from './pages/trademark-opposition/trademark-opposition.module';
import { ResponseOfRefusalModule } from './pages/response-of-refusal/response-of-refusal.module';
import { TrademarkRenewalModule } from './pages/trademark-renewal/trademark-renewal.module';
import { TrademarkSearchModule } from './pages/trademark-search/trademark-search.module';
import { TrademarkMonitoringModule } from './pages/trademark-monitoring/trademark-monitoring.module';
import { FooterModule } from './footer/footer.module';
import { TopbarModule } from './topbar/topbar.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { TrademarkRegistrationModule } from './pages/trademark-registration/trademark-registration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopbarModule,
    NavigationModule,
    FooterModule,
    TrademarkMonitoringModule,
    TrademarkSearchModule,
    TrademarkRegistrationModule,
    TrademarkRenewalModule,
    ResponseOfRefusalModule,
    TrademarkOppositionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
