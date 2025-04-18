---
sidebar_position: 16
---

# How to Integrate Firebase Cloud Messaging in App?

Firebase Cloud Messaging (FCM) allows you to send push notifications to your app users.

## Integrating Firebase Cloud Messaging

1. For Firebase Cloud Messaging Notification, first you have to register your application with Firebase
2. [Create Firebase Project for Application](#create-fcm). If you already created firebase project then you don't have to do that again.
3. Firebase dependency, service class and all necessary class are already included in project
4. You don't have to do extra code here
5. Just download **Google-service.json** and replace with existing File

## For iOS Push Notifications

### Key-based approach (.p8)

1. Log in to the Apple Developer Portal
2. Navigate to Certificates, IDs & Profiles > Keys
3. Click the "+" button to add a new key
4. Enter a name for the key and check the APNs checkbox
5. Click Continue, then Download. Note that the key can only be downloaded once
6. Then go to Firebase and add this .p8 file along with Your Key ID and Team ID

![iOS Push Setup](/images/app/6.png)

### Certificate-based approach (.p12)

1. Log in to the Apple Developer Portal
2. Navigate to Certificates, IDs & Profiles > Identifiers > App IDs and click the App ID associated with your app
3. On the screen for your App ID, check Capabilities > Push Notifications
4. Click Save and respond to the Modify App Capabilities dialog box that appears
5. To create the certificate, we will use to communicate with Apple when sending push notifications
6. In a new browser tab, follow Apple's [Create a certificate signing request instructions](https://help.apple.com/developer-account/#/devbfa00fef7)
7. In the Apple Developer Portal, navigate back to your App ID
8. Click Capabilities > Push Notifications > Configure
9. Accept the default .p12 file format and click Save. Respond to the prompts, and enter a password for the file if necessary
10. Keep track of this file, since you'll upload it to firebase in a later step

![iOS Push Certificate 1](/images/app/7.png)
![iOS Push Certificate 2](/images/app/8.png)
