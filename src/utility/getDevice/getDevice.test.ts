import getDevice from "./getDevice";

describe("Chek Device", () => {
  it("device definition", () => {
    const result = getDevice(navigator);
    const device = navigator.userAgent;

    expect(device.match(/Mozilla|Chrome|Safari|Windows|win32/) && "PC").toBe(
      result
    );
  });
  it("device mobile", () => {
    const mockNavigator: Pick<Navigator, "userAgent"> = {
      userAgent: "android",
    };
    const result = getDevice(mockNavigator as Navigator);
    expect(result).toBe("Mobile");
  });
});
