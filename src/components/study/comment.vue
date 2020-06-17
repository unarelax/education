<template>
  <div>
      <div class="wrap">
          <div class="allbuttom">
            <div class="comment">
                <div class="title">
                <span>全部评论</span>
                    <span>(25)</span>
                </div>
                <div class="commentAll">
                    <div class="allNumber" v-for="item in 1" :key="item">
                        <div class="avatar">
                          <el-avatar :size="40" src="" />
                        </div>
                        <div class="text">
                            <div class="first">
                                <span>章若楠</span>
                                <span style="text-align: end;">2019-12-25 11:45:00</span>
                            </div>
                            <p style="margin: 0;">1945年诞生,文本内容默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。</p>
                            <!-- <div class="next">
                                <span>1945年诞生,文本内容默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。</span>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="other">
                <span>其他相关视频</span>
                <div class="numberAll">
                    <div class="allNumber" v-for="item in 1" :key="item">
                        <a href="">
                            <img  width=150px src="@/assets/other.jpeg" alt="">
                            <!-- <span>未成年人保护法解读</span>
                            <span>关心桥</span> -->
                        </a>
                    </div>
                </div>
            </div>
        </div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'comment'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{ 
  text-decoration:none 
}
.wrap {
    background-color: #fffffe;
    box-sizing: border-box;
    width: 1000px;
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    margin: 0 auto;
}
.allbuttom{
    display: flex;
    flex-direction: row;
}
.comment{
    width: 700px;
    padding-right: 20px;
    text-align: start;
}
.title{
    text-align: start;
    padding-bottom: 10px;
}
.commentAll {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: flex-start ;
    align-items:center;
    font-size: 14px;
}
.avatar {
    display: inline-block;
    padding-left: 20px;
   padding-right: 20px;
   height: 40px;
}
.text {
  display: inline-block;
  width: 620px;
}
.allNumber{
    width: 100%;
    border-bottom: 1px solid #E4E7ED;
}
</style>
