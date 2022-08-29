import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.css']
})
export class ItemsDetailsComponent implements OnInit {
  public dataSource = new MatTableDataSource<Item>();

  constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getItem(this.id);
  }

  public id: number = this.route.snapshot.params['id'];
  public apiUrl: any = `/v1/Items?itemid=${this.id}`;

  getItem(id: number): void {
    
    

    this.itemsService.getItem(id).subscribe((item => {
      this.dataSource.data = item as Item[];
    }));
  }

}