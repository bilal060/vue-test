<template>
  <div class="rounded tablepage bg-white px-3 py-4">
    <div class="mb-3">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Table Page</h2>
        <router-link to="/chartpage" class="route-style text-dark font-20 ">
          <!-- <i class="fa-solid fa-table"></i> -->
          <i class="fa-solid fa-chart-simple"></i>
        </router-link>
      </div>
    </div>

    <!-- <h3 v-if="catcherror">{{ catcherror }}</h3>
    <v-data-table hide-default-footer :headers="data.heading" :items="data.details" class="elevation-1">
    </v-data-table> -->

    <v-data-table hide-default-footer :headers="tableheader" :items="tabledata" class="elevation-1">
    </v-data-table>
  </div>
</template>

<script>

// import axios from 'axios'
export default {
  data: () => ({
    // data: [],
    // catcherror: '',
    tableheader: [
      { text: 'DAU', value: 'DAU', },
      { text: 'Month', value: 'month', align: 'right' },
      { text: 'Country', value: 'country', align: 'right' },
    ],
    tabledata: [

      {
        DAU: '2,500',
        month: 'January',
        country: 'United States',
      },
      {
        DAU: '2,500',
        month: 'Febuary',
        country: 'United Arab Emirates',
      },
      {
        DAU: '1,100',
        month: 'March',
        country: 'Austrailia',
      },
      {
        DAU: '1,100',
        month: 'April',
        country: 'Pakistan',
      },
      {
        DAU: '1,100',
        month: 'May',
        country: 'United States',
      },
      {
        DAU: '1,120',
        month: 'June',
        country: 'United Arab Emirates',
      },
      {
        DAU: '1,100',
        month: 'July',
        country: 'Austrailia',
      },
      {
        DAU: '1,140',
        month: 'August',
        country: 'Pakistan',
      },
      {
        DAU: '2,000',
        month: 'September',
        country: 'United States',
      },
      {
        DAU: '2,060',
        month: 'October',
        country: 'United Arab Emirates',
      },
      {
        DAU: '2,060',
        month: 'November',
        country: 'Austrailia',
      },
      {
        DAU: '4,000',
        month: 'December',
        country: 'Pakistan',
      },

    ],
  }),
  // created() {
  //   this.getPost()
  // },
  // methods: {
  //   getPost() {
  //     axios.get('https://9e34429a-eba3-4e56-85f2-685706a08897.mock.pstmn.io/report/dau?dashboardUserId=abc123&periodFrom=1669852800&periodTo=1674063742&aggregateBy%5B0%5D=month&aggregateBy%5B1%5D=country%E2%80%9D')
  //       .then((response) => {
  //         this.data = response.data;
  //       })
  //       .catch((catcherror) => {
  //         this.error = catcherror
  //       })
  //   }
  // },
}
</script>
<style scoped>
.tablepage {
  min-height: 100vh;
}
</style>