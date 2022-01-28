<template>
	<div class="row g-0 area-root">
    <div class="col-2 container area-component">
      <div>
        <!-- <input-text text="inputText" draggable="true" @dragstart="dragInfo.isTemplate = true; dragstartHandler($event)"></input-text>
        <input-text text="inputText1" draggable="true" @dragstart="dragstartHandler($event)"></input-text>
        <x-q-input :type="'text'" :placeholder="'placeholderabc'"></x-q-input> -->
          <ques-input ref="inputText" draggable="true" @dragstart="TempEl.onDragStart($event)"></ques-input>
      </div>
    </div>
    <div class="col-8 container area-edit">
      <div class="mx-auto my-auto" id="convas" droppable="true" 
        @drop="Convas.onDrop($event)" 
        @dragover.prevent="Convas.onDragover($event)"
        @dragleave="monk($event, 'dragleave')" 
        @dragenter.prevent 
      > 
      <!-- 這裡的 dragstart 要跟 template 區塊的分開，這裡不做複製 -->
      <template v-for="(item, idx) in OperEl.itemList" :key="idx">
        <template v-if="item.Type === QuesType.Input">
          <ques-input :fb-id="`${item.id}`" :ref="refArr[parseInt(item.id||'-1')]" draggable="true" @dragstart="OperEl.onDragStart($event)" :config="item"></ques-input>
        </template>
      </template>
      </div>
    </div>
    <div class="col-2 area-property container">
      元件編輯區 {{dragInfo}}
    </div>
  </div>

</template>

<script setup lang="ts">
import { throttle } from 'lodash'
// import InputText from './components/InputText.vue'
import {reactive, Ref, ref} from 'vue'
import { IQuesConfig, QuesType } from './components/QuesCommon'
import QuesInput from './components/QuesInput.vue';
// To change that behavior so that an element becomes a drop zone or is droppable, 
// the element must have both ondragover (en-US) and ondrop (en-US) event handler attributes. 
// https://stackoverflow.com/questions/63063312/why-doesnt-the-drop-event-work-for-me-in-vue
// In order to make the div a drop target, the div's dragenter and dragover events must be canceled. 

// todo:
// clonNode
// record source element information
// node proccessing(copy, moving... etc) must be done by self

// Note: ref component 型別的方法，這樣可以呼叫元件 expose 的方法
let inputText = ref<InstanceType<typeof QuesInput>>()
// let arr: Array<Ref<InstanceType<typeof QuesInput>>> = []


let eDragStart: DragEvent // 抓取事件
let dragInfo = reactive ({
  dragStartEvent: null,
  isTemplate: false,
})

// let refArr: Array<Ref<InstanceType<typeof QuesInput>>> = []
let refArr: Array<Ref<any>> = []
let TempEl = {
  onDragStart: (e: DragEvent)=>{
    dragInfo.isTemplate = true
    eDragStart = e
  },
  onDrop:(e: DragEvent)=>{
    console.log('TempEl===')
    console.log('drag',  eDragStart)
    console.log('drop',  e)
    let targetEl = <HTMLElement>e.target // 目標元件(畫布)
    let convasEl = document.getElementById('convas'); // 目標元件(畫布)
    let template = (<HTMLElement>eDragStart.target) // 要複製的元素

    // // 計算元素應該在的位置 // 游標經過的量好像不是釋放時 DragEvent 的 offset 
    let {x: templateX, y: templateY} = template.getBoundingClientRect() // 取得移動元素的定位
    let {x: convasX, y: convasY} = <DOMRect>(convasEl?.getBoundingClientRect()); // 取得 convas 的定位
    let {pageX: endX, pageY: endY} = e // 取得滑鼠游標一釋放的定位
    let {pageX: startX, pageY: startY } = eDragStart // 取得滑鼠游標一開始的定位
    let finalX =  (endX - startX) + templateX - convasX // 計算元素最後的 x 座標
    let finalY =  (endY - startY) + templateY - convasY // 計算元素最後的 y 座標
    // console.log(`startX, startY`, startX, startY)

    let elRef = ref<InstanceType<typeof QuesInput>>()
    OperEl.itemList.push({
        Type: QuesType.Input, 
        id: `${refArr.length}`, 
        ref: elRef,
        top: `${finalY}px`,left: `${finalX}px`
      });
    refArr.push(elRef)
  }
}
let OperEl = {
  itemList: reactive(new Array<IQuesConfig>()), // 清單
  onDragStart: (e: DragEvent)=>{
    dragInfo.isTemplate = false
    eDragStart = e
  },
  onDrop:(e: DragEvent) => {
    console.log('drag',  eDragStart)
    console.log('drop',  e)
    // 這裡要拿到 target.config 才能更新
    // console.log('target.config',  e.target.config)
    // let targetEl = <HTMLElement>e.target // 目標元件(畫布)
    let convasEl = document.getElementById('convas'); // 目標元件(畫布)
    let template = (<HTMLElement>eDragStart.target) // 要複製的元素

    // 計算元素應該在的位置 // 游標經過的量好像不是釋放時 DragEvent 的 offset 
    let {x: templateX, y: templateY} = template.getBoundingClientRect() // 取得移動元素的定位
    let {x: convasX, y: convasY} = <DOMRect>(convasEl?.getBoundingClientRect()); // 取得 convas 的定位
    let { pageX: endX, pageY: endY} = e // 取得滑鼠游標一釋放的定位
    let { pageX: startX, pageY: startY } = eDragStart // 取得滑鼠游標一開始的定位
    let finalX =  (endX - startX) + templateX - convasX // 計算元素最後的 x 座標
    let finalY =  (endY - startY) + templateY - convasY // 計算元素最後的 y 座標
    // console.log(`startX, startY`, startX, startY)
    // console.log(`endX, endY`, endX, endY)
    // console.log(`templateX, templateY`, templateX, templateY)
    // console.log(`convasX, convasY`, convasX, convasY)

    // 新增複製的元素
      template.style.position="absolute";
      template.style.left = `${finalX}px`;
      template.style.top = `${finalY}px`;

      let fbId = template.getAttribute('fb-id')
      console.log('cal config', fbId)
      console.log(refArr)
      var ref = refArr[parseInt(fbId || '-1')]
      console.log('ref.value:',(ref.value))

    // todo 從 component 要設定的資料，由資料加入[頁面元素設定 list]
    // todo 由[頁面元素設定 list]渲染頁面
    // todo 由[頁面元素設定 list]產生資料
    // todo 點選元件出現設定視窗(製作 ques template 有元件 click 事件，屬性視窗)
    // todo 版次控制
    // todo 預覽電腦版、手機板
    // todo 產生 pdf
    // todo 依據先來後到設定 z-index
  }
}

let Convas = {
  onDragover: throttle(function(e: DragEvent){
    // e.dataTransfer!.dropEffect = "copy"
  }, 200),
  onDrop: (e: DragEvent)=>{
    dragInfo.isTemplate ? TempEl.onDrop(e) : OperEl.onDrop(e)
  }
}

// throttle 效能

function monk(e: DragEvent, str: string){
}
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