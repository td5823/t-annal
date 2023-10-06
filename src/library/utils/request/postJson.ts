import axios, { AxiosResponse } from "axios";

interface Params {
  [key: string]: any;
}

const postJson = async (url: string, params: Params = {}): Promise<any> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response: AxiosResponse = await axios.post(url, params, config);
  return response.data;
};

export default postJson;
