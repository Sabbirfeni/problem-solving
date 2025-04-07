import { expect } from "chai";
import { twoAdds } from "../problems/closures.js";

describe("twoAdds", () => {
  it("should return 7 when called with 3 and 4", () => {
    expect(twoAdds(3)(4)).to.equal(7);
  });
});
