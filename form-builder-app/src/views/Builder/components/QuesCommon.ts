export enum QuesType { Input }
export interface IQuesConfig {
  Type: QuesType,
  top: string,
  left: string,
}

export function test(){
  console.log('test in part')
}
export function testGet(this: any){
  console.log(this.test())  // 用這個方式取得 this，this 指向綁定的呼叫物件
}
export function GetConfig(this: any): IQuesConfig{
  return {
    Type: QuesType.Input,
    top: '',
    left: ''
  }
}