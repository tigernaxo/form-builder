import { createRouter, createWebHashHistory } from "vue-router"

import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Builder from '../views/Builder.vue'
import Temp from '../views/Temp.vue'
import About from '../views/About.vue'
// const Temp = { template: '<div>Temp</div>' }

const routes = [
	// router引數詳細看下文
	{
		path: "/home",
		name: "home",
		component: Home
	},
	{
		path: "/about",
		name: "about",
		component: About
	},
	{
		path: "/builder",  
		name: "builder",
		component: Builder
    },
    {
		path: "/admin",  
		name: "admin",
		component: Admin
	},
	{
		path: "/user/:uid",  // 動態引數
		name: "user",
		component: Temp
    }
]
export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})