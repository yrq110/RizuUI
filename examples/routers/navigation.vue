<template>
  <div>
    <ul class="vertical">
      <li class="muu"><RzNav type="muu"></RzNav></li>
      <li class="ct"><RzNav type="ct" :list="list"></RzNav></li>
      <li class="mu"><RzNav type="mu" :items="items"></RzNav></li>
      <li class="vc"><RzNav type="vc" :items="items_2" style="width:100px;height:650px;"></RzNav></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: ['yrq', 'yepoch', 'rizu', 'dixxxy'],
      items: [
        {
          title: 'People',
          lists: [
            'yrq', 'yepoch', 'dixxxy', 'rizu'
          ]
        },
        {
          title: 'Object',
          lists: [
            'Math', 'English', 'Physics', 'Chemistry'
          ]
        },
        {
          title: 'foo',
          lists: [
            'zhangsan', 'lisi', 'wangwu'
          ]
        },
        {
          title: '天干',
          lists: [
            '甲', '乙', '丙', '丁', '戊', '己', '辛', '壬', '癸'
          ]
        },
        {
          title: '天干',
          lists: [
            '甲', '乙', '丙', '丁', '戊', '己', '辛', '壬', '癸'
          ]
        }
      ],
      items_2: [
        {
          title: 'LEARN',
          content: 'Know naraken'
        },
        {
          title: 'SEEN',
          content: 'Scene in naraken'
        },
        {
          title: 'TRY',
          content: 'Reason for visit'
        }
      ]
    }
  }
}

</script>

<style scoped>
div {
  margin: 0;
}
ul {
  display: flex;
  flex-wrap: wrap;
}
li {
  list-style: none;
  display: inline-block;
  margin: 0 5%;
  width: 30%;
  height: 500px;
  overflow: hidden;
}

.muu {
  width: 100%;
  height: 120px;
}
.ct {
  width: 10%;
}

.vc {
  height:650px;
}
</style>
