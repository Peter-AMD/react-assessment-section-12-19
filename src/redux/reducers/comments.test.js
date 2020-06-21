import comments from "./comments";

describe("comments", () => {
  test("should FETCH COMMENTS", () => {
    const postComments = ["zawurdo", "hero"];
    const actual = comments([], {
      type: "FETCH_COMMENTS",
      payload: postComments,
    });
    expect(actual).toEqual(postComments);
  });
});
