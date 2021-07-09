import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from '../products-list.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-item-modal',
  templateUrl: './product-item-modal.component.html',
  styleUrls: ['./product-item-modal.component.scss']
})
export class ProductItemModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
