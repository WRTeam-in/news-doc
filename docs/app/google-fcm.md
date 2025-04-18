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

5. In Android Studio, right-click on the android folder, then right-click on gradlew and select "Open In > Terminal" as shown below:

   ![Open Terminal](/images/app/sha1.png)

6. In the terminal, enter the command to generate a debug SHA1 key. Copy this key and add it to your Firebase console.

   ![SHA1 Command](/images/app/sha2.png)

   ![Add SHA1 to Firebase](/images/app/google_fcm3.png)

7. Press the save button to enable Google authentication in your app.

With these settings in place, users will be able to sign into your News App using their Google accounts.

## Configure Android

1. Update your `android/app/build.gradle` file to include Google Sign-In dependencies:

```gradle
dependencies {
    implementation 'com.google.android.gms:play-services-auth:20.3.0'
    // Other dependencies
}
```

2. Make sure your SHA-1 fingerprint is registered in the Firebase project settings

## Configure iOS

1. Open your iOS project in Xcode
2. Update the `Info.plist` file to include necessary URL schemes for Google Sign-In
3. Configure the `GoogleService-Info.plist` file

## Add Package Dependencies

1. Add the required packages to your `pubspec.yaml` file:

```yaml
dependencies:
  firebase_auth: ^latest_version
  google_sign_in: ^latest_version
```

2. Run `flutter pub get` to install these dependencies

## Implementation Example

Here's a simple example of how to implement Google Sign-In:

```dart
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';

Future<UserCredential> signInWithGoogle() async {
  // Trigger the authentication flow
  final GoogleSignInAccount? googleUser = await GoogleSignIn().signIn();

  // Obtain the auth details from the request
  final GoogleSignInAuthentication? googleAuth = await googleUser?.authentication;

  // Create a new credential
  final credential = GoogleAuthProvider.credential(
    accessToken: googleAuth?.accessToken,
    idToken: googleAuth?.idToken,
  );

  // Once signed in, return the UserCredential
  return await FirebaseAuth.instance.signInWithCredential(credential);
}
```

:::tip
Test Google Sign-In thoroughly on both Android and iOS platforms to ensure a smooth user experience.
:::
