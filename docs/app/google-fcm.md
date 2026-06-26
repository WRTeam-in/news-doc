---
sidebar_position: 12
---

# Authenticate with Firebase Using Google Sign-In

To enable Google Sign-In authentication in your News App, follow these steps:

1. Open your Firebase console.

2. Go to Authentication and select the Sign-in method tab.

3. Find the Google provider and enable it. This will automatically set up Google sign-in.

   ![Enable Google Auth](/images/app/google_fcm1.png)

   ![Google Auth Settings](/images/app/google_fcm2.png)

4. Download and install JDK x64 Installer from [Oracle's website](https://www.oracle.com/in/java/technologies/downloads/) and set JAVA_HOME by following [these instructions](https://www.baeldung.com/java-home-on-windows-7-8-10-mac-os-x-linux) if you haven't done so yet.

5. After that, Follow [🔒 Add SHA1 & SHA256 Keys in Firebase](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase/#-for-android)
 
With these settings in place, users will be able to sign into your News App using their Google accounts.
 
:::tip
Test Google Sign-In thoroughly on both Android and iOS platforms to ensure a smooth user experience.
:::
