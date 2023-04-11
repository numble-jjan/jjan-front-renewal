import HttpHandler from "../interface/HttpHandler";
import type { RequestConfig } from "../type";

export class HttpService {
  private httpHandler: HttpHandler;

  constructor(httpHandler: HttpHandler) {
    this.httpHandler = httpHandler;
  }

  public async get<T>(url: string, config?: RequestConfig): Promise<T> {
    return await this.httpHandler.get<T>(url, config);
  }

  public async post<T, D = object>(
    url: string,
    data?: D,
    config?: RequestConfig,
  ): Promise<T> {
    return await this.httpHandler.post<T, D>(url, data, config);
  }

  public async put<T, D = object>(
    url: string,
    data?: D,
    config?: RequestConfig,
  ): Promise<T> {
    return await this.httpHandler.put<T, D>(url, data, config);
  }

  public async delete<T>(url: string, config?: RequestConfig): Promise<T> {
    return await this.httpHandler.delete<T>(url, config);
  }
}
