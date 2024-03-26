import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { HomeComponent } from './home/home.component';
import { DocentiComponent } from './docenti/docenti.component';
import { DocenteComponent } from './docenti/docente/docente.component';
import { StudentiComponent } from './studenti/studenti.component';
import { StudenteComponent } from './studenti/studente/studente.component';

// Qui definisco le rotte (sono un array di oggetti)
const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "chi-siamo", component: ChiSiamoComponent},
  {path: "docenti", component: DocentiComponent, children : [
    // tutte le volte che c'è un fragment con :__ vuol dire che quel qualcosa è dinamico
    {path: ":id/:nome/:materia/:corso", component: DocenteComponent}
  ]},
  {path: "studenti", component: StudentiComponent, children:[
    {path: ":id", component: StudenteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
