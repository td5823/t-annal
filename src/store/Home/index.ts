import { create } from "zustand";

import { postJson } from "utils/request";

export const storeHome = create((set) => ({
  loading: false,
  token: null, // 用户token
  userInfo: null, // 用户信息
  favorites: null, // 收藏菜单集合
  menus: [], // 菜单集合
  activeMenuKey: "", // 当前激活菜单的key
  tabPanes: [], // tab页签集合{ id: '-1', title: '我的主页', url: '/sysapp/react/web/platform.html#/home', closable: false }
  activePanelKey: "m-home", // 当前激活tab页签的key
  prevActivePanelKey: "", // 上一次激活的tab页签key
  permission: [], // 菜单权限
  fixedSider: localStorage.getItem("wq-main-fixed-sider") !== "false", // 是否固定侧边栏
  showTour: !localStorage.getItem("wq-main-show-tour"), // 是否展示漫游导航
  messageCount: 0, // 未读消息数量
  // 设置store
  changeState: async (params = {}) => {
    set({ ...params });
  },
  // 获取菜单信息
  getMenuInfo: async () => {
    set({ loading: true });
    const { code, data }: any = await postJson(
      "/platform/portal/getWebMenuList.do"
    );
    console.log("data", data);
    if (code === "1") {
      set({});
    }
    set({ loading: false });
  },
}));
