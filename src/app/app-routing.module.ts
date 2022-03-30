import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then(m => m.LoginPageModule )
  },
  {
    path: 'productos',
    loadChildren: () => import('./paginas/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'platillos',
    loadChildren: () => import('./paginas/platillos/platillos.module').then( m => m.PlatillosPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./paginas/contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'quienes-somos',
    loadChildren: () => import('./paginas/quienes-somos/quienes-somos.module').then( m => m.QuienesSomosPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./paginas/bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'postres',
    loadChildren: () => import('./paginas/postres/postres.module').then( m => m.PostresPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
