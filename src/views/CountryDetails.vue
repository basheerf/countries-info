<template>
  <div>
    <div v-for="item in country" :key="item.id" :country="country">
      <h4>{{ item.name.common }}</h4>
    </div>
  </div>
</template>

<script>
import CountryApi from '@/api/CountryApi.js'
export default {
  props: ['id'],
  data() {
    return {
      country: null
    }
  },
  created() {
    CountryApi.getCountry(this.id)
      .then(response => {
        this.country = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
