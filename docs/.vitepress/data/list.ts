import navLists from './navLists.json'

import sidebarLists from './sidebar.json'



import indexLists from './indexLists.json'


// 基础URL
const BASE_URL = '/web2026'

export const nav = navLists
export const sidebar = sidebarLists



// 技术列表
export const techList = indexLists.map(item => ({
    ...item,
    link: BASE_URL + item.link + '/'
}))
