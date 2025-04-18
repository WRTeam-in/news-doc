---
sidebar_position: 13
---

# Authenticate with Firebase Using Facebook Login

To enable Facebook Login in your News App:

## Create a Facebook App

1. First create project for your android application, go to [Facebook for Developers](https://developers.facebook.com/)
2. Go to Facebook Quick Start Integrate the Facebook SDK
3. On the [Facebook for Developers](https://developers.facebook.com/) site, get the **App ID** and an **App Secret** for your app

## Configure Firebase

1. In the [Firebase console](https://console.firebase.google.com/u/0/), open the **Auth** section
2. Enable Facebook Login
3. On the **Sign in method** tab, enable the **Facebook** sign-in method and specify the **App ID** and **App Secret** you got from Facebook

![Facebook Firebase Setup](/images/app/fb0.png)

4. Make sure your **OAuth redirect URI** (e.g. my-app-12345.firebaseapp.com/\_\_/auth/handler) is listed as one of your **OAuth redirect URIs** in your Facebook app's settings page on the Facebook for Developers site in the **Product Setting > Facebook Login** config

## Configure Android App

1. Add the dependencies for Firebase Authentication and Facebook Login SDK to your app-level build.gradle file:

![Facebook Gradle Setup](/images/app/fb1.png)

2. Create strings for your Facebook app ID and for those needed to enable Chrome Custom Tabs
3. Open `android > app > src > main > res > values > strings.xml` file:

![Facebook Strings](/images/app/fb3.png)

4. Open `android > app > src > main > AndroidManifest.xml` File
5. Add the following meta-data element and activity for Facebook:

![Facebook Manifest](/images/app/fb2.png)

## Generate Key Hash

1. We will use SHA-1 key to generate hashkey for Facebook login
2. You can generate hash online using [Key hash Generator](http://tomeko.net/online_tools/hex_to_base64.php)

![Hash Key 1](/images/app/hash_key1.png)
![Hash Key 2](/images/app/hash_key2.png)

## Configure iOS App

1. Create iOS application in Facebook Developer console:

![Facebook iOS Setup 1](/images/app/fb_ios1.png)

2. Add your iOS Bundle ID:

![Facebook iOS Setup 2](/images/app/fb_ios2.png)

3. Copy code shown and paste into Info.plist file:

![Facebook iOS Setup 3](/images/app/fb_ios3.png)
![Facebook iOS Setup 4](/images/app/fb_ios4.png)
