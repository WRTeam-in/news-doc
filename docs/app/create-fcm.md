---
sidebar_position: 10
---

# How to Create Firebase Project for Android and iOS

To set up Firebase for your News App, follow these steps:

## Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/) and click on "Add project".

2. Enter your project details, provide your project name, and then press Continue. Select your preferred analytics options and continue.

   ![Create Firebase Project](/images/app/create1.png)

   ![Project Setup](/images/app/create11.png)

   ![Analytics Options](/images/app/create12.png)

3. After completing these steps, your project will be created.

   ![Project Created](/images/app/create2.png)

## Configure Android App

1. In your Firebase project dashboard, click on the Android icon to add an Android app.

   ![Add Android App](/images/app/create3.png)

2. Enter your Package Name and App Name, then click "Register app".

   ![Register Android App](/images/app/create4.png)

3. Download the google-services.json file and add it to the android > app folder of your Flutter project.

   ![Download Configuration File](/images/app/create7.png)

   ![Add Configuration File](/images/app/create8.png)

4. Follow the next steps in Firebase and finally click "Continue to the console".

## Configure iOS App

1. Return to your Firebase project and click on "Add app", then select the iOS icon.

   ![Add iOS App](/images/app/create9.png)

   ![iOS Icon](/images/app/create10.png)

2. Similar to Android, enter your iOS app details. Download the GoogleService-Info.plist file when prompted.

   ![iOS App Details](/images/app/create111.png)

   ![Download iOS Config](/images/app/create112.png)

3. Add the GoogleService-Info.plist file to the ios > Runner folder in your Flutter project.

   ![Add iOS Config](/images/app/create113.png)

4. Complete the remaining steps in Firebase to finish setting up your iOS app.

With these steps, your Firebase project is now set up for both Android and iOS versions of your News App.

## Update Dependencies

Make sure your app has the necessary Firebase dependencies in `pubspec.yaml`:

```yaml
dependencies:
  firebase_core: ^latest_version
  firebase_auth: ^latest_version
  firebase_messaging: ^latest_version
  # Other Firebase packages as needed
```

Run `flutter pub get` to install these dependencies.
