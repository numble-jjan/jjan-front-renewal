import { RequestSubConfigMap } from "../type";

export const requestHeaderMap: RequestSubConfigMap = {
  /**
   * @todo
   * replace "==exToken==" string to valid token
   */
  jjan: { Authorization: `Bearer ==exToken==` },
  kakao: { Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_TOKEN}` },
};
