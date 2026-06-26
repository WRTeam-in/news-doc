---
sidebar_position: 7
---

# How to Change App Font?

To change the font used in your News App:

1. Go to the `assets > font` folder. Copy your custom font files here.

2. Now open `pubspec.yaml` and update the font section with your font name as shown below:

   ![Font Configuration](/images/app/font.png)

3. Go to `lib > core > theme > app_theme.dart` and change your font name in the theme file for both Light and Dark themes:

   ![Font Theme](/images/app/font-theme.png)

This will apply your custom fonts throughout the application.
