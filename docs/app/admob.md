---
sidebar_position: 18
---

# Set up admob in App

Please visit our [Admob Ads Settings Documentation](https://wrteam-in.github.io/common_app_doc/GeneralSettings/advertisement/google-admob) and follow every step in the order shown.


## What the Guide Covers

- **Admin Panel Settings > System Setting > App Settings** — Adding Google Rewarded Video Id, Google Interstitial Id, Google Banner Id, Google Native Unit Id & Google App Open Unit Id there for Android & iOS App. along with app-ads.txt File for verification.

![AdMob Setup 8](/images/app/admob7.png)

- **Android App Settings** — add Google AdMob ads appId as a value for **android:name="com.google.android.gms.ads.APPLICATION_ID"** in android/app/src/main/AndroidManifest.xml file.
- **iOS App Settings** — add Google AdMob ads appId as a value for **GADApplicationIdentifier** in ios/Runner/info.plist File.
