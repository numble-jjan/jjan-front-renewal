import type { RequestDomain, RequestSubConfigMap } from "../type";

export function getRequestHeader(
  requestHeaderMap: RequestSubConfigMap,
  domain: RequestDomain,
): Record<string, string> {
  return requestHeaderMap[domain] || {};
}
