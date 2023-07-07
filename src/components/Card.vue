<template>
  <div>
    <!-- Add card template here -->
  </div>
</template>

<script>
export default {
  props: {
    imagePath: String,
  },
  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<style scoped>
/* Add card styles here */
</style>
