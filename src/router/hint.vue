<template>
  <div>
    <ul>
      <li>
        <Hint type="sof">
          <template slot="hint-btn-txt">css</template>
          <template slot="hint-callout-title">229.6k followers, 463.9k questions</template>
          <template slot="hint-callout-content">CSS (Cascading Style Sheets) is a style sheet language used for describing the look and formatting of HTML (Hyper Text Markup Language), XML (Extensible Markup Language) documents and SVG elements including (but not limited to) colors, layout, and fonts.</template>
        </Hint>
      </li>
    </ul>
  </div>
</template>

<script>
import Hint from '../components/hint'
export default {
  components: { Hint }
}
</script>

<style scoped>
li {
  margin-top: 10px;
}
</style>
