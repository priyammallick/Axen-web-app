# Design AXEN Web Dashboard

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deployment (GitHub Actions -> AWS S3)

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml` which will build the app and deploy the output folder (`dist/`) to an S3 bucket, then optionally create a CloudFront invalidation.

Required repository secrets (set these in GitHub > Settings > Secrets):

- `AWS_ACCESS_KEY_ID` - IAM user's access key ID with permissions to S3 and CloudFront.
- `AWS_SECRET_ACCESS_KEY` - IAM user's secret access key.
- `AWS_REGION` - AWS region for the S3 bucket (e.g. `us-east-1`).
- `S3_BUCKET` - Name of the destination S3 bucket.
- `CLOUDFRONT_DISTRIBUTION_ID` - (optional) CloudFront distribution ID to invalidate after deploy. Leave empty if not used.

AWS IAM requirements (minimal):

- Permissions to `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` for the target bucket.
- If using CloudFront invalidation: `cloudfront:CreateInvalidation` on the distribution.

How it works:

1. On push to `main`, the workflow checks out the repo, installs dependencies (`npm ci`), runs `npm run build` (Vite -> `dist/`), then syncs `dist/` to the configured S3 bucket.
2. If `CLOUDFRONT_DISTRIBUTION_ID` is set, it will create an invalidation for `/*`.

Notes:

- This workflow assumes the build output is `dist/` (Vite default). If you customize the output directory, update the workflow.
- Ensure the S3 bucket is configured for static website hosting or used behind CloudFront as needed.

