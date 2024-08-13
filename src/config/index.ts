import { z } from "zod";

const envVars = z.object({
  // Server
  PORT: z.string().default("3000"),
  NODE_ENV: z.string().default("development"),
  // Credentials for the Database
  DATABASE_URL: z.string(),
  DB_HOST: z.string().optional(),
  DB_NAME: z.string().optional(),
  DB_USER: z.string().optional(),
  DB_PASS: z.string().optional(),
  DB_PORT: z.number().optional(),
  // Credentials for the Auth
  AUTH_SECRET: z.string(),
  // Credentials for the Auth Providers (Google, Facebook, GitHub, etc)
  AUTH_GOOGLE_ID: z.string().optional(),
  AUTH_GOOGLE_SECRET: z.string().optional(),
  AUTH_FACEBOOK_ID: z.string().optional(),
  AUTH_FACEBOOK_SECRET: z.string().optional(),
  AUTH_GITHUB_ID: z.string().optional(),
  AUTH_GITHUB_SECRET: z.string().optional(),
  // Credentials for Cloudinary
  CLOUDINARY_CLOUD_NAME: z.string(),
  CLOUDINARY_API_KEY: z.string(),
  CLOUDINARY_API_SECRET: z.string(),
  // Public URLs for the App and API
  NEXT_PUBLIC_APP_URL: z.string().optional(),
  NEXT_PUBLIC_API_URL: z.string().optional(),
});

envVars.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> {}
  }
}
