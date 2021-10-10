import Amplify, { API } from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

const apiName = "SNAPI";
const path = "/notes";

export const getOnDate = (dt) => {
  const init = {
    queryStringParameters: {
      date: dt,
    },
  };
  return API.get(apiName, path, init);
};

export const putNewSticker = (sticker) => {
  const init = {
    body: sticker,
  };

  return API.put(apiName, path, init);
};

export const deleteSticker = (stickerId) => {
  const init = {
    body: { id: stickerId },
  };

  return API.del(apiName, path, init);
};
