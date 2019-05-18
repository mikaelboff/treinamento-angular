import { Component, OnInit } from '@angular/core';
import { Nota } from '../dto/nota.dto';

@Component({
    selector: 'app-page-notas',
    templateUrl: './page-notas.component.html',
    styleUrls: ['./page-notas.component.scss']
})
export class PageNotasComponent implements OnInit {

    listaDeNotas: Array<Nota> = [];

    ngOnInit() {
    }

    submitForm(value: Nota) {
        // Adiciona a nota ao início do array
        this.listaDeNotas.unshift(value);
    }

}
