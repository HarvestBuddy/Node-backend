exports.passwordUpdated = (email, name) => {
    return `<!DOCTYPE html>
      <html>
      
      <head>
          <meta charset="UTF-8">
          <title>Password Update Confirmation</title>
          <style>
              body {
                  background-color: #f4f4f4;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 1.6;
                  color: #333333;
                  margin: 0;
                  padding: 0;
              }
      
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  text-align: center;
                  background-color: #ffffff;
                  border-radius: 5px;
                  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
              }
      
              .logo {
                  max-width: 200px;
                  margin-bottom: 20px;
              }
      
              .message {
                  font-size: 24px;
                  font-weight: bold;
                  margin-bottom: 20px;
              }
      
              .body {
                  font-size: 18px;
                  margin-bottom: 20px;
              }
      
              .email {
                  font-weight: bold;
                  color: #0070f3; /* Blue color for highlighting email */
              }
      
              .cta {
                  display: inline-block;
                  padding: 12px 24px;
                  background-color: #FFD60A;
                  color: #000000;
                  text-decoration: none;
                  border-radius: 5px;
                  font-size: 18px;
                  font-weight: bold;
                  margin-top: 20px;
              }
      
              .support {
                  font-size: 16px;
                  color: #999999;
                  margin-top: 20px;
              }
          </style>
      </head>
      
      <body>
          <div class="container">
              {% comment %} <a href="https://studynotion-edtech-project.vercel.app"><img class="logo"
                      src="https://i.ibb.co/7Xyj3PC/logo.png" alt="Harvest Buddy Logo"></a> {% endcomment %}
              <div class="message">Password Update Confirmation</div>
              <div class="body">
                  <p>Hey ${name},</p>
                  <p>Your password has been successfully updated for the email <span class="email">${email}</span>.</p>
                  <p>If you did not request this password change, please contact us immediately to secure your account.</p>
              </div>
              {% comment %} <div class="support">If you have any questions or need further assistance, please feel free to reach out to us
                  at
                  <a href="mailto:info@studynotion.com">info@studynotion.com</a>. We are here to help!
              </div>  {% endcomment %}
          </div>
      </body>
      
      </html>
      `;
  };