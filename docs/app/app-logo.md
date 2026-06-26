---
sidebar_position: 3
---

# How to Change App Logo?

Replace the default app icon with your own branded logo for both Android and iOS builds.

Please visit our [Change App Logo Documentation](https://wrteam-in.github.io/common_app_doc/GeneralSettings/appicon) and follow **every step in the order shown**.

## What the Guide Covers

- Adding the `flutter_launcher_icons` package to `pubspec.yaml`
- Configuring the icon source path, Android / iOS flags, and alpha-channel handling
- Running `dart run flutter_launcher_icons` to generate all required sizes
- Manual replacement of Android `mipmap-*` and iOS `AppIcon.appiconset` files (if you prefer not to use the package)

:::tip
Make sure your logos are properly sized and formatted according to platform requirements. For iOS, Apple has strict requirements about logo dimensions and transparency.

For iOS App Store submission, the icon **must not contain an alpha channel** (no transparency). Use `remove_alpha_ios: true` in the package config, or flatten the image before manual replacement.
:::
