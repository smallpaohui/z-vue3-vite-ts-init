let url = "localhost:3000";
export default {
  development: {
    // 开发环境接口请求
    host: "",
    // 开发环境 wss 路径
    wss: "",
  },
  test: {
    // 测试环境接口地址
    host: "",
    // 测试环境 wss 路径
    wss: "",
  },
  release: {
    // 正式环境接口地址
    host: "https://" + url,
    // 正式环境 wss 路径
    wss: "https://" + url,
  },
};
