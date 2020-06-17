<template>
  <div class="play">
      <div class="viedo-play">
        <video width="1000px" height="480px" controls="controls">
            <source src="@/assets/viedo1.mp4" type="video/ogg" />
            您的浏览器不支持HTML5。
        </video>
      </div>
      <div class="viedo-control">
          <div class="left">
            <i class="el-icon-document-add" style="padding-right:30px">202025</i>
            <i class="el-icon-star-off">21689</i>
          </div>
          <div class="right">
            <i class="el-icon-share" style="padding-right:30px">3500</i>
            <i class="el-icon-download">44584</i>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'viedo'
}
</script>

<style>
.el-icon-document-add:before {
    padding-right: 5px;
    font-size: 16px
}
.el-icon-star-off:before {
    padding-right: 5px;
    font-size: 16px
}
.el-icon-share:before {
    padding-right: 5px;
    font-size: 16px
}
.el-icon-download:before {
    padding-right: 5px;
    font-size: 16px
}
</style>
<style scoped>
.play{
   width: 1000px;
   margin: 0 auto;
}
.viedo-play{
    width: 1000px;
    height: 480px;
}

.viedo-control{
    /* width: 1000px; */
    height: 30px;
    /* line-height: 30px; */
    background-color: #262930;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    color: #a0a0a0;
    font-size: 12px
}
.left {
    padding-left: 15px;
}
.right {
    padding-right: 15px;
}


</style>
