import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Nota } from '../../../dto/nota.dto';

@Component({
    selector: 'app-adicionar-nota',
    templateUrl: './adicionar-nota.component.html',
    styleUrls: ['./adicionar-nota.component.scss']
})
export class AdicionarNotaComponent {
    adicionarNotaForm: FormGroup;

    @Output() submitForm = new EventEmitter<Nota>();

    constructor() {
        this.adicionarNotaForm = new FormGroup({
            titulo: new FormControl('titulo padrao'),
            descricao: new FormControl('descricao padrao')
        });
    }

    notaSubmit(value: Nota) {
        this.submitForm.emit(value);
    }
}
