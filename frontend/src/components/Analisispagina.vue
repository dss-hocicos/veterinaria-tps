<template>
  <NavBar />
  <div class="container bg-light p-5 rounded">
    <div class="row">
      <div class="col">
        <h1 class="text-center my-4">Análisis de Ventas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <select v-if="loaded" v-model="selectedYear" @change="updateChartData" class="form-select">
          <option v-for="option in yearOptions" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-10 mx-auto">
        <Bar v-if="loaded" :data="chartData" :options="{ responsive: true, maintainAspectRatio: false }" style="height: 400px;" />
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
    selectedYear: null,
    yearOptions: [],
    chartData: {
      labels: [],
      datasets: [{
        label: 'Cantidad de Ventas',
        data: [],
        backgroundColor: '#f87979',
      }]
    },
    allSalesData: null,
    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  }),
  async mounted () {
    try {
      let response = await axios.get('http://localhost:3000/ventas') // API que proporciona datos de ventas
      let salesData = response.data
      this.allSalesData = salesData;

      let years = new Set(salesData.map(sale => new Date(sale.fecha).getFullYear()));
      this.yearOptions = [...years].sort().reverse();
      this.selectedYear = this.yearOptions[0];

      this.updateChartData();
      this.loaded = true;
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    updateChartData() {
      let salesDataForYear = this.allSalesData.filter(sale => new Date(sale.fecha).getFullYear() === this.selectedYear);

      let salesCountByMonth = salesDataForYear.reduce((count, sale) => {
        let month = new Date(sale.fecha).getMonth();  // Get month (0-11)
        count[month + 1] = (count[month + 1] || 0) + 1;
        return count;
      }, {});

      this.chartData.labels = this.months;
      this.chartData.datasets[0].data = this.chartData.labels.map((_, i) => salesCountByMonth[i + 1] || 0);
    }
  }
}
</script>
