import axios from "axios";
import Users from "./users";

jest.mock("axios");

test("should fetch users", () => {
  const users = [{ name: "Bob" }];
  const response = { data: users };
  axios.get.mockResolvedValue(response);

  // or axios.get.mockImplementation(() => Promise.resolve(resp));

  return Users.all().then((data) => expect(data).toEqual(users));
});
