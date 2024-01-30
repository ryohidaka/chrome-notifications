import {
  NotificationID,
  NotificationListItem,
  NotificationOptions,
  NotificationType,
} from "./types";

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

  /**
   * Updates an existing notification.
   *
   * @param {NotificationID} notificationId - The ID of the notification to be updated.
   * @param {NotificationOptions} options - The new options for the notification.
   * @param {function} [callback] - Optional. A callback function that will be called with the updated notification.
   *
   * @returns {void}
   */
  update: (
    notificationId: NotificationID,
    options: NotificationOptions,

    callback?: (notification: NotificationType) => void,
  ) => {
    chrome.notifications.update(notificationId, options, () => {
      callback?.({
        notificationId,
        ...options,
      });
    });
  },

  /**
   * Clears an existing notification.
   *
   * @param {NotificationID} notificationId - The ID of the notification to be cleared.
   * @param {function} [callback] - Optional. A callback function that will be called with a boolean indicating whether the notification was cleared.
   *
   * @returns {void}
   */
  clear: (
    notificationId: NotificationID,
    callback?: (wasCleared: boolean) => void,
  ) => {
    chrome.notifications.clear(notificationId, callback);
  },

  /**
   * Retrieves all notifications.
   * @returns {Promise<NotificationListItem[]>} A promise that resolves to an array of notification objects.
   * Each object contains the notificationId and its active flag.
   */
  getAll: async (): Promise<NotificationListItem[]> => {
    return new Promise((resolve) =>
      chrome.notifications.getAll((notifications) =>
        resolve(
          Object.entries(notifications).map(([notificationId, active]) => ({
            notificationId,
            active,
          })),
        ),
      ),
    );
  },
};
