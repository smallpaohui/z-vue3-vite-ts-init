import axios from "axios";
import { useUserStore } from "@/store";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
const server = axios.create({
  timeout: 10000,
  baseURL: "/api",
});
// 请求拦截
server.interceptors.request.use((config: any) => {
  nprogress.start();
  if (config.url === "/api") {
    config.headers.Authorization = useUserStore().token;
  }
  return config;
});
// 响应拦截
server.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res;
  },
  (err) => {}
);
// 添加请求
export const post = (url: any, params: any = {}, isFile = false) => {
  //默认无文件
  // 判断有没有文件
  let data: any = null;
  if (isFile) {
    // 有文件
    data = new FormData();
    for (let i in params) {
      data.append(i, params[i]);
    }
    return server({
      url,
      method: "put",
      data,
    });
  } else {
    return server({
      url,
      method: "put",
      data: params,
    });
  }
};
export const del = (url: any, params: any = {}) => {
  return server({
    url,
    method: "delete",
    data: params,
  });
};
// 修改请求
export const put = (url: any, params: any = {}, isFile = false) => {
  //默认无文件
  // 判断有没有文件
  let data: any = null;
  if (isFile) {
    // 有文件
    data = new FormData();
    for (let i in params) {
      data.append(i, params[i]);
    }
    return server({
      url,
      method: "put",
      data,
    });
  } else {
    return server({
      url,
      method: "put",
      data: params,
    });
  }
};
// get请求
export const get = (url: any, params = {}) => {
  return server({
    url,
    method: "get",
    params,
  });
};
