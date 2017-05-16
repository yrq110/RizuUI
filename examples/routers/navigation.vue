<template>
  <div>
    <ul class="vertical">
      <li class="muu"><Nav type="muu"></Nav></li>
      <li class="ct"><Nav type="ct"></Nav></li>
      <li class="mu"><Nav type="mu" :items="items"></Nav></li>
      <li class="vc"><Nav type="vc" :items="items_2"></Nav></li>
    </ul>
  </div>
</template>

<script>
// import Nav from '../components/navigation'
export default {
  data () {
    return {
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
