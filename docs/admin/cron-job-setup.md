---
sidebar_position: 17
---

# Cron Job Setup

> **Version Requirement**: Cron job setup is only required for version 3.2.7 and above.

This guide explains how to set up cron jobs on your server to automate scheduled tasks for your News application.

## What Does This Cron Job Do?

The cron job is essential for:
- **RSS Feed Crawling**: Automatically crawls configured RSS feed sources
- **News Fetching**: Fetches the latest news articles from RSS feeds
- **Content Management**: Maintains fresh content by regularly updating news
- **Auto Cleanup**: Automatically deletes news articles older than one month to keep the database optimized

## Steps to Add Cron Job

### 1. Access Your Server

Access your server via SSH or through your Server Panel's Cron Jobs section.

### 2. Add Cron Job Command

Choose one of the following methods based on your server configuration.  
**Schedule frequency**: Set the cron to run every minute using `* * * * *`.

#### Method 1: Using WGET (Recommended)

```bash
wget -O /dev/null https://your-domain.com/schedule-run
```

> **Example:**
> ```bash
> wget -O /dev/null https://news-admin.wrteam.me/schedule-run
> ```

#### Method 2: Using CURL (If WGET is not available)

```bash
curl -s "https://your-domain.com/schedule-run" > /dev/null 2>&1
```
> **Example:**
> ```bash
> curl -s "https://news-admin.wrteam.me/schedule-run" > /dev/null 2>&1
> ```


#### Method 3: Using PHP Command (If URL scheduler is not working)

```bash
cd /path/to/your/project && php artisan schedule:run
```

> **Example:**
> ```bash
> cd /home/u863526903/domains/wrteam.me/public_html/news && php artisan schedule:run
> ```

---

## Important Configuration Notes

- **Check URL**: Make sure `https://your-domain.com` is correct and replace it with your actual domain.
- **Project Path**: Replace `/path/to/your/project` with your actual project path if using the PHP command method.
- **Server Configuration**: You may need to adjust the cron job command based on your server configuration.

---

## Understanding the Cron Job

### Cron Schedule Format

`* * * * *` runs the cron job at the start of every minute. Here is what each field means:

| Field        | Allowed Values          |
|--------------|-------------------------|
| Minute       | 0–59                    |
| Hour         | 0–23                    |
| Day of Month | 1–31                    |
| Month        | 1–12                    |
| Day of Week  | 0–7 (0 and 7 = Sunday)  |

### Command Explanations

- **wget / curl**: Command-line tools for transferring data with URLs.
- **`-O /dev/null`** / **`> /dev/null 2>&1`**: Discards the output and suppresses error messages.
- **Purpose**: This cron job runs every minute to process scheduled tasks in the application.

### Method Selection Guide

- **URL-based methods (wget/curl)**: Use these if your server supports external HTTP requests.
- **PHP command method**: Use this as a fallback if URL-based methods fail, as it directly runs the Laravel scheduler.

---

## Troubleshooting

If you encounter issues:

- Verify your domain URL is correct and accessible.
- Check if `wget` or `curl` is installed on your server.
- Ensure the project path is correct for the PHP command method.
- Verify that your server allows cron jobs.
- Check server logs for any error messages.

---

## Verification

After setting up the cron job, monitor your application to ensure:

- **RSS Feed Crawling**: New articles are being fetched from configured RSS sources
- **Content Updates**: Fresh news content appears regularly in your application
- **Database Optimization**: One month old news articles are automatically deleted
- **System Performance**: Background processes are running smoothly without errors
- **Error Monitoring**: Check server logs to ensure no cron job errors are generated

The cron job will automatically handle RSS feed crawling, news fetching, content maintenance, and database cleanup to keep your news application running optimally.
