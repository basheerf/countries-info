<template>
  <div class="countries">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
     <div class="row">
       <div class="col-md-4" v-for="country in countries" :key="country.id" >
         <CountryCard :country="country" />
       </div>
     </div>
    <router-link
      :to="{ name: 'CountriesList', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
      >Prev Page</router-link
    >

    <router-link
      :to="{ name: 'CountriesList', query: { page: page + 1 } }"
      rel="next"
      >Next Page</router-link
    >
  </div>
 
</template>

<script>
// @ is an alias to /src
import CountryCard from "@/components/CountryCard.vue";

import CountryApi from "@/api/CountryApi.js";
import { watchEffect } from 'vue' 

export default {
  name: "CountriesList",
  props: ['page'],
  components: {
    CountryCard,
 
  },
  data(){
    return{
     countries: null,
     totalPage: 0
    }
  },

    created() {
    watchEffect(() => {
      this.events = null 
      CountryApi.getCountries(2, this.page)
        .then(response => {
          this.countries = response.data
          this.totalPage = response.headers['x-total-count']
        })
        .catch(error => {
          console.log(error)
        })
    })
  },



}
</script>

<style scoped>
.countries {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>