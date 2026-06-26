---
sidebar_position: 5
---

# How to Change Package Name?

Changing the package name of your Flutter app is essential when you want to publish it with your own branding.

Update the default package name to your own unique identifier before publishing the app to the Play Store / App Store.

Please visit our [Change Package Name Documentation](https://wrteam-in.github.io/common_app_doc/GeneralSettings/packagename) for detailed instructions on changing the package name.

After changing the package name, you need to rerun the below commands to update the package references.
```
flutter clean
flutter pub get
```

:::caution
After changing the package name, you'll need to Re-check any references to the old package name in your code, particularly in AndroidManifest.xml and any plugins that might be using the package name.
:::
