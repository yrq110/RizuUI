<template>
  <div>
    <img :src="img" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: 'http://opctl018t.bkt.clouddn.com/logo.png'
    }
  }
}
</script>

<style scoped>
div {
  position: relative;
}
img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
