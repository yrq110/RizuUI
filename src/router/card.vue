<template>
  <div>
    <p>pic from Ask</p>
    <ul>
      <li><Card type="mf"></Card></li>
      <li><Card type="ko"></Card></li>
    </ul>

  </div>

</template>

<script>
import Card from '../components/card'
export default {
  components: { Card }
}
</script>

<style scoped>
  p {
    margin-left: 40px;
  }
  li {
    margin-top: 10px;
    list-style: none;
    display: inline-block;
    margin: 10px;
  }
</style>
