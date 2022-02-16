<template>
  <div class="countries">
    <img alt="Vue logo" src="../assets/world.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
     <div class="row">
       <div class="col-md-4" v-for="country in countries" :key="country.id" >
         <CountryCard :country="country" />
       </div>
     </div>
     
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
      CountryApi.getCountries()
        .then(response => {
          this.countries = response.data
          this.totalPage = response.headers["x-total-count"]
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