---
sidebar_position: 2
---

# How to Change App Name?

To change the name of your News App, you need to update it in multiple places:

## 1. Update in Constant.dart

Open `lib > utils > Constant.dart` and change the app name string as shown below:

![App Name](/images/app/appname.png)

## 2. Update in Android Manifest

For Android, to change the label that appears below the app icon, open:

```
android > app > src > main > AndroidManifest.xml
```

Inside the manifest file, change the label string as shown below:

![Android App Name](/images/app/appname1.png)

## 3. Update in iOS Info.plist

For iOS, to change the label shown below the app icon, open:

```
ios > Runner > Info.plist
```

Inside this file, modify both the `CFBundleDisplayName` and `CFBundleName` values:

![iOS App Name](/images/app/appname2.png)

These changes will ensure your app shows the correct name on all platforms.
