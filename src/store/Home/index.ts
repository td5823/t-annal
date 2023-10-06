import { create } from "zustand";

import { postJson } from "utils/request";

interface StoreHomeState {
  loading: boolean;
  token: string | null;
  userInfo: UserInfo | null;
  favorites: any[] | null;
  menus: Menu[]; // 假设 Menu 和 UserInfo 是定义好的类型
  activeMenuKey: string;
  tabPanes: TabPane[];
  activePanelKey: string;
  prevActivePanelKey: string;
  permission: string[];
  fixedSider: boolean;
  showTour: boolean;
  messageCount: number;
}

interface UserInfo {
  // 定义用户信息的类型
}

interface Menu {
  // 定义菜单项的类型
}

interface TabPane {
  id: string;
  title: string;
  url: string;
  closable: boolean;
}

export const storeHome: any = create<StoreHomeState>((set) => ({
  loading: false,
  token: null,
  userInfo: null,
  favorites: null,
  menus: [],
  activeMenuKey: "",
  tabPanes: [],
  activePanelKey: "m-home",
  prevActivePanelKey: "",
  permission: [],
  fixedSider: localStorage.getItem("wq-main-fixed-sider") !== "false",
  showTour: !localStorage.getItem("wq-main-show-tour"),
  messageCount: 0,
  // 设置store
  changeState: async (params = {}) => {
    set((state) => ({ ...state, ...params }));
  },
  // 获取菜单信息
  getMenuInfo: async () => {
    // debugger
    set({ loading: true });
    const result = await postJson("/platform/portal/getWebMenuList.do");
    if (result.code === "1") {
      set({ menus: result.data });
    }
    set({ loading: false });
  },
}));
