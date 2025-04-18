---
sidebar_position: 17
---

# How to set Deep Link to Share news?

Deep links allow users to share news articles and open them directly in the app.

1. Go to `lib > utils > Constant.dart` file & Add your host url here [Without http or https]

2. Go to `android > app > src > main > AndroidManifest.xml` file & add your host url here [Without http or https]

   - Alternatively you may search for **enter_your_website_url_here** and replace with your host

   ![Replace Web URL Android](/images/app/replaceWebURL-android.png)

3. Same way Set Associated domain in Signing & Capabilities section of Xcode project for iOS

   ![Replace Web URL iOS](/images/app/replaceWebURL-ios.png)

4. Download these Google files from the link: [Server Side Deeplink Files](https://drive.google.com/drive/folders/1LbSXPmTRvz6-VWdr4isJz9AE00p8ynJ6)

5. Open both files in any text editor and follow instructions given here:

   For Android:
   ![Deeplink Android](/images/app/deeplink-android.png)

   For iOS:
   ![Deeplink iOS](/images/app/deeplink-ios.png)

6. Save & Upload both files at Admin panel > System Setting > General Settings & Submit

   ![App Links File For Domain Verification](/images/app/appLinksFileForDomainVerification.png)
