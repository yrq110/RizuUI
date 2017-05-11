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
        <Card type="gh">
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
