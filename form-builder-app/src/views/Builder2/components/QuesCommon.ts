export enum EStylePosition { 
  RELATIVE="relative", 
  ABSOLUTE="absolute", 
  STATIC="static", 
  FIXED="fixed" 
}
export enum EQuesType { INPUT, DATE, DATETIME }

// 定義較重要的屬性，留 x 塞其餘的
export interface IQuesStyle {
  position?: EStylePosition,
  top?: number,
  left?: number
  margin?: Array<number>,
  padding?: Array<number>,
  border?: Array<string>,
  x: { [key: string]: Array<string> | string; } // 其他屬性組成的物件
}

export interface IQuesConfig {
  Type: EQuesType, // 種類
  style: IQuesStyle, // style
}
export interface IQuesRenderObj extends IQuesConfig{
}
export interface IQues {
  GetRenderObj: ()=>any
}

// export function GetConfig(this: any): IQuesConfig{
//   return {
//     Type: EQuesType.Input,
//     top: '',
//     left: '',
//   }
// }