// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // uses api from newsapi.org
  api_url_us:'https://newsapi.org/v2/top-headlines?country=us&apiKey=9b6d4aecbeed4b11a38edffd77115421',
  api_url_eg:'https://newsapi.org/v2/top-headlines?country=eg&apiKey=9b6d4aecbeed4b11a38edffd77115421',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
