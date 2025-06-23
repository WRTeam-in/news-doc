---
sidebar_position: 10
---

# Deploy the Site WITHOUT SEO (Local Build)

This guide will walk you through deploying the News Web application without SEO optimization, using a local build approach.

## Video Tutorial

Watch our video tutorial for a step-by-step guide on local build and deployment:

<iframe width="100%" height="500" style={{borderRadius: "12px", marginTop: "12px"}}
    src="https://www.youtube.com/embed/wfvMgiN2GDk?si=Mf1CTygSpJ4QpSE9"
    title="YouTube video player" frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

## Deployment Steps

1. After making all the necessary changes, you are ready to deploy your Web application on a Live Server.

2. Open VS Code terminal by pressing:

   - **CTRL+J** on Windows/Linux
   - **CMD+J** on MacOS

   Then execute the command: `npm run export`

   This will take a few seconds to build the optimized version of the web application.

3. After the process completes, go to the `out` folder and upload these files to your live server.

   :::warning Important
   Only upload the `out` folder's files to your server. Do not upload any other files to the server.
   :::

4. If you encounter any deployment-related issues, please refer to the official documentation: [NextJs Deployment](https://nextjs.org/docs/pages/building-your-application/deploying)

## After Deployment

After deploying using the local build method, don't forget to upload the `.htaccess` file to your server as explained in the [Upload .htaccess file](upload-htaccess.md) section.
