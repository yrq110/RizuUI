<template>
  <div>
    <Nav type="muu"></Nav>
    <img src="http://opctl018t.bkt.clouddn.com/nav1.jpg" alt="">
    <img src="http://opctl018t.bkt.clouddn.com/nav2.jpg" alt="">
    <img src="http://opctl018t.bkt.clouddn.com/nav3.jpg" alt="">
    <div class="page-top">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <line x1="0" y1="24" x2="16" y2="8" stroke-width="3" stroke="rgb(112,161,168)" />
        <line x1="16" y1="8" x2="32" y2="24" stroke-width="3" stroke="rgb(112,161,168)" />
      </svg>
    </div>
  </div>
</template>

<script>
import Nav from '../components/navigation'
export default {
  data () {
    return {
    }
  },
  components: { Nav }
}
</script>

<style scoped>

img {
  width: 100%;
}

.page-top {
  display: inline-block;
  position: fixed;
  bottom: 20px; right: 20px;
  cursor: pointer;
  transition: all 1s ease;
  background: white;
  border-radius: 5px;
  padding: 0 3px;
  opacity: 0;
}

.source {
  display: inline-block;
  position: fixed;
  bottom: 10px; left: 10px;
  font-weight: bold;
}

.fixed {
  position:fixed;
  top: 0;left: 0; right: 0;
  padding: 20px 0;
}

.top {
  padding: 40px 0;
}

.none {
  opacity: 0;
}

.display {
  opacity: 1;
}
</style>
