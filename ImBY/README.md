
Tech Stack\
Convex: Manages the database, real-time events, and cloud functions.\
Next.js App Router: Framework for building the app's frontend.\
ShadCN: Provides UI components for a polished user experience.\
Convex File Storage: For securely storing images and videos.\
ZegoCloud: Enables video calls within the app.\
Clerk: Handles user authentication.\
Tailwind CSS: Utility-first styling for responsive design.\
TypeScript: Ensures type safety and improved code quality.\
Quick Start Guide\
Follow these steps to set up and deploy the app:\

Install Dependencies: \
Run `npm install` to download all required packages.\

Start the App: \
Run `npm run dev` to begin local development. This will prompt you to sign in to Convex and create a project.\

Set Up Clerk for Authentication:\
Create a Clerk account.\
Obtain your `CLERK_SECRET_KEY` and `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` from the Clerk dashboard and add them to `.env.local`.\
Follow this guide to set up Convex authentication with Clerk, and copy the Issuer URL (`CLERK_ISSUER_URL`).\
Add the `CLERK_ISSUER_URL` to your Convex environment variables in the Convex dashboard.\

Set Up Clerk Webhooks:\
Add a webhook in the Clerk dashboard pointing to `https://your-convex-url.convex.site/clerk`.\
Enable `user.created`, `user.updated`, `session.created`, and `session.ended events`.\

Copy the webhook secret and add it as `CLERK_WEBHOOK_SECRET` in your Convex environment.\

Integrate OpenAI:\
Create an OpenAI account and obtain your `OPENAI_API_KEY`.\
Add the key to the Convex dashboard to enable ChatGPT features.\

Enable Video Calls:\
Create a ZegoCloud account and configure a new project for video calls.\
Add your `ZEGO_APP_ID` and `ZEGO_SERVER_SECRET` to `.env.local`.
Once all steps are complete, your app should be running and fully functional. 
