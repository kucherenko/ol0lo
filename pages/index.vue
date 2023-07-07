<template>
  <div>
    <h1>Welcome to my Nuxt project!</h1>
    <Card />
    <GameBoard />
    <Timer />
  </div>
</template>

<script>
import Card from '@/components/Card'
import GameBoard from '@/components/GameBoard'
import Timer from '@/components/Timer'

export default {
  components: {
    Card,
    GameBoard,
    Timer
  }
}
</script>

<style>
/* Add any custom styles here */
</style>