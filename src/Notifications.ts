import { NotificationID, NotificationOptions, NotificationType } from "./types";

/**
 * Notification module to create and update notifications.
 */
export const Notifications = {
  /**
   * Creates a new notification.
   * @param {NotificationOptions} options - The options for the notification.
   * @param {NotificationID} [requiredId] - The optional ID for the notification.
   * @param {(notification: NotificationType) => void} [callback] - The optional callback function to be executed after the notification is created.
   */
  create: (
    options: NotificationOptions,
    notificationId: NotificationID = crypto.randomUUID(),
    callback?: (notification: NotificationType) => void,
  ) => {
    chrome.notifications.create(notificationId, options, () => {
      callback?.({
        notificationId,
        ...options,
      });
    });
  },
};
