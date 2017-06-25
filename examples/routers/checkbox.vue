<template>
  <div class="cb">
    <RzCheckbox label="yrq110" name="student" v-model="rel">YRQ110</RzCheckbox>
    <RzCheckbox label="dixxxy" name="student" v-model="rel">Dixxxy</RzCheckbox>
    <RzCheckbox label="yepoch" name="student" v-model="rel">Yepoch</RzCheckbox>
    <span>Picked: {{ rel }}</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rel: ['yrq110']
    }
  }
}
</script>
<style scoped>
.cb {
  margin-left: 100px;
}
</style>
