<template>
  <div>
    <Nav type="nd" :navdata="navdata"></Nav>
  </div>
</template>

<script>
// import Nav from '../components/navigation'
export default {
  data () {
    return {
      navdata: {
        title: 'Lorem',
        subtitle: 'Lorem ipsum',
        elements: [
          {
            title: 'Lorem',
            content: 'Lorem ipsum dolor sit amet',
            color: '#cf9287',
            detail: {
              title: 'Lorem',
              sections: [
                {
                  title: 'Lorem',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                },
                {
                  title: 'Lorem',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                },
                {
                  title: 'Lorem',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                }
              ]
            }
          },
          {
            title: 'Lorem',
            content: 'Lorem ipsum dolor sit amet',
            color: '#7d85b2',
            detail: {
              title: 'Lorem',
              sections: [
                {
                  title: 'Lorem',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                },
                {
                  title: 'Lorem',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                },
                {
                  title: 'Lorem',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                }
              ]
            }
          },
          {
            title: 'Lorem',
            content: 'Lorem ipsum dolor sit amet',
            color: '#d2516c',
            detail: {
              title: 'Lorem',
              sections: [
                {
                  title: 'Lorem',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                },
                {
                  title: 'Lorem',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                },
                {
                  title: 'Lorem',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
                }
              ]
            }
          }
        ]
      }
    }
  }
}

</script>

<style scoped>
</style>
