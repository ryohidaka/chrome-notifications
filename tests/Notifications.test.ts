import { Notifications } from "../src/Notifications";
import { NotificationOptions } from "../src/types";

jest.mock("chrome", () => ({
  notifications: {
    create: jest.fn(),
    update: jest.fn(),
    clear: jest.fn(),
    getAll: jest.fn().mockImplementation(() => Promise.resolve()),
    getPermissionLevel: jest.fn().mockImplementation(() => Promise.resolve()),
  },
}));

describe("Notifications", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  let mockNotificationId = "1234";
  let mockOptions: NotificationOptions = {
    type: "basic",
    title: "Test Notification",
    message: "This is a test notification",
    iconUrl: "icon.png",
  };

  it("should create a notification", () => {
    const callback = jest.fn();
    Notifications.create(mockOptions, mockNotificationId, callback);

    expect(chrome.notifications.create).toHaveBeenCalledWith(
      mockNotificationId,
      mockOptions,
      expect.any(Function),
    );
  });

  it("should update a notification", () => {
    const callback = jest.fn();
    Notifications.update(mockNotificationId, mockOptions, callback);

    expect(chrome.notifications.update).toHaveBeenCalledWith(
      mockNotificationId,
      mockOptions,
      expect.any(Function),
    );
  });

  it("should clear a notification", () => {
    const callback = jest.fn();
    Notifications.clear(mockNotificationId, callback);

    expect(chrome.notifications.clear).toHaveBeenCalledWith(
      mockNotificationId,
      callback,
    );
  });
});
