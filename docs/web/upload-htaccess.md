---
sidebar_position: 11
---

# .htaccess file For Nginx Servers

If your server is running Nginx, copy the following code and paste it into your server's `nginx.conf` file's server block:

```nginx
# nginx configuration by winginx.com

autoindex off;

error_page 404 /404.html;

autoindex off;

location /_next {
  rewrite ^/_next/data/.+\.json$ /export-page-data.json;
}

location / {
  if (-e $request_filename){
    rewrite ^/(.+)/$ /$1 redirect;
  }
  if ($http_cookie ~ "(?:^|;\s*)lang=([a-z]{2}(?:-[A-Z]{2})?)(?:;|$)"){
    rewrite ^/$ /%1 redirect;
  }
  if ($http_cookie ~ "(?:^|;\s*)lang=([a-z]{2}(?:-[A-Z]{2})?)(?:;|$)"){
    rewrite ^/([^.]+)$ /%1/$1 redirect;
  }
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?categories-news/sub-category/[^/]+/[^/]+$" /[langCode]/categories-news/sub-category/[slug]/[subCateSlug].html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?categories-news/sub-category/[^/]+$" /[langCode]/categories-news/sub-category/[slug].html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?manage-news/create-news$" /[langCode]/manage-news/create-news.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?manage-news/edit-news$" /[langCode]/manage-news/edit-news.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?manage-podcast/create-episode$" /[langCode]/manage-podcast/create-episode.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?manage-podcast/create-podcast$" /[langCode]/manage-podcast/create-podcast.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?manage-podcast/edit-episode$" /[langCode]/manage-podcast/edit-episode.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?manage-podcast/edit-podcast$" /[langCode]/manage-podcast/edit-podcast.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?categories-news/[^/]+/[^/]+$" /[langCode]/categories-news/[slug]/[cateSlug].html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?podcast/[^/]+/[^/]+$" /[langCode]/podcast/[slug]/[episode].html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?author-details/[^/]+$" /[langCode]/author-details/[slug].html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?breaking-news/[^/]+$" /[langCode]/breaking-news/[slug].html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?categories-news/[^/]+$" /[langCode]/categories-news/[slug].html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?manage-podcast/[^/]+$" /[langCode]/manage-podcast/[slug].html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?more-pages/[^/]+$" /[langCode]/more-pages/[slug].html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?news/[^/]+$" /[langCode]/news/[slug].html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?podcast/[^/]+$" /[langCode]/podcast/[slug].html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?tag/[^/]+$" /[langCode]/tag/[slug].html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?video-news/[^/]+$" /[langCode]/video-news/[slug].html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?view-all/[^/]+$" /[langCode]/view-all/[slug].html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?alerts$" /[langCode]/alerts.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?bookmark$" /[langCode]/bookmark.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?breaking-news$" /[langCode]/breaking-news.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?category-preferences$" /[langCode]/category-preferences.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?enews$" /[langCode]/enews.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?live-news$" /[langCode]/live-news.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?manage-news$" /[langCode]/manage-news.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?manage-podcast$" /[langCode]/manage-podcast.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?newsbuzz$" /[langCode]/newsbuzz.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?notification-preferences$" /[langCode]/notification-preferences.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?podcast$" /[langCode]/podcast.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?profile-update$" /[langCode]/profile-update.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?rss-feed$" /[langCode]/rss-feed.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?/)?video-news$" /[langCode]/video-news.html;
  rewrite "^/(?:[a-z]{2}(?:-[A-Z]{2})?)?$" /[langCode].html;
}

location /en {
  rewrite ^/en(?:/(.*))?$ /$1 redirect;
}
```

Example configuration in Nginx:

![Nginx Configuration](/images/web/nginxConf_file.png)
