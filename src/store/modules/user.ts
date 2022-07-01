import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      // 定义token
      token: localStorage.getItem("token") || "",
      // 用户信息
      userInfo: {},
    };
  },
  getters: {},

  actions: {
    //   修改token
    changeToken(token: string) {
      this.token = token;
      localStorage.setItem("token", token);
    },
  },
});
