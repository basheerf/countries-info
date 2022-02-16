<template>
    <div id="nav">
      <router-link :to="{ name: 'CountryDetails' }">Home</router-link>
      |
      <router-link :to="{ name: 'About' }">About</router-link>
      |
    </div>
    <router-view>
</template>
