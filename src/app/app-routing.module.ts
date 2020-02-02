import { TrademarkOppositionComponent } from './pages/trademark-opposition/trademark-opposition.component';
import { TrademarkRenewalComponent } from './pages/trademark-renewal/trademark-renewal.component';
import { TrademarkSearchComponent } from './pages/trademark-search/trademark-search.component';
import { TrademarkMonitoringComponent } from './pages/trademark-monitoring/trademark-monitoring.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrademarkRegistrationComponent } from './pages/trademark-registration/trademark-registration.component';
import { ResponseOfRefusalComponent } from './pages/response-of-refusal/response-of-refusal.component';


const routes: Routes = [
 { path : 'trademark-monitoring', component : TrademarkMonitoringComponent },
 { path : 'trademark-search', component : TrademarkSearchComponent },
 { path : 'trademark-registration', component : TrademarkRegistrationComponent },
 { path : 'trademark-renewal', component : TrademarkRenewalComponent },
 { path : 'response-of-refusal', component : ResponseOfRefusalComponent },
 { path : 'trademark-opposition', component : TrademarkOppositionComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
