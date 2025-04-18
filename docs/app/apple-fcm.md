---
sidebar_position: 15
---

# Authenticate with Firebase Using Apple Login

To enable Apple Sign-In in your News App:

## Configure Firebase

1. Open your Firebase console
2. Go to Sign-in method in Authentication
3. Go to the Apple and enable Apple sign in

![Apple Authentication](/images/app/apple1.png)

## Configure iOS

1. In Xcode, select the Signing & Capabilities tab, and add "Sign In With Apple" as a new Capability then select a team on the Code Signing section

![Apple Capability](/images/app/apple2.png)

2. This will generate and configure an App ID in the "Certificates, Identifiers & Profiles" section of the Apple Developer portal

:::note
Apple Sign-In is only available on iOS devices and macOS computers. On Android devices, users won't see the Apple Sign-In option.
:::
