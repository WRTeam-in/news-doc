---
sidebar_position: 17
---

# How to set Deep Link to Share news?

Deep links allow users to share news articles and open them directly in the app.
 
Follow Our [Deeplink Documentation](https://wrteam-in.github.io/common_app_doc/GeneralSettings/deeplink/app-deeplink) for deeplink integration in App.

# What the Guide Covers

- **Android Setup** — Adding domain in `lib > core> configs > app_config.dart` file [Without http:// or https://]
- **Android Setup** — Go to `android > app > src > main > AndroidManifest.xml` file & add your host url here [Without http:// or https://]

   - Alternatively you may search for **enter_your_website_url_here** and replace with your host

   ![Replace Web URL Android](/images/app/replaceWebURL-android.png)

- **iOS Setup** — Set Associated domain in Signing & Capabilities section of Xcode project.

# For Admin panel. 

- **Admin Panel > System Setting > General Settings** — Adding Android & iOS app Links there. 

 ![General Settings](/images/app/generalSettings.png)
 
- **Admin Panel > System Setting > App Settings** — Add Share App Text there. 
 
  ![app Settings](/images/app/appsettings.png)