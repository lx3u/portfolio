import { Routes } from '@angular/router';

import { AccueilComponent } from './components/accueil/accueil';
import { AProposComponent } from './components/a-propos/a-propos';
import { CompetencesComponent } from './components/competences/competences';
import { ProjetsComponent } from './components/projets/projets';
import { ContactComponent } from './components/contact/contact';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: 'accueil', component: AccueilComponent },
    { path: 'a-propos', component: AProposComponent },
    { path: 'competences', component: CompetencesComponent },
    { path: 'projets', component: ProjetsComponent },
    { path: 'contact', component: ContactComponent },
];
