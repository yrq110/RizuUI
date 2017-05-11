<template>
  <div>
    <ul class="vertical">
      <li><Nav type="ct"></Nav></li>
      <li><Nav type="mu"></Nav></li>
    </ul>
  </div>
</template>

<script>
import Nav from '../components/navigation'
export default {
  components: { Nav }
}

</script>

<style scoped>
div {
  margin: 0;
}

li {
  list-style: none;
  display: inline-block;
  margin: 0;
  width: 20%;
  height: 300px;
  overflow: hidden;

}
</style>
