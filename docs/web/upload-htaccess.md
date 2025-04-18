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
location /breaking {
  rewrite ^/breaking-news/([^/]+)$ /breaking-news/[slug].html break;
}

location /categories {
  rewrite ^/categories-news/([^/]+)$ /categories-news/[slug].html break;
}

location /tag {
  rewrite ^/tag/([^/]+)$ /tag/[slug].html break;
}

location /news {
  rewrite ^/news/([^/]+)$ /news/[slug].html break;
  rewrite ^/news-notification$ /news-notification.html break;
}

location /video {
  rewrite ^/video-news-view/([^/]+)$ /video-news-view/[slug].html break;
}

location /view {
  rewrite ^/view-all/([^/]+)$ /view-all/[slug].html break;
}

location /all {
  rewrite ^/all-breaking-news$ /all-breaking-news.html break;
  rewrite ^/all-categories$ /all-categories.html break;
}

location = /bookmark {
  rewrite ^(.*)$ /bookmark.html break;
}

location /create {
  rewrite ^/create-news$ /create-news.html break;
}

location /edit {
  rewrite ^/edit-news$ /edit-news.html break;
}

location = /index {
  rewrite ^(.*)$ /index.html break;
}

location /live {
  rewrite ^/live-news$ /live-news.html break;
}

location = /loading {
  rewrite ^(.*)$ /loading.html break;
}

location /manage {
  rewrite ^/manage-news$ /manage-news.html break;
}

location /more {
  rewrite ^/more-pages$ /more-pages.html break;
}

location /personal {
  rewrite ^/personal-notification$ /personal-notification.html break;
}

location /profile {
  rewrite ^/profile-update$ /profile-update.html break;
}

location /user {
  rewrite ^/user-based-categories$ /user-based-categories.html break;
}

location = /rss {
  rewrite ^(.*)$ /rss.html break;
}

location / {
  if (!-e $request_filename){
    rewrite ^(.*)$ /404.html break;
  }
}
```

Example configuration in Nginx:

![Nginx Configuration](/images/web/nginxConf_file.png)
