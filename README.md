# pms3-express-pdf
Generate valuation report as pdf

# login
http://localhost:3100/auth/login

# ts
https://github.com/microsoftgraph/msgraph-typescript-typings

# node or angular or react

https://github.com/microsoftgraph?language=javascript&query=xamarin&utf8=%E2%9C%93
https://github.com/microsoftgraph/angular-connect-sample
https://github.com/microsoftgraph/angular-connect-rest-sample

# Onedrive docs
https://developer.microsoft.com/en-us/graph/docs/api-reference/v1.0/resources/onedrive

# OneDrive via oauth2 + rest
https://gist.github.com/tanaikech/22bfb05e61f0afb8beed29dd668bdce9


# Express API
https://github.com/greenroach/express-ts-template.git

Valuation API
Display name
Valuation API
Application type
Web app / API
Home page
http://localhost:8000
Application ID
4d24cd1b-4b05-47f6-95e7-b9b6a57a81fa
Object ID
ec81acaa-19bc-481c-a8c2-9787870c2621
Managed application in local directory
Valuation API
cm9srnTI61xfnxWraeBTvTD9KhwYQnKlf43iutcA+nY=

# Error
Request Id: 437818f2-0d57-47eb-a8ed-4d691acb0200
Correlation Id: 9de99799-69e6-4544-9983-a9311bcbb0b4
Timestamp: 2018-03-27T00:22:41Z
Message: AADSTS50011: No reply address is registered for the application.

# Solution
I fixed this by going to your application:
apps.dev.microsoft.com

Click the "Edit Application Manifest" button.
Add
"http://localhost:3978/api/OAuthCallback"
to the replyUrls element.
























# Express TypeScript template

# Pre-reqs
- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)

# Getting started
- Clone the repository
```
git clone https://github.com/greenroach/express-ts-template.git
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm run build
npm start
```
Navigate to `http://localhost:3000`

### Using the debugger in VS Code
Debugging is one of the places where VS Code really shines over other editors.
Node.js debugging in VS Code is easy to setup and even easier to use. 
This project comes pre-configured with everything you need to get started.

When you hit `F5` in VS Code, it looks for a top level `.vscode` folder with a `launch.json` file.
In this file, you can tell VS Code exactly what you want to do:

```json
{
    "type": "node",
    "request": "attach",
    "name": "Attach by Process ID",
    "processId": "${command:PickProcess}",
    "protocol": "inspector"
}
```
This is mostly identical to the "Node.js: Attach by Process ID" template with one minor change.
We added `"protocol": "inspector"` which tells VS Code that we're using the latest version of Node which uses a new debug protocol.

With this file in place, you can hit `F5` to attach a debugger.
You will probably have multiple node processes running, so you need to find the one that shows `node dist/server.js`.
Now just set your breakpoints and go!

--------------------
Based on [TypeScript Node Starter](https://github.com/Microsoft/TypeScript-Node-Starter) and [Express Generator](https://github.com/expressjs/generator)