import { Component, Input, OnInit } from '@angular/core';
import { Nota } from '../../../dto/nota.dto';

@Component({
    selector: 'app-listar-nota',
    templateUrl: './listar-nota.component.html',
    styleUrls: ['./listar-nota.component.scss']
})
export class ListarNotaComponent implements OnInit {

    @Input() notas: Array<Nota> = [];

    ngOnInit() {
    }

}
