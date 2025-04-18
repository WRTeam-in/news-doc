---
sidebar_position: 8
---

# How to Change Server URL

To change the server URL in your News App:

1. Go to `lib > utils > constant.dart`. Here you need to change your admin panel URL (baseUrl).

   ![Server URL](/images/app/serverurl.png)

2. Make sure the URL is correctly formatted and includes the protocol (http:// or https://).

3. After changing the URL, rebuild your app to ensure the changes take effect.

This will update the API endpoint used by your app to fetch data from your admin panel.

:::caution
After changing the server URL, make sure to test all network-dependent features of the app to ensure proper connectivity.
:::
