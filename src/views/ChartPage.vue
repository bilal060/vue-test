<template>
  <div class="chartpage rounded bg-white px-3 py-4">
    <div class="mb-3">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Chart Page</h2>
        <router-link to="/tablepage" class="route-style text-dark font-20 ">
          <i class="fa-solid fa-table"></i>
        </router-link>

      </div>
    </div>
    <apexchart type="bar" height="350" :options="barlinechartOptions" :series="barlineseries"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'AthenaReview2',
  components: {
    apexchart: VueApexCharts,
  },
  data: () => ({

    barlineseries: [

      {
        name: 'US',
        type: 'column',
        data: [120000, 130000, 90000]
      }, {
        name: 'PAK',
        type: 'column',
        data: [130000, 150000, 90000]
      }, {
        name: 'AUS',
        type: 'column',
        data: [150000, 110000, 90000]
      }, {
        name: 'UAE',
        type: 'column',
        data: [130000, 150000, 20000]
      },




    ],
    barlinechartOptions: {
      colors: ["#444444", "#FF7EEF", "#446AAA", "#873BD3", "#5BB878"],

      chart: {
        animations: {
          enabled: true
        },
        columnWidth: '20%',
        height: 350,
        type: 'bar',
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [],
        show: false
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      }
    },
  }),
}
</script>
<style scoped>
.chartpage {
  min-height: 100vh;
}
</style>
