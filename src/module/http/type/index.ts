type RequestSubConfigMap = Record<RequestDomain, Record<string, string>>;
type RequestConfig = {
  params?: object;
  headers?: object;
};
type RequestDomain = "jjan" | "kakao";
type HttpMethod = "get" | "post" | "delete" | "put" | "patch";

export type { RequestConfig, RequestSubConfigMap, RequestDomain, HttpMethod };
