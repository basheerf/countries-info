<template>

    <h4>{{ country.name.official }}</h4>
    
    <h4>{{ country.capital}}- {{country.region }}</h4>

</template>

<script>
import CountryApi from "@/api/CountryApi.js";
export default({
  props:['name'],
  data(){
      return{
          country: null
      }
  },
  created() {
    CountryApi.getCountry(this.name)
      .then(response => {
        this.country = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }

})
</script>
