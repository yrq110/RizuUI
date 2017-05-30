<template>
  <div>
    <ul>
      <li><Anima type="ball-1"></Anima></li>
      <li><Anima type="ball-2"></Anima></li>
      <li><Anima type="ball-3"></Anima></li>
      <li><Anima type="text-1" ><template slot="text">Rizu</template></Anima></li>
      <li><Anima type="text-1" :textStroke="textStroke" :textWidth="textWidth" :textFontFamily="textFontFamily"><template slot="text">Hello</template></Anima></li>
      <li><Anima type="text-2"><template slot="text">Rizu</template></Anima></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textStroke: ['red', 'blue', 'green'],
      textWidth: '5',
      textFontFamily: 'Open Sans, Impact'
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:800);
</style>
