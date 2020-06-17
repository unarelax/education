<template>
<div>
  <div class="wrap">
    <div class="title ">
        <span style="font-weight: 800;">宪法系列剧</span>
        <span>: </span>
        <span>第二集 </span>
        <span>我国宪法是怎样诞生的</span>
    </div>
    <div class="body">
        <el-tabs @tab-click="handleClick">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-user"></i> 普通达人</span>
                <div class="content">
                    <div class="avatar">
                      <el-avatar :size="50" src="" />
                    </div>
                    <div class="text">
                        <div class="textItem name">
                            <span>姓名：</span>
                            <span>普通达人</span>
                        </div>
                        <div class="textItem subject">
                            <span>教学科目: </span>
                            <span>课外</span>
                        </div>
                        <div class="textItem school">
                            <span>所在学校：</span>
                            <span>关心桥教育</span>
                        </div>
                        <div class="textItem intro">
                            <span>教师简介: </span>
                            <!-- 应先做个判断 -->
                            <span>该教师无简介</span>
                        </div>
                    </div>
                </div>
                <!-- {{item.content}} -->
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-tickets"></i> 课程简介</span>
                <div class="course">
                    <span>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</span>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
    <div class="number">
        <div class="numberText">
         <span>选集</span>
        </div>
        <!-- <el-button type="danger" size="mini">1</el-button> -->
        <div class="numberAll">
            <div class="allNumber" v-for="item in 25" :key="item">
                <el-button type="danger" size="mini" style="margin:5px 8px 5px 8px" plain>{{item}}</el-button>
            </div>
        </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'tabDrop',
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style>
.el-tabs__active-bar{
    height:0
}
.el-tabs__item.is-active {
    color: #C2121F;
    font-weight: 800;
}
.el-icon-user:before {
    font-size: 16px;
}
.el-icon-tickets:before {
    font-size: 16px;
}
.el-button--danger.is-plain {
    color: #C2121F;
    background: #fffffe;
    border-color: #fffffe;
}
.el-button--danger.is-plain {
    color: #9a9a9a;
}
</style>
<style scoped>
 .wrap{
     background-color: #fffffe;
     box-sizing: border-box;
    width: 1000px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
 }
.title{
    display: block;
    padding-top: 15px;
    padding-bottom: 5px;
    /* height: 50px;
    line-height: 50px; */
    text-align: start;
}
.body {
    margin-bottom: 10px;
    /* margin-top: 10px; */
}
.content {
    width: 960px;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: flex-start ;
    align-items:center;
}
.content >.avatar {
  display: inline-block;
  padding-left: 30px;
  padding-right: 30px;
}
.content >.text {
    /* width: 860px; */
    /* display: inline-block; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* align-items: flex-start */
}

.content >.text > .textItem {
    display: inline-block;
    padding-right: 160px;
    font-size: 14px;
    line-height: 30px;
}
.course{
    font-size: 14px;
    width: 960px;
    padding: 0px 30px 10px 30px;
    text-align: start;
    /* padding-right: 30px; */
}
.number {
    width: 960px;
    background-color: #f7f8fc;
    padding-top: 10px;
    padding-bottom: 10px;
    /* flex-wrap: wrap; */
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: flex-start ;
    /* align-items:center; */
}
.numberText{
    /* display: inline-block;
    width: 30px; */
  display: inline-block;
  padding-top: 8px;
  padding-left: 10px;
  padding-right: 5px;
}
.numberAll {
    width: 908px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

</style>
