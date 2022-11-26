import hslParser from "./hslParser";

describe("test hslParser", () => {
  it("test parser cooficient", () => {
    expect(hslParser("hsl(0, 100%, 100%)")).toBe(100);
    expect(hslParser("hsl(0, 100%, 0%)")).toBe(0);
    expect(hslParser("hsl(0, 100%, 50%)")).toBe(50);
  });
  it("validate value", () => {
    expect(hslParser("test")).toBeNull();
    expect(hslParser("hsl()")).toBeNull();
    expect(hslParser("hsl(100%, 100%)")).toBeNull();
    expect(hslParser("hsl(0, 100%, 200%)")).toBeNull();
    expect(hslParser("hsl(0, 100%, -1%)")).toBeNull();
  });
});
