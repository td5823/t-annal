import axios from "axios";
// import postForm from "./postForm";
import _postJson from "./postJson";

axios.defaults.timeout = 300000;

// const token =
//   "UM_distinctid=1882eac40712a0-0760e5484573f1-1c525634-1fa400-1882eac4072a1a; CNZZDATA1280251002=429150966-1684407666-%7C1688111594; sourceType=WEB; SECKEY_ABVK=+mD1HisDJRmWvBAQwLZb5azdMoUM1e8B/LSS79aD+xc%3D; BMAP_SECKEY=dgGLi-jEjG6PmLRxNjgsmdRv_CEYFtCUpsq8Gc7AEeOCIqi8OhzQGf1gfEuerv670pk6ko4q9_H4rRG5_6g6Y9oSKPPO7UGSCMJh9R7w8GydLRvuN9zUC8Tg1DRtmwevJVw-7KO5O0V_6xVzVGRfDCD6b80-OiiSalzFzvKre8v-mCEDTUJjNY3ZD6My7I_o; WQSESSIONID=35759EC16CCED71353F4E18505B05867.10; x-token=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqd3QiLCJpYXQiOjE2OTMyNzE1ODksInN1YiI6IntcImFsbG93ZWRNdWx0aXBsZUxvZ2luXCI6MCxcImxvZ2luVHlwZVwiOlwiU09VUkNFX1RZUEVfV0VCXCIsXCJtdWx0aXBsZUxvZ2luVW5pcVRhZ1wiOlwiV0VCXCIsXCJyZWFsUmVmcmVzaFRva2VuRXhwaXJlTWludXRlXCI6MzM0ODAsXCJyZWFsVG9rZW5FeHBpcmVNaW51dGVcIjoxMTE2MCxcInJlZnJlc2hUb2tlbkV4cGlyZUhvdXJzXCI6NTU4LFwidGVuYW50SWRcIjo4Mzk3NDA2ODY0NzgxMzQzMjg2LFwidG9rZW5FeHBpcmVIb3Vyc1wiOjE4NixcInVzZXJJZFwiOjg1MzY4MzQwMzYzMzg4NjY5NTd9IiwiaXNzIjoiODUzNjgzNDAzNjMzODg2Njk1N184Mzk3NDA2ODY0NzgxMzQzMjg2X1dFQiIsImV4cCI6MTY5Mzk0MTE4OX0.Q1-MO8-70Zxp4Rnod8m35gCbJYGjLp53T0w_Vk864hU; login_tenant=8397406864781343286";

// // 设置默认请求头
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// axios.defaults.headers.common["Cookie"] = `token=${token}`;
const env = process.env.NODE_ENV;
if (env === "development") {
  axios.defaults.baseURL = "/api";
  axios.defaults.withCredentials = true;
}

// axios.interceptors.request.use((config) => {
//   config.headers["Cookie"] = `token=${token}`;
//   return config;
// });

export const postJson = _postJson

const request = {
  postJson:_postJson,
};

export default request;
