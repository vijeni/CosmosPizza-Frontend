import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Cliente } from '../../models/cliente/cliente';
import Produto from '../../models/produto/produto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public chart: any;
  pessoa = new Cliente();
  produto = new Produto();
  pessoas: [] = [];
  produtos: [] = [];

  ngOnInit(): void {
    this.createChart();
  }

  labels = Object.keys(this.pessoa).map((key) => key.toUpperCase());

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this.labels,
        datasets: [
          {
            label: 'Sales',
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            backgroundColor: 'blue',
          },
          {
            label: 'Profit',
            data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
            backgroundColor: 'limegreen',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
