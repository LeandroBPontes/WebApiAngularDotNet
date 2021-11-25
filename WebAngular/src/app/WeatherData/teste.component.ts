import { Component, OnInit,TemplateRef } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { WeatherService } from '../Weather.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  displayedColumns: string[] = ['data', 'tempC', 'tempF', 'summary'];
  dataSource = new MatTableDataSource([]);
  clickedRows = new Set<TesteComponent>();
 
  constructor(protected service: WeatherService) { 
  }
  async ngOnInit(): Promise<void> {
    await this.obterTodos();
  }
  async obterTodos(): Promise<void> {
    await this.service.getAll().then(async resultado => {
      this.dataSource = new MatTableDataSource(resultado);
      console.log(resultado)
  });
}

}
  
 

  
