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
                    <div class="allNumber" v-for="item in 3" :key="item">
                        <div class="avatar">
                          <el-avatar :size="40" :src="url" />
                        </div>
                        <div class="text">
                            <div class="first">
                                <span style="color: #676767;">章若楠</span>
                                <span  style="position: absolute; right: 0; color: #9a9a9a;">2019-12-25 11:45:00</span>
                            </div>
                            <p style="margin: 0; padding-top:10px; line-height:22px;">1945年诞生,文本内容默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。</p>
                            <!-- <div class="next">
                                <span>1945年诞生,文本内容默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。</span>
                            </div> -->
                        </div>
                    </div>
                    <div class="page">
                        <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-size="100"
                        layout="prev, pager, next, jumper"
                        :total="1000">
                        </el-pagination>
                    </div>
                </div>
            </div>
            <div class="other">
                <div class="title">
                    <span>其他相关视频</span>
                </div>
                <div class="otherAll">
                    <div class="allOther" v-for="item in 4" :key="item">
                        <div class="otherImg">
                            <a href="">
                                <img style="width: 100px; height: 65px; border-radius: 5px;"  src="@/assets/other.jpeg" alt="">
                                <!-- <span>未成年人保护法解读</span>
                                <span>关心桥</span> -->
                            </a>
                        </div>
                        <div class="otherText">
                            <a href="" target="_blank">
                                <span class="otherTitle">未成年人保护法解读超出test</span>
                            </a>
                            <a href="" target="_blank">
                                <span style="font-size: 11px;">关心桥</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'comment',
  data() {
    return {
      url: require("@/assets/avatar.jpeg")
    }
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
}
</script>

<style>
.el-pager li.active {
    color: #C2121F;
}
.el-pager li.hover {
    color: #C2121F;
}
</style>

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
    width: 650px;
    padding-right: 30px;
    text-align: start;
}
.title{
    text-align: start;
    font-size: 16px;
    font-weight: 550;
}
.commentAll {
    font-size: 14px;
}

.page {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
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
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: flex-start ;
    /* align-items:center; */
    width: 100%;
    border-bottom: 1px solid #E4E7ED;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 10px;
}
/* .text > .first > .firstRight{
    text-align: right;
    display: inline-block;
} */
.text {
  position: relative;
}
.other {
    width: 100%;
    /* text-align: start; */
}
.otherAll {
    background-color: #f7f8fc;
    padding: 10px;
    margin-top: 10px;
}
.allOther {
    padding: 5px 0px;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: flex-start ;
    /* align-items:center; */
}
.otherImg {
    padding-right: 10px;
    height: 65px;
}
.otherText {
    /* position: relative;
    width: 110px; */
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 0px 5px 5px;
}

.otherText > a > span {
    /* margin: 0; */
    color: #676767;
    line-height: 18px;
    width: 155px;
}

.otherTitle {
    font-size: 13px;
	display: block; /* 当前元素本身是inline的，因此需要设置成block模式 */
	white-space: nowrap; /* 因为设置了block，所以需要设置nowrap来确保不换行 */
	overflow: hidden; /* 超出隐藏结合width使用截取采用效果*/
	text-overflow: ellipsis; /* 本功能的主要功臣，超出部分的剪裁方式 */
	-o-text-overflow: ellipsis; /* 特定浏览器前缀 */
}
</style>
