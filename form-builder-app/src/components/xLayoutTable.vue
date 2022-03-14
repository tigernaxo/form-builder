<template>
	<table>
		<th>
		</th>
		<tbody>
		</tbody>
	</table>
</template>

<script setup lang="ts">
import {defineProps, PropType} from 'vue'
import { ElementAttr } from '../components/xHtmlElConfig'

export interface Title extends ElementAttr {
	text: String
}

defineProps({
	headers: Array as PropType<Array<String>>,
	rows: Number, 
	cols: Number
});
// 這裡要管理每一個 td 的 id
// 也必須管理每一個 td 跟外層互動的事件，td 具有跟其他 html elemet 平等地位
// td 選中、新增、刪除、裡面置放其他元素

</script>

<style scoped>

</style>