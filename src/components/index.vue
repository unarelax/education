<template>
  <div>
    <nav-bar/>
    <viedo/>
    <tabDrop/>
    <comment/>
  </div>
</template>

<script>
import navBar from './study/nav'
import viedo from './study/viedo'
import tabDrop from './study/tabDrop'
import comment from './study/comment'

export default {
  name: 'index',
  components: {
    navBar,
    viedo,
    tabDrop,
    comment
  },
  beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#f5f6f8;')
  },
  //销毁前清除
  beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
