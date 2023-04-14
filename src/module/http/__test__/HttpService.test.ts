import AxiosHttpHandler from "../implement/AxiosHttpHandler";
import { HttpService } from "../service/HttpService";

describe("HttpService", () => {
  const baseURL = "https://api.example.com";
  const domain = "jjan";
  const axiosHttpHandler = new AxiosHttpHandler(baseURL, domain);
  const httpService = new HttpService(axiosHttpHandler);

  test("GET request", async () => {
    const userId = "1";
    const response = await httpService.get(`/users/${userId}`);

    expect(response).toEqual({
      id: userId,
      name: "John Doe",
    });
  });
});
