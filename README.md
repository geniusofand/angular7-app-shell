# angular7-app-shell
Coming soon...

## Developer Experience

We believe that optimizing for a great Developer/Designer Experience is priority #1. Our metric for Developer Experience is simply polling our developers frequently with one question: "On a scale of 1-10 what is your Experience developing within the angular7-app-shell?".

New Developer spin-up, on-boarding:
 - Fast. Target metric: a new developer can get the app running locally in <15minutes.
 - Able to contribute on day 1. Target metric: a new developer can make a small, incremental change and have it pushed through our SDLC process and in PROD on day 1.
 - How:
   - Docker for local development, fast CI/CD pipelines, and consistent PROD runtimes.
   - Other?
   
Opinionated Ecosystem:
 - Angular CLI
 - NgRX
 - Required `@angular7-app-shell` packages for your app:
   - `@angular7-app-shell/app-layout` (includes things like NgRX Nav and Routing services)
   - `@angular7-app-shell/login`
   - `@angular7-app-shell/authentication`
   - `@angular7-app-shell/connectors` (RestConnectorAbstract, CloudfirestoreConnectorAbstract, etc.)
   - `@angular7-app-shell/logging`
 - more to come...

## Designer Experience

We believe that optimizing for a great Designer/Developer Experience is priority #1. Our metric for Designer Experience is simply polling our designers frequently with one question: "On a scale of 1-10 what is your Experience designing for the angular7-app-shell?".

New Developer spin-up, on-boarding:
 - Coming soon...

## App SDLC & Production

We believe that our SDLC should be conceptually independent of our cloud provider, but we fully embrace that in practice our SDLC will be tightly coupled to our cloud provider. We will highlight areas that are bonus wins that end up being de-coupled from our cloud provider (e.g. Stackdriver for logging across GCP and AWS).

SDLC Concepts:
 - Containers. Goal: when possible use the same container in local, dev/stage, and prod for consistency across all environments.
 - Git Flow. Goal: align to Git Flow across all repos, CI/CD pipelines, etc.
 
SDLC on GCP:
 - coming soon...
 
SDLC on AWS:
 - coming soon...

