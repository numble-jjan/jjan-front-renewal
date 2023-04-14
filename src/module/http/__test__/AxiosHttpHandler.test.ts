import AxiosHttpHandler from "../implement/AxiosHttpHandler";

describe("AxiosHttpHandler", () => {
  const baseURL = "https://api.example.com";
  const domain = "jjan";
  const axiosHttpHandler = new AxiosHttpHandler(baseURL, domain);

  test("GET request", async () => {
    const userId = "1";
    const response = await axiosHttpHandler.get(`/users/${userId}`);

    expect(response).toEqual({
      id: userId,
      name: "John Doe",
    });
  });
});
