<template>
  <div>
    <p>pic from Ask</p>
    <ul>
      <li>
        <Card type="mf">
          <template slot="card-title">Lorem ipsum</template>
          <template slot="card-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</template>
        </Card>
      </li>
      <li>
        <Card type="ko">
          <template slot="card-category">#Lorem</template>
          <template slot="card-title">Lorem ipsum</template>
          <template slot="card-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</template>
        </Card>
      </li>
      <li>
        <Card type="cc">
          <template slot="card-title">Lorem ipsum</template>
          <template slot="card-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</template>
          <template slot="card-btn">Lorem</template>
        </Card>
      </li>
      <li>
        <Card type="gh">
        </Card>
      </li>
      <li class="gh-2">
        <Card type="gh-2">
        </Card>
      </li>
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
body {
  background: #f2f2f2;
}
p {
  margin-left: 40px;
}
ul {
  display: flex;
  flex-wrap: wrap;
}
li {
  list-style: none;
  display: inline-block;
  margin: 30px;
}
li.gh-2 {
  height: 100px;
}
</style>
