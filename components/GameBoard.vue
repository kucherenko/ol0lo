<template>
  <div class="game-board">
    <Card v-for="(card, index) in cards" :key="index" @click.native="flipCard(card)">
    </Card>
  </div>
</template>

<script>
import Card from './Card'

export default {
  components: {
    Card
  },
  data() {
    return {
      cards: [
        { id: 1, flipped: false },
        { id: 2, flipped: false },
        { id: 3, flipped: false },
        { id: 4, flipped: false }
      ]
    }
  },
  methods: {
    flipCard(card) {
      card.flipped = !card.flipped;
    }
  }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>