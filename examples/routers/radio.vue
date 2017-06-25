<template>
  <div class="rd">
    <!--<RzRadio name="fruit" label="Apple" v-model="sel">Apple</RzRadio>
    <RzRadio name="fruit" label="Banana" v-model="sel">Banana</RzRadio>
    <RzRadio name="fruit" label="Orange" v-model="sel">Orange</RzRadio>-->
    <RzRadio name="fruit" label="Apple" v-model="sel">Apple</RzRadio>
    <RzRadio name="fruit" label="Banana" v-model="sel">Banana</RzRadio>
    <RzRadio name="fruit" label="Orange" v-model="sel">Orange</RzRadio>
    <span>Picked: {{ sel }}</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sel: 'Banana'
    }
  }
}
</script>
<style scoped>
.rd {
  margin-left: 100px;
}
</style>
