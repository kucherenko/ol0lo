<template>
  <div class="container">
    <header>
      <Nav />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 960px;
  padding: 0 20px;
}

header, main, footer {
  margin-bottom: 20px;
}
</style>
