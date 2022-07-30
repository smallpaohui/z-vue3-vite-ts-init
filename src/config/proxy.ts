let url = "150.158.41.119:8083";
export default {
  development: {
    // 开发环境接口请求
    host: "",
  },
  test: {
    // 测试环境接口地址
    host: "",
  },
  release: {
    // 正式环境接口地址
    host: "https://" + url,
  },
};
