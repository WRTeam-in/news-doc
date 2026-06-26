---
sidebar_position: 11
---

# Authenticate with Firebase Using Email and Password

To enable email and password authentication in your News App, follow these steps:

1. Open your Firebase console.

2. Navigate to Authentication and select the Sign-in method tab.

3. Find Email/Password authentication method and enable it. You should enable both "Allow users to sign in with their email and password" and "Email link (passwordless sign-in)" options.

   ![Enable Email Authentication](/images/app/email_fcm1.png)

   ![Email Authentication Settings](/images/app/email_fcm2.png)

   After pressing the save button, email authentication will be enabled in your app.

4. You can customize the sender name and subject for verify email and reset password messages:

   ![Email Sender Name](/images/app/email_fcm3.png)

   ![Email Templates](/images/app/email_fcm4.png)

With these settings in place, users will be able to register and log into your News App using their email and password.
 
:::tip
Always handle authentication errors properly and show appropriate error messages to users.
:::
