import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdicionarNotaComponent } from './components/adicionar-nota/adicionar-nota.component';
import { ListarNotaComponent } from './components/listar-nota/listar-nota.component';
import { PageNotasRoutingModule } from './page-notas-routing.module';
import { PageNotasComponent } from './page-notas.component';

@NgModule({
    declarations: [
        PageNotasComponent,
        AdicionarNotaComponent,
        ListarNotaComponent
    ],
    imports: [
        CommonModule,
        PageNotasRoutingModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule,
        ReactiveFormsModule,
        CardModule
    ],
    exports: [
        PageNotasComponent
    ]
})
export class PageNotasModule { }
