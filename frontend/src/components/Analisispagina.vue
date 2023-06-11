<template>
    <NavBar />
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="text-center my-4">Análisis de Ventas</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Bar v-if="loaded" :data="chartData" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import axios from 'axios'
  import NavBar from '@/components/NavBar.vue';
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar, NavBar },
    data: () => ({
      loaded: false,
      chartData: {
        labels: [],
        datasets: [{
          label: 'Cantidad de Ventas',
          data: [],
          backgroundColor: '#f87979',
        }]
      }
    }),
    async mounted () {
      try {
        let response = await axios.get('http://localhost:3000/ventas') // API que proporciona datos de ventas
        let salesData = response.data
  
        let salesCount = salesData.reduce((count, sale) => {
          count[sale.fecha] = (count[sale.fecha] || 0) + 1;
          return count;
        }, {});
  
        this.chartData.labels = Object.keys(salesCount).sort()
        this.chartData.datasets[0].data = this.chartData.labels.map(label => salesCount[label])
  
        this.loaded = true
      } catch (e) {
        console.error(e)
      }
    },

  }
  </script>
  