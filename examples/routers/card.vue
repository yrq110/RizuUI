<template>
  <div>
    <p>pic from Ask</p>
    <ul>
      <li>
        <Card type="mf" :img="img">
          <template slot="card-title">Lorem ipsum</template>
          <template slot="card-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</template>
        </Card>
      </li>
      <li>
        <Card type="ko" :img="img">
          <template slot="card-category">#Lorem</template>
          <template slot="card-title">Lorem ipsum</template>
          <template slot="card-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</template>
        </Card>
      </li>
      <li>
        <Card type="cc" :img="img">
          <template slot="card-title">Lorem ipsum</template>
          <template slot="card-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</template>
          <template slot="card-btn">Lorem</template>
        </Card>
      </li>
      <li>
        <Card type="gh" :img="img">
        </Card>
      </li>
      <li class="gh-2">
        <Card type="gh-2">
        </Card>
      </li>
      <li>
        <Card type="kz" :img="img">
          <template slot="card-title">Lorem ipsum</template>
          <template slot="card-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit</template>
        </Card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: 'http://opctl018t.bkt.clouddn.com/dva.jpg',
      img2: 'http://opctl018t.bkt.clouddn.com/hori.jpg'
    }
  }
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
