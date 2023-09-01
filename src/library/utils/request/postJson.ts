import axios, { AxiosResponse } from "axios";

interface Params {
  [key: string]: any;
}

const postJson = (url: string, params: Params = {}): Promise<AxiosResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, params, config);
};

export default postJson;
