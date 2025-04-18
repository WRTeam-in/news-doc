---
sidebar_position: 11
---

# Authenticate with Firebase Using Email and Password

To enable email and password authentication in your News App, follow these steps:

1. Open your Firebase console.

2. Navigate to Authentication and select the Sign-in method tab.

3. Find Email/Password authentication method and enable it. You should enable both "Allow users to sign in with their email and password" and "Email link (passwordless sign-in)" options.

   ![Enable Email Authentication](/images/app/email_fcm1.png)

   ![Email Authentication Settings](/images/app/email_fcm2.png)

   After pressing the save button, email authentication will be enabled in your app.

4. You can customize the sender name and subject for verify email and reset password messages:

   ![Email Sender Name](/images/app/email_fcm3.png)

   ![Email Templates](/images/app/email_fcm4.png)

With these settings in place, users will be able to register and log into your News App using their email and password.

## Configure Your App

1. Make sure you have added the Firebase Auth dependency in `pubspec.yaml`:

```yaml
dependencies:
  firebase_auth: ^latest_version
```

2. Run `flutter pub get` to install the dependency

3. Initialize Firebase in your app:

```dart
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MyApp());
}
```

## Implementation Example

Here's a simple example of how to implement email/password authentication in your app:

```dart
// Sign up a new user
Future<UserCredential> signUp(String email, String password) async {
  try {
    return await FirebaseAuth.instance.createUserWithEmailAndPassword(
      email: email,
      password: password,
    );
  } catch (e) {
    print('Error during sign up: $e');
    rethrow;
  }
}

// Sign in an existing user
Future<UserCredential> signIn(String email, String password) async {
  try {
    return await FirebaseAuth.instance.signInWithEmailAndPassword(
      email: email,
      password: password,
    );
  } catch (e) {
    print('Error during sign in: $e');
    rethrow;
  }
}
```

:::tip
Always handle authentication errors properly and show appropriate error messages to users.
:::
