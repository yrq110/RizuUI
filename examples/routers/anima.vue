<template>
  <div>
    <ul>
      <li><RzAnima type="ball-1"></RzAnima></li>
      <li><RzAnima type="ball-2"></RzAnima></li>
      <li><RzAnima type="ball-3"></RzAnima></li>
      <li><RzAnima type="text-1"><template slot="text">Rizu</template></RzAnima></li>
      <li><RzAnima type="text-1" :textStroke="textStroke" :textWidth="textWidth" :textFontFamily="textFontFamily"><template slot="text">Hello</template></RzAnima></li>
      <li><RzAnima type="text-2"><template slot="text">Rizu</template></RzAnima></li>
      <li><RzAnima type="rect-1"></RzAnima></li>
      <li><RzAnima type="rect-2"></RzAnima></li>
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
