---
sidebar_position: 1
---

# Configure on your server

### For Web

  - If you don’t need SEO for the frontend site, **shared hosting** will be sufficient.
  - If you want to use SEO for the frontend site, a **VPS** is necessary, as shared hosting does not provide the required resources.
      -  **Node.js Support** – he server must support **Node.js** , as it is essential for running the application with seo. 
      -  **Memory** – The server should have at least **3-4 GB of free RAM** to handle the application processes efficiently.
      -  **SSH Root Access** – The server must provide SSH root access to execute Node.js commands and manage the application.

:::note
  You only need to choose either Shared Hosting or VPS, depending on your SEO requirements. There is no need to purchase both.
:::
---

### For Admin Panel

-  **PHP Version**: The Admin Panel is built using Laravel Framework 10.0, which requires a minimum PHP version of **8.1.0** or higher. 


---

### For App

- **Flutter Version**: Flutter stable channel **3.27.4** sdk version. 
- **Java Version**: Java Development Kit (JDK) version **23**.

---


## How to Install News App on Your Server?

1. Create your domain or subdomain in your server.
2. Create an empty database in your server and remember this credentials:
   - database name
   - database username
   - database password
3. Upload the source code you have downloaded from CodeCanyon and unzip it.
4. Now navigate to the url where your project is located.  
   ex. mydomain.com or subdomain.mydomain.com
5. The installation screen should appear and guide you in the process.

Thats it! Now you are ready to run your first News App

**Default Login Details**  
User: admin  
Pass: admin123
