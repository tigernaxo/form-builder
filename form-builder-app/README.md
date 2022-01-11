# 環境設置 
## linter
`.eslintrc`
```json
{
  "root": true,
  "env": {
      "browser": true,
      "es2021": true,
      "node": true
  },
  "extends": [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  "parserOptions": {
    "ecmaVersion": 2021
  },
  "rules": {},
}
```

`.prettierrc`
```json
{
  "singleQuote": true,
  "semi": false,
  "formatOnSave": true,
  "endOfLine": "auto",
  "tabWidth": 2
}

```

# 安裝套件
## vue-router@next
 1. 安裝 `npm install vue-router@4`
 2. 建立 src/router/index.ts
 3. 修改 main.js 加入 router middleware
 4. 在App.vue 加入 <router-view></router-view>
 5. 加入 router-link
 `src/router/index.ts`
 ```typescript
import { createRouter, createWebHashHistory } from "vue-router"

const Temp = { template: '<div>Temp</div>' }

const routes = [
	// router引數詳細看下文
	{
		path: "/home",
		name: "home",
		component: Temp
	},
	{
		path: "/user/:uid",  // 動態引數
		name: "user",
		component: Temp
	},
]
export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})
 ```
 `main.js`
 ``` typescript
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App)
app.use(router)
app.mount('#app')
 ```
## 其他已安裝
 - axios (axios provides its own type definitions, so you don't need @types/axios installed!)
  `npm i axios`
 - [bootstrap](https://getbootstrap.com/)   
   `npm i bootstrap @types/bootstrap`
 - lodash   
   `npm i lodash @types/lodash`

## 還沒安裝
 - d3(@types?)   
   `npm i d3`


# Reference
 - https://iter01.com/652769.html