import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://69f26e619511cf8f7f58afeaeb41fd68@o4509860543987712.ingest.de.sentry.io/4509860552704080",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,

  // Enable logs to be sent to Sentry
  enableLogs: true,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
