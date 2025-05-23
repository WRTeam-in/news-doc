/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "category",
      label: "News Admin Panel Setup",
      items: [
        "admin/installation",
        "admin/notification-management",
        "admin/system-configurations",
        "admin/location-wise-news",
        "admin/language",
        "admin/featured-section",
        "admin/privacy-policy",
        "admin/terms-conditions",
        "admin/other-pages",
        "admin/ad-spaces",
        "admin/manage-news-access",
        "admin/survey",
        "admin/staff-management",
        "admin/update-system",
      ],
    },
    {
      type: "category",
      label: "News Admin Panel Installation",
      items: [
        "installation/backup-project",
        "installation/backup-database",
        "installation/install-news-laravel",
      ],
    },
    {
      type: "category",
      label: "News App",
      items: [
        "app/setup",
        "app/app-name",
        "app/app-logo",
        "app/app-color",
        "app/package-name",
        "app/asset-image",
        "app/font",
        "app/server-url",
        "app/settings",
        "app/create-fcm",
        "app/email-fcm",
        "app/google-fcm",
        "app/fb-fcm",
        "app/phone-fcm",
        "app/apple-fcm",
        "app/fcm",
        "app/share-news",
        "app/admob",
        "app/fb-ad",
        "app/unity-ad",
        "app/ads-interval",
        "app/limit",
        "app/api",
        "app/change-lang",
        "app/apk",
        "app/app-bundle",
        "app/apk-ios",
        "app/playstore-datasafety",
        "app/debug",
        "app/ref",
      ],
    },
    {
      type: "category",
      label: "News Web",
      items: [
        "web/seo-difference",
        "web/video-guide",
        "web/setup",
        "web/domain-url",
        "web/integrate-firebase",
        "web/mobile-login",
        "web/rss-feed",
        "web/app-name",
        "web/change-meta-info",
        "web/favicon",
        "web/set-logo-theme-color",
        "web/set-social-media",
        "web/set-app-link-toggle-cookies-popup",
        "web/set-defaultImg",
        "web/toggle-maintenance-mode",
        "web/set-sitemap",
        "web/change-fonts",
        "web/add-google-adsense",
        "web/run-the-project",
        "web/local-build",
        "web/upload-htaccess",
        "web/seo-deploy",
        "web/nextjsdeploy",
        "web/htaccess-file-code-forSeo",
        "web/get-gemini-api-key",
      ],
    },
    "support",
    "faqs",
    "feedback",
    "contact",
  ],
};

module.exports = sidebars;
