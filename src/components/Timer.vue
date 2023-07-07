<template>
  <div>{{ time }}</div>
</template>

<script>
export default {
  data() {
    return {
      time: 0
    }
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    startTimer() {
      setInterval(() => {
        this.time++
      }, 1000)
    }
  }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
