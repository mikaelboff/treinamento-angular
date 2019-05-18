import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotasComponent } from './page-notas.component';

const routes: Routes = [
    {
        path: '',
        component: PageNotasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageNotasRoutingModule { }
