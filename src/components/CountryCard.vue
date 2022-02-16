<template>

<div class="card-deck" style="margin-top:20px">
<div class="card" style="height: 10rem">
      <router-link
    :to="{ name: 'CountryDetails', params: { id: country.cca3 } }"
    > 
  <div class="card-block">
    <div class="text-left">
    <h5>{{country.name.official}}</h5>
    <p>{{ country.capital}}- {{country.region }}</p>
    </div>
  </div>
       </router-link>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
