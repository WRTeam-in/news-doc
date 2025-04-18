---
sidebar_position: 27
---

# Debugging and Common Errors

## Common Errors and Solutions

### 1. Error: `Launching lib/main.dart on sdk gphone x86 in debug mode...`

**Solution:**

1. Go to lib → utils → api.dart and make sure your server base URL is correct.
2. Go to lib → firebase_option.dart and make sure all firebase configurations are set up correctly.
3. Make sure that your AVD (Android Virtual Device) is correctly configured and working properly.

### 2. Error: `MissingPluginException(No implementation found for method getAll on channel)`

**Solution:**

1. Go to the location where the flutter project exists and use the terminal for the below commands:
   ```
   flutter clean
   flutter pub get
   ```
2. Check build.gradle if Google Services plugin is added.
3. Restart the Android Studio and rebuild the project.

### 3. Error: `RPC Error: Invalid argument(s)`

**Solution:**

1. Go to Android Studio Settings → Preferences → Tools → Flutter and Uncheck "Format code on save" option.
2. Completely delete your project from Android Studio and reopen it.
3. Restart your computer and check internet connection.

### 4. Error: Firebase `connectionFailed` Error

**Solution:**

1. Ensure the JSON file for Firebase configuration has been placed correctly.
2. Check that your app has internet permission in AndroidManifest.xml.
3. Verify all Firebase-related dependencies are correctly included in pubspec.yaml.
4. Make sure your Google-services.json file has the correct SHA-1 key.

### 5. Error: App crashes when sending notifications

**Solution:**

1. Check that the FCM token is being generated and stored correctly.
2. Verify that the notification channels are set up correctly.
3. Ensure proper permissions are set in AndroidManifest.xml.

### 6. Error: Image assets not showing up

**Solution:**

1. Make sure the paths to image assets in the pubspec.yaml file are correct.
2. Run `flutter clean` followed by `flutter pub get`.
3. Verify that the images are in the correct format and not corrupted.

## Performance Tips

1. **Memory Usage**: Monitor memory usage with the Flutter DevTools.

2. **Render Performance**: Use the Timeline view in DevTools to identify expensive build operations.

3. **Widgets Optimization**:

   - Use const constructors where possible
   - Implement the `shouldRepaint` method in custom painters
   - Use RepaintBoundary to isolate repaints

4. **Network Requests**:
   - Cache responses when appropriate
   - Implement pagination for large data sets
   - Use proper error handling for network failures
