<template>
  <div class="rd">
    <!--<RzRadio name="fruit" label="Apple" v-model="sel">Apple</RzRadio>
    <RzRadio name="fruit" label="Banana" v-model="sel">Banana</RzRadio>
    <RzRadio name="fruit" label="Orange" v-model="sel">Orange</RzRadio>-->
    <RzRadio name="fruit" label="Apple" v-model="rel">Apple</RzRadio>
    <RzRadio name="fruit" label="Banana" v-model="rel">Banana</RzRadio>
    <RzRadio name="fruit" label="Orange" v-model="rel">Orange</RzRadio>
    <span>Picked: {{ rel }}</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rel: 'Banana'
    }
  }
}
</script>
<style scoped>
.rd {
  margin-left: 100px;
}
</style>
