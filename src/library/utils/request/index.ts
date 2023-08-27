import axios from "axios";
// import postForm from "./postForm";
import postJson from "./postJson";

axios.defaults.timeout = 300000;

const token =
  "UM_distinctid=1882eac40712a0-0760e5484573f1-1c525634-1fa400-1882eac4072a1a; CNZZDATA1280251002=429150966-1684407666-%7C1688111594; sourceType=WEB; SECKEY_ABVK=+mD1HisDJRmWvBAQwLZb5azdMoUM1e8B/LSS79aD+xc%3D; BMAP_SECKEY=dgGLi-jEjG6PmLRxNjgsmdRv_CEYFtCUpsq8Gc7AEeOCIqi8OhzQGf1gfEuerv670pk6ko4q9_H4rRG5_6g6Y9oSKPPO7UGSCMJh9R7w8GydLRvuN9zUC8Tg1DRtmwevJVw-7KO5O0V_6xVzVGRfDCD6b80-OiiSalzFzvKre8v-mCEDTUJjNY3ZD6My7I_o; x-token=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqd3QiLCJpYXQiOjE2OTMwNDk3MTQsInN1YiI6IntcImFsbG93ZWRNdWx0aXBsZUxvZ2luXCI6MCxcImxvZ2luVHlwZVwiOlwiU09VUkNFX1RZUEVfV0VCXCIsXCJtdWx0aXBsZUxvZ2luVW5pcVRhZ1wiOlwiV0VCXCIsXCJyZWFsUmVmcmVzaFRva2VuRXhwaXJlTWludXRlXCI6MzE2ODAsXCJyZWFsVG9rZW5FeHBpcmVNaW51dGVcIjoxMDU2MCxcInJlZnJlc2hUb2tlbkV4cGlyZUhvdXJzXCI6NTI4LFwidGVuYW50SWRcIjo3NjQwNjIyMjI1NzQ1MDI1NDYxLFwidG9rZW5FeHBpcmVIb3Vyc1wiOjE3NixcInVzZXJJZFwiOjc3NDA0NzY1NDkwMDc0OTM1ODF9IiwiaXNzIjoiNzc0MDQ3NjU0OTAwNzQ5MzU4MV83NjQwNjIyMjI1NzQ1MDI1NDYxX1dFQiIsImV4cCI6MTY5MzY4MzMxNH0.EbzYab20wLKsS0b4LeeKXVA7ZymdhS7lBl0oJtwnAjA; WQSESSIONID=942038444802A27684E8DAC54DB61DD7.10; login_tenant=7640622225745025461";

// // 设置默认请求头
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.common["Cookie"] = `token=${token}`;
const env = process.env.NODE_ENV;
if (env === "development") {
  axios.defaults.baseURL = "/api";
  axios.defaults.withCredentials = true;
}

const request = {
  postJson,
};

export default request;
