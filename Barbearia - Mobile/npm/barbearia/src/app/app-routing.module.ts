import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tela-cadas',
    loadChildren: () => import('./cadastro/tela-cadas/tela-cadas.module').then( m => m.TelaCadasPageModule)
  },
  {
    path: 'tela-login',
    loadChildren: () => import('./login/tela-login/tela-login.module').then( m => m.TelaLoginPageModule)
  },
  {
    path: 'tela-principal',
    loadChildren: () => import('./principal/tela-principal/tela-principal.module').then( m => m.TelaPrincipalPageModule)
  },
  {
    path: 'tela-mapa',
    loadChildren: () => import('./mapa/tela-mapa/tela-mapa.module').then( m => m.TelaMapaPageModule)
  },
  {
    path: 'tela-perfil',
    loadChildren: () => import('./perfil/tela-perfil/tela-perfil.module').then( m => m.TelaPerfilPageModule)
  },
  
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'vendas',
    loadChildren: () => import('./Loja/vendas/vendas.module').then( m => m.VendasPageModule)
  },
  {
    path: 'servicos',
    loadChildren: () => import('./servicos/servicos/servicos.module').then( m => m.ServicosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
