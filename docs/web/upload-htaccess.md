---
sidebar_position: 11
---

# Upload .htaccess file

After deploying your site with the [local build method](local-build), you need to upload a `.htaccess` file to your server.

:::warning Important
After Local Build and Deploy (WITHOUT SEO) you must upload the `.htaccess` file to your server. If you do not upload the `.htaccess` file, your web pages will not open as expected.

\*If you are unable to find the .htaccess file in your source code, please enable 'Show hidden files' in your file explorer - it will then be visible.
:::

## For Apache Servers

Upload the `.htaccess` file directly to your web server's root directory where you uploaded the site files.

## For Nginx Servers

If your server is running Nginx, copy the following code and paste it into your server's `nginx.conf` file's server block:

```nginx
# nginx configuration for News Web App
location / {
  rewrite ^/([^/]+)/breaking-news/([^/]+)$ /[langCode]/breaking-news/[slug].html break;
  rewrite ^/([^/]+)/categories-news/([^/]+)$ /[langCode]/categories-news/[slug].html break;
  rewrite ^/([^/]+)/tag/([^/]+)$ /[langCode]/tag/[slug].html break;
  rewrite ^/([^/]+)/news/([^/]+)$ /[langCode]/news/[slug].html break;
  rewrite ^/([^/]+)/video-news-view/([^/]+)$ /[langCode]/video-news-view/[slug].html break;
  rewrite ^/([^/]+)/view-all/([^/]+)$ /[langCode]/view-all/[slug].html break;
  rewrite ^/([^/]+)/all-breaking-news$ /[langCode]/all-breaking-news.html break;
  rewrite ^/([^/]+)/all-categories$ /[langCode]/all-categories.html break;
  rewrite ^/([^/]+)/bookmark$ /[langCode]/bookmark.html break;
  rewrite ^/([^/]+)/create-news$ /[langCode]/create-news.html break;
  rewrite ^/([^/]+)/edit-news$ /[langCode]/edit-news.html break;
  rewrite ^/([^/]+)/index$ /[langCode]/index.html break;
  rewrite ^/([^/]+)/live-news$ /[langCode]/live-news.html break;
  rewrite ^/([^/]+)/loading$ /[langCode]/loading.html break;
  rewrite ^/([^/]+)/manage-news$ /[langCode]/manage-news.html break;
  rewrite ^/([^/]+)/more-pages$ /[langCode]/more-pages.html break;
  rewrite ^/([^/]+)/news-notification$ /[langCode]/news-notification.html break;
  rewrite ^/([^/]+)/personal-notification$ /[langCode]/personal-notification.html break;
  rewrite ^/([^/]+)/profile-update$ /[langCode]/profile-update.html break;
  rewrite ^/([^/]+)/user-based-categories$ /[langCode]/user-based-categories.html break;
  rewrite ^/([^/]+)/rss$ /[langCode]/rss.html break;
  if (!-e $request_filename){
    rewrite ^(.*)$ /404.html break;
  }
}
```

Example configuration in Nginx:

![Nginx Configuration](/images/web/nginxConf_file.png)
