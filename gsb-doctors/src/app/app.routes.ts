import { Routes } from '@angular/router';
import { DoctorsPageComponent } from './pages/doctors-page/doctors-page';

export const routes: Routes = [
  { path: '', redirectTo: '/medecins', pathMatch: 'full' },  // Route racine redirige vers /medecins
  { path: 'medecins', component: DoctorsPageComponent },    // Route pour afficher la liste des médecins
  { path: '**', redirectTo: '/medecins' }                    // Route wildcard pour rediriger vers /medecins (page d'erreur à venir)
];