---
sidebar_position: 26
---

# How to Generate App Bundle?

To generate an App Bundle for publishing to the Google Play Store, follow these steps:

1. Before generating an App Bundle, change values at android > **key.properties** File according to your generated Release Key.

   If you haven't generated a key yet, create an upload keystore by following these commands at the command line / Terminal:

   - On Mac/Linux, use the following command:

     ```
     keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
     ```

   - On Windows, use the following command:

     ```
     keytool -genkey -v -keystore c:\Users\USER_NAME\upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload
     ```

2. And also change signingConfig from debug to release in android > app > build.gradle File as shown below:

   ![Signing Config](/images/app/signingConfig.png)

3. In your Android Studio, right click on your Android module of your Flutter project. There is option Flutter > open Android module in Android Studio.

4. If in your Android Studio, Flutter option is disabled, then go to file option in your Android Studio > open & locate your Flutter project's Android module and open it.

5. In Build menu there is option generate signed bundle/APK. Select "Android App Bundle" option.

   ![App Bundle Generation](/images/app/apk4.png)

6. For Further Help, Follow this [Link](https://developer.android.com/guide/app-bundle)
