<template>
  <div class="card">
    <img v-if="flipped" :src="image" />
    <div v-else class="card-back"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flipped: false,
      image: require('../assets/card-front.png')
    }
  },
  methods: {
    flipCard() {
      this.flipped = !this.flipped;
    }
  }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>