import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canLoad: [AutoLoginGuard] // Check if we should show the introduction or forward to inside
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: 'club',
    loadChildren: () => import('./pages/club/club.module').then(m => m.ClubPageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: 'matches',
    loadChildren: () => import('./pages/matches/matches.module').then(m => m.MatchesPageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: 'newmatch',
    loadChildren: () => import('./pages/newmatch/newmatch.module').then( m => m.NewmatchPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
