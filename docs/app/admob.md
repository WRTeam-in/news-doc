---
sidebar_position: 18
---

# Set up admob in App

1. In the [Admob console](https://apps.admob.com), click add Android app from the Apps menu

   ![AdMob Setup 1](/images/app/admob1.png)

2. Enter your app name and click on ADD APP button

   ![AdMob Setup 2](/images/app/admob2.png)

3. Create ad units

   ![AdMob Setup 4](/images/app/admob3.png)

4. Select Banner unit ad and enter banner unit ad name then click on Create ad Unit button

   ![AdMob Setup 5](/images/app/admob4.png)

   ![AdMob Setup 6](/images/app/admob5.png)

5. Then add another unit ad shown in below image and Same as above create Interstitial ads and native ads

   ![AdMob Setup 7](/images/app/admob6.png)

6. Also add Google AdMob ads appId as a value for **android:name="com.google.android.gms.ads.APPLICATION_ID"** in android/app/src/main/AndroidManifest.xml file

7. Add iOS App and add units in iOS app in same way

8. Also add Google AdMob ads appId as a value for **GADApplicationIdentifier** in ios/Runner/info.plist File

9. Add your ad unit id in admin panel Settings -> System Settings > App Settings

   ![AdMob Setup 8](/images/app/admob7.png)

10. Now Follow instructions from [AdMob](https://support.google.com/admob/answer/9363762?hl=en)

    ![AdMob Setup 9](/images/app/admob8.png)
