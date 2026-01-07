---
sidebar_position: 1
---

# How to setup Flutter

import DocBanner from '@site/src/components/doc-banner/DocBanner';

<DocBanner />

##

Explore the official Flutter website at [https://docs.flutter.dev/get-started/install](https://docs.flutter.dev/get-started/install) for a complete installation guide for your platform.

Prefer video tutorials? Check out this [Playlist](https://youtu.be/I9ceqw5Ny-4?list=PLSzsOkUDsvdtl3Pw48-R8lcK2oYkk40cm)

## Setting up Flutter Development Environment

1. Install Flutter SDK
2. Set up an editor (Android Studio or Visual Studio Code)
3. Setup device (emulator or physical device)
4. Verify installation by running `flutter doctor` in terminal

## Project Setup

1. Clone the News App repository
2. Run `flutter pub get` to download dependencies
3. Connect a device or start an emulator
4. Run the app with `flutter run`

## System Requirements

- **Operating System**: Windows, macOS, or Linux
- **Disk Space**: At least 2.5 GB free space
- **Tools**: Git

## Flutter SDK Installation

1. Download the Flutter SDK from [flutter.dev](https://flutter.dev/docs/get-started/install)
2. Extract the downloaded file to your desired location
3. Add Flutter to your PATH

### For macOS/Linux:

```bash
export PATH="$PATH:[PATH_TO_FLUTTER_DIRECTORY]/flutter/bin"
```

### For Windows:

Add `[PATH_TO_FLUTTER_DIRECTORY]\flutter\bin` to your PATH environment variable.

4. Run `flutter doctor` to check if there are any dependencies you need to install

## Project Setup

1. Clone the News App repository:

```bash
git clone https://github.com/example/news-app.git
```

2. Navigate to the project directory:

```bash
cd news-app
```

3. Get the dependencies:

```bash
flutter pub get
```

4. Update the configuration files as needed (details in other sections)

5. Run the app:

```bash
flutter run
```

## Next Steps

After setting up Flutter, you may want to:

- [Change the app name](app-name)
- [Customize the app logo](app-logo)
- [Configure server URL](server-url)
