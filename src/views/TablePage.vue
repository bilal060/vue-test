<template>
  <div class="rounded tablepage bg-white px-3 py-4">
    <h2>Table Page</h2>
    <v-data-table hide-default-footer :headers="tableheader" :items="tabledata" class="elevation-1">
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
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
}
</script>
<style scoped>
.tablepage {
  min-height: 100vh;
}
</style>