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
import axios from 'axios'
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'AthenaReview2',
  components: {
    apexchart: VueApexCharts,
  },

  data: () => ({

    data: [],
    barlineseries: [],
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
  created() {
    this.getPost()
  },

  methods: {
    async getPost() {
      try {
        const options = {
          headers: { "content-type": "application/json" }
        }
        const response = await axios.get(
          "https://9e34429a-eba3-4e56-85f2-685706a08897.mock.pstmn.io/report/dau?dashboardUserId=abc123&periodFrom=1669852800&periodTo=1674063742&aggregateBy%5B0%5D=month&aggregateBy%5B1%5D=country", options);

        let newData = response.data;
        const data = newData.replace(`}
        {`, '},{')
        // console.log(newData)
        console.log(JSON.parse(data))
        this.data = JSON.parse(data);
        console.log(this.data?.items.map((val) => {
          return {

            name: val.country,
            type: 'column',
            data: val.count

          }
        }))
        this.barlineseries = this.data?.items.map((val) => {
          return {

            name: val.country,
            type: 'column',
            data: [val.count]

          }
        })
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>
<style scoped>
.chartpage {
  min-height: 100vh;
}
</style>
