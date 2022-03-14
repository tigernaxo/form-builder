// classes 是 Array<string> 的集合
export interface Classes extends Array<string>{}
// css style
export interface CSSStyle {
	display?: String,
	width?: String,
	height?: String,
	fontFamily?: String,
	fontStyle?: String,
	fontSize?: String,
	color?: String,
	border?: String,
	margin?: String,
	padding?: String,
	align?: String,
	zIndex?: String
}
// 事件清單
export interface EventList extends Array<{[key: string]: String}>{}
// Config
export interface ElementAttr {
	TagName: String, // tagName
	ParentId?: String, // parent element id
	Id?: String, // element uniq id
	CSSStyle?: CSSStyle, // element style attribute
	Classes?: Classes, // element class 
	EventList?: EventList,  // 事件清單 event: function
	Model?: String  // 該元素要綁定的資料欄位
}