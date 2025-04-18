---
sidebar_position: 5
---

# How to Change Package Name?

Changing the package name of your Flutter app is essential when you want to publish it with your own branding. Follow these steps:

## Android Package Name Change

1. In Android Studio, click on the little gear icon in the Android pane. Go to "Tree Appearance" and then uncheck/deselect the "Compact Middle Packages" option.

   ![Package Name Step 1](/images/app/packagename_1.png)

2. Your package directory will now be broken up into individual directories.

   ![Package Name Step 2](/images/app/packagename_2.png)

3. Individually select each directory you want to rename:

   - Right-click on it
   - Select "Refactor"
   - Click on "Rename current"
   - In the pop-up dialog, enter the new name

   ![Package Name Step 3](/images/app/packagename_3.png)

4. Enter the new name and hit "Refactor". Allow a minute to let Android Studio update all changes.

   ![Package Name Step 4](/images/app/packagename_4.png)

5. Now search and replace `YOUR_PACKAGE_NAME_HERE` with your new package name in all files.

   ![Package Name Search](/images/app/YOUR_PACKAGE_NAME_HERE.png)

## iOS Bundle Identifier Change

For iOS, you need to update the Bundle Identifier in Xcode:

1. Open your Flutter project's iOS module in Xcode
2. Select the Runner project in the Project Navigator
3. Select the Runner target
4. In the General tab, update the Bundle Identifier field with your new package name

Make sure the Bundle Identifier matches the one you've registered in your Apple Developer account if you're planning to publish to the App Store.

:::caution
After changing the package name, you'll need to update any references to the old package name in your code, particularly in AndroidManifest.xml and any plugins that might be using the package name.
:::
