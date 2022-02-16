<template>
 <router-link
    :to="{ name: 'EventDetails', params: { id: country.cca3 } }"
    >
   <div class="country-card">
      <h4>{{ country.name.official }}</h4>
      <h4>{{ country.capital}}- {{country.region }}</h4>
    </div>
</template>

<script>
export default{
    props: {
        country: {
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>
.country-card {
  padding: 20px;
  flex: auto;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.country-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
