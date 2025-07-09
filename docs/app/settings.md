---
sidebar_position: 9
---

# System Settings for Application

To configure system settings for your News App:

1. First login to your admin panel.

2. Navigate to Settings > System Setting > General Settings

3. Here you can configure various options for your app:

   - **Category Mode**: Enable and disable category display in the application
   - **Subcategory Mode**: Enable and disable subcategory display in the application
   - **Breaking News Mode**: Enable and disable breaking news display in the application
   - **Live Streaming News Mode**: Enable and disable live news display in the application
   - **Comments Mode**: Enable and disable comments functionality in the application

   ![Settings Page 1](/images/app/settings1.png)

   ![Settings Page 2](/images/app/settings2.png)

4. Additional configuration options:

   - **App Store App ID**: ID used when sharing app links
   - **Share App Text**: Text to be added when sharing news from the application
   - **Video Type Preference**: Admin controls video layout for App – Normal or Page / Reels Type

   ![Settings Page 3](/images/app/settings3.png)

These settings allow you to customize the behavior and features of your News App from a centralized admin panel.

## General Settings

1. Open the `lib/utils/Constant.dart` file

2. Modify the following settings as needed:

```dart
// App configuration
static const bool IS_THEME_MODE_CHANGEABLE = true; // Enable/disable theme switching
static const bool IS_RTL_ENABLED = false; // Enable for right-to-left languages
static const int DEFAULT_LANGUAGE_ID = 1; // Default language ID from backend

// Content loading
static const int LOAD_ITEM_LIMIT = 10; // Number of items to load at once
static const bool ENABLE_ADS = true; // Enable/disable advertisements
```

3. Save the file and restart the app for changes to take effect

## Admin Panel Settings

Some settings should be configured from the admin panel:

1. Login to your News Admin Panel
2. Navigate to System Settings
3. Configure various options like notifications, login methods, and feature toggles

:::tip
The combination of client-side settings in the code and server-side settings in the admin panel gives you complete control over the app behavior.
:::
