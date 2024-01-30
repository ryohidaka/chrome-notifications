/**
 * NotificationOptions is a type alias for the NotificationOptions object in the Chrome notifications API.
 * The generic parameter is set to true, indicating that the user must provide all properties when creating a notification.
 */
export type NotificationOptions =
  chrome.notifications.NotificationOptions<true>;

/**
 * NotificationID is a type alias for a string. It represents the unique identifier for a notification.
 */
export type NotificationID = string;

/**
 * NotificationType is an object type that represents a notification.
 * It includes the following properties:
 * - notificationId: a unique identifier for the notification
 * - type: the type of the notification (e.g., "basic", "image", "list", "progress")
 * - title: the title of the notification
 * - message: the main text body of the notification
 * - iconUrl: the URL of the icon to be displayed in the notification
 */
export type NotificationType = {
  notificationId: NotificationID;
  type: NotificationOptions["type"];
  title: NotificationOptions["title"];
  message: NotificationOptions["message"];
  iconUrl: NotificationOptions["iconUrl"];
};
