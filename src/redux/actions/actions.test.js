import jsonPlaceholder from "../../apis/jsonplaceholder";
import { fetchMembers } from "./";

jest.mock("../../apis/jsonplaceholder");

describe("fetchMembers", () => {
  let dispatch;
  const data = { message: "ok" };
  beforeEach(() => {
    dispatch = jest.fn();
    jsonPlaceholder.get.mockImplementation(() => Promise.resolve({ data }));
  });

  test(`should call API and dispatch 'FETCH_MEMBERS'`, async () => {
    await fetchMembers()(dispatch);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(jsonPlaceholder.get).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      type: "FETCH_MEMBERS",
      payload: data,
    });
  });
});
