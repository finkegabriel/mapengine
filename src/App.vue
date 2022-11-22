<template>
  <div id="app">
    <GoogleMap />
  </div>
</template>

<script>
import GoogleMap from './components/google_map.vue'

export default {
  name: 'App',
  components: {
    GoogleMap
  }
}
</script>