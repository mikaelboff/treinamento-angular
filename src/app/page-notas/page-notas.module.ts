import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdicionarNotaComponent } from './components/adicionar-nota/adicionar-nota.component';
import { PageNotasRoutingModule } from './page-notas-routing.module';
import { PageNotasComponent } from './page-notas.component';

@NgModule({
    declarations: [
        PageNotasComponent,
        AdicionarNotaComponent
    ],
    imports: [
        CommonModule,
        PageNotasRoutingModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule,
        ReactiveFormsModule
    ],
    exports: [
        PageNotasComponent
    ]
})
export class PageNotasModule { }
