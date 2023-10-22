import axios from "axios";
export const postForm = () => {
  axios
    .post("/user", {
      firstName: "Fred",
      lastName: "Flintstone",
    })
    .then(function (response) {})
    .catch(function (error) {});
};

export const postJson = (props: any) => {
  const { url = "", params = {} } = props;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios.post(url, params, config);
};
