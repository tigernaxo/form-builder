export function test(){
  console.log('test in part')
}
export function testGet(this: any){
  console.log(this.test())  // 用這個方式取得 this，this 指向綁定的呼叫物件
}