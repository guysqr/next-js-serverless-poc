This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is intended to be deployed using the [Next.js Serverless deployment project](https://github.com/guysqr/nextjs-infra-cdk)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Deploy on AWS

If you've built the Next.js Serverless deployment project around this, just commit to "main" and it'll happen!

## Notes

The Serverless state folder `.serverless` is stored on S3, and synced to the build server during the build process. This allows us to persist the infrastructure state rather than build new every time.
