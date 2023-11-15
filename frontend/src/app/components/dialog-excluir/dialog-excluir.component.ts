import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-excluir',
  templateUrl: './dialog-excluir.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogExcluirComponent {
  constructor(public dialogRef: MatDialogRef<DialogExcluirComponent>) {}
}
