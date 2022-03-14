<template>
	<div class="row g-0 area-root">
    <div class="col-2 container area-component">
      <div class="q-pa-md q-gutter-md">
        <q-badge color="blue">
          #4D96F2
        </q-badge>
      </div>
      <div>
          <ques-input ref="inputText" draggable="true"></ques-input>
      </div>
    </div>
    <div class="col-8 container area-edit">
      <div class="mx-auto my-auto" id="convas" droppable="true" > </div>
    </div>
    <div class="col-2 area-property container">
      元件編輯區 
    </div>
  </div>

</template>

<script setup lang="ts">
import { ElementAttr } from '../../components/xHtmlElConfig'
import { throttle } from 'lodash'
// import InputText from './components/InputText.vue'
import {reactive, Ref, ref} from 'vue'
import { IQuesConfig, QuesType } from './components/QuesCommon'
import QuesInput from './components/QuesInput.vue';


let elements: Array<ElementAttr> = []
// todo 抓取放下後，修改到正確的 parentId
// foucus 的時候 App 要知道正在修改哪一個元素
//    抓 focus 事件？ 拿到 Id？


</script>

<style scoped>
#convas{
  width: 210mm;
  height: 297mm;
  background-color: white;
  position: relative;
}
.area-edit{
  overflow: auto;
  background-color: black;
}
.area-component{
  background-color: rgb(49, 34, 185);
  color:aliceblue;
}
.area-property{
  background-color: rgb(97, 36, 97);
  color:aliceblue;
}
 .area-root, .area-root > div {
  height: 100%;
}
</style>