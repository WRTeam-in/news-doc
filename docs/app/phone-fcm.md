---
sidebar_position: 14
---

# Authenticate with Firebase Using Phone(OTP)

To enable phone authentication (OTP) in your News App:

## Enable in Admin Panel

1. Enable Mobile Login from Admin panel > System Setting > General Settings & Set Country code there.

![Mobile Sign In & Country Code](/images/app/mobileSignIn&CountryCode.png)

## Configure Firebase

1. **NOTE:** You need to enable Blaze Plan From Firebase for this - Refer this [video](https://youtu.be/RuJuBCYjmhc?si=ViacX7vz9ZQH3LOi)
2. Open your Firebase console
3. Go to Authentication and open Sign-in method
4. Enable Phone Sign-in method and save

![Phone Authentication](/images/app/phone.png)

## Common Issues

If you're facing issues with Phone Authentication, you may:

- Disable it from Flutter code > lib > utils > constant.dart file by setting `bool mobilelogInEnabled` to `false`
- Or enable Firebase Blaze plan from [Firebase console](https://console.firebase.google.com) and check other information from [here](https://firebase.google.com/docs/auth/limits?authuser=0#phone-auth)
