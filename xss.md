## Outline
We expect the vulnerability that allowed you to bypass authentication to be patched soon, preventing you logging on using SQL injection. You must ensure you can still access the admin account after  obtaining the admin's session cookie. You can do this using an XSS (Cross-Site Scripting) attack.

   > **What is XSS?**
   > Where attackers inject scripts into web pages viewed by others, exploiting trust and executing malicious actions like stealing session cookies.
   > Scripts can be added and stored on a website as comments, reviews, etc. As browsers do not differentiate between text and HTML, any script injected as text can execute and compromise security.

1. Inject a script into the website that will steal cookies when executed by other users.
2. Wait for the real admin to log in and view the malicious review. The injected script will send their session cookie to your server.
3. Capture the session cookie sent to your server by the malicious script.
4. This cookie is your next flag.