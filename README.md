##Setup 
* add ```config.js``` file in ./aws folder to let the project build with the following content:
``` javascript
export const SERVER_RECAPTCHA_TOKEN = ""
export const TARGET_EMAIL = ""
export const SOURCE_EMAIL = ""
export const CLIENT_RECAPTCHA_TOKEN = ""
export const EMAIL_SERVICE_ENDPOINT = ""

```

If AWS services are need send emails, fill in all values in ```config.js```
You must have AWS credentials on host. Also uncomment ```sendSesEmail()``` in ```ContactForm.js``` and replace ```mockSendEmail``` with ```sendSesEmail()``` on line 45.

Get a new reCAPTCHA token from google website.

You will need verified email on AWS SES, and the CloudFormation template deployed for the API and serverless function.  

* gatsby globally installed on machine 
```npm install gatsby -g```
* ```npm install``` to install all the npm packages
* bucket names need to be changed in ```package.json``` and `aws/template.yaml`
* ```npm start``` to start the dev environment
* ```npm run prod``` to start the prod environment 
* ```npm run aws:package``` to transform serverless CloudFormation template into the standard format
* ```npm run aws:deploy``` to deploy the CloudFormation template on AWS
* ```npm run aws:publish``` to upload website to S3 bucket
