
import navLists from './navLists.json'
import sidebarLists from './sidebar.json'

import indexLists from './indexLists.json'
 

export const nav = navLists
export const sidebar = sidebarLists


const BASE_URL = '/web2026/'



// 技术列表


export const techList = indexLists.map(item => ({
  ...item,
  link: BASE_URL + item.link
}))
