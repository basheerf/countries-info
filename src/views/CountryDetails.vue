<template>

  <div class="card w-75 mx-auto">
    <div class="card-body">
      <div class="row" v-for="item in country" :key="item.id" :country="country">
        <div class="col-md-4">
          <img :src="item.flags.png">
         </div>
         
        <div class="col-md-8">
          <h3 style="text-align:left">{{item.name.common}}</h3>
          <p style="text-align:left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button class="btn btn-success">
            Conver To {{item.currencies[item.cca3].name}}
          </button>
        </div>
    
    </div>
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
