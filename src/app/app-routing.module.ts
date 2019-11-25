import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'showClass', loadChildren: './pages/showClass/showClass.module#ShowClassPageModule' },
  { path: 'selectionCity', loadChildren: './pages/selection-city/selection-city.module#SelectionCityPageModule' },
  { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'infoCity', loadChildren: './pages/info-city/info-city.module#InfoCityPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
