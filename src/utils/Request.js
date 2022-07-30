/*
 * @Author: Tian Zhengdong
 * @Date: 2022-06-05 11:48:30
 * @Description:
 */
import axios from "axios";
import { message } from "antd";

// 修axios 默认请求时长
axios.defaults.timeout = 60000;

const env = process.env.NODE_ENV
if (env === 'development') {
  axios.defaults.baseURL = '/api'
  axios.defaults.withCredentials = true
}

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 500:
          message.destroy();
          message.error(error.response?.message || "服务器系统内部错误");
          break;
        case 401:
          break;
        case 403:
          message.destroy();
          message.error(error.response?.message || "无权限执行此操作");
          break;
        case 404:
          message.destroy();
          message.error(error.response?.message || "未找到此接口");
          break;
        case 408:
          message.destroy();
          message.error(error.response?.message || "请求超时");
          break;
        default:
          message.destroy();
          message.error(error.response?.message || ("未知错误", "ZKGJ021983"));
      }
    } else {
      message.destroy();
      message.error("服务器忙，请稍后重试");
    }
    return Promise.resolve(error.response);
  }
);

export const request = ({
  method = "post",
  url,
  params,
  callback,
  ...other
}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url,
      data: params,
      headers: { "Content-type": "application/json" },
      ...other,
    }).then(
      (response) => {
        typeof callback === "function" && callback(response?.data);
        resolve(response?.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
};
