---
sidebar_position: 6
---

# FAQs

## General Questions

<details>
<summary><b>What is the News App?</b></summary>

The News App is a comprehensive solution for news content management, delivery, and consumption across mobile and web platforms.

</details>

<details>
<summary><b>What platforms are supported?</b></summary>

The News App supports Android, iOS, and web platforms.

</details>

## Technical Questions

<details>
<summary><b>What technologies are used?</b></summary>

- Admin Panel: Laravel, PHP, MySQL
- Mobile App: Flutter
- Web: React.js
</details>

<details>
<summary><b>Can I extend the functionality?</b></summary>

Yes, the News App is designed to be extendable and customizable.

</details>

<details>
<summary><b>What are the server requirements for the Admin Panel?</b></summary>

PHP Version >= 8.2 is required.

</details>

<details>
<summary><b>How do I enable Push Notifications?</b></summary>

You need to set up Firebase for your project and configure the credentials in the Admin Panel under System Settings > Firebase Configurations.

</details>

<details>
<summary><b>Is location-based news supported?</b></summary>

Yes, you can enable location settings in the app and set a radius (in KM) to show news relevant to users' locations.

</details>

<details>
<summary><b>Can I have multiple languages in my app?</b></summary>

Yes, you can add multiple languages through the Admin Panel with flags, display names, and language JSON files.

</details>

<details>
<summary><b>Why is my footer description not changing as per the language change?</b></summary>

This issue occurs because the Gemini API key has not been added. The footer description changes according to the selected language using Gemini. Please add your Gemini API key first and then check again.

</details>
<details>
<summary><b>I filled in the database details correctly, but I can’t move to the next Installation step. What should I do?</b></summary>

If your host, database port, database name, username, password, and prefix are correct but the installer doesn’t proceed, make sure the PHP extension nd_pdo_mysql is enabled for the PHP version running your Admin Panel.
</details>
<details>
<summary><b>I’m using cPanel. How can I enable nd_pdo_mysql there?</b></summary>

1. Login to cPanel.

2. Go to Select PHP Version / PHP Extensions.

3. Select Your PHP Version & Enable nd_pdo_mysql by ticking the checkbox.

4. Save and restart.
</details>
