# chrome-notifications

[![npm version](https://badge.fury.io/js/chrome-notifications.svg)](https://badge.fury.io/js/chrome-notifications)
![build](https://github.com/ryohidaka/chrome-notifications/workflows/Build/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B6TVH92)

## Overview

Helper for `chrome.notifications` API.

## Notes

To use the `chrome.notifications` API, declare the `"notifications"` permission in the [manifest](https://developer.chrome.com/docs/extensions/reference/manifest):

```json
{
  "name": "My extension",

  "permissions": ["notifications"]
}
```

## Installation

You can install this library using npm:

```shell
npm install chrome-notifications
```

## Methods

### `create`

Creates and displays a notification.

```typescript
import { Notifications } from "chrome-notifications";

const options = {
  type: "basic",
  title: "My Notification",
  message: "This is a sample notification",
  iconUrl: "icon.png",
};

Notifications.create(options, "my-notification-id", (notification) => {
  console.log(notification);
});

// Output:
//   Object{
//     notificationId: "38fde96f-43b1-4736-969e-2da10417c024",
//     type: "basic",
//     title: "My Notification",
//     message: "This is a sample notification",
//     iconUrl: "icon.png"
//   }
```

### `update`

Updates an existing notification.

```typescript
import { Notifications } from "chrome-notifications";

const notificationId = "38fde96f-43b1-4736-969e-2da10417c024";
const newOptions = {
  title: "Updated Notification",
  message: "This is an updated notification",
};

Notifications.update(notificationId, newOptions, (notification) => {
  console.log(notification);
});

// Output:
//   Object{
//     notificationId: "38fde96f-43b1-4736-969e-2da10417c024",
//     type: "basic",
//     title: "Updated Notification",
//     message: "This is an updated notification",
//     iconUrl: "icon.png"
//   }
```

### `clear`

Clears the specified notification.

```typescript
import { Notifications } from "chrome-notifications";

const notificationId = "38fde96f-43b1-4736-969e-2da10417c024";

Notifications.clear(notificationId, (wasCleared) => {
  console.log(wasCleared);
});

// Output: true
```

### `getAll`

Retrieves all the notifications of this app or extension.

```typescript
import { Notifications } from "chrome-notifications";

Notifications.getAll().then((notifications) => {
  console.log(notifications);
});

// Output:
//   Array [
//     Object {
//       notificationId: "131aa054-c1b3-485b-a200-83bdcba8421c",
//       active: true
//     }
//   ]
```

### `getPermissionLevel`

Retrieves whether the user has enabled notifications from this app or extension.

```typescript
import { Notifications } from "chrome-notifications";

Notifications.getPermissionLevel().then((permissionLevel) => {
  console.log(permissionLevel);
});

// Output:
//   Object{
//     level: "granted",
//     isGranted: true,
//     isDenied: false
//   }
```

## Link

- [chrome.notifications](https://developer.chrome.com/docs/extensions/reference/api/notifications)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
