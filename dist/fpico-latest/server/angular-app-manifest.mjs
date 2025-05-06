
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/ar",
    "route": "/"
  },
  {
    "renderMode": 0,
    "redirectTo": "/ar/blogs",
    "route": "/en/blogs"
  },
  {
    "renderMode": 0,
    "redirectTo": "/ar/blogs/:id",
    "route": "/en/blogs/*"
  },
  {
    "renderMode": 0,
    "route": "/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FMYQJVD7.js",
      "chunk-XSN7N5J5.js",
      "chunk-EG73HCAF.js",
      "chunk-UDMMIS75.js"
    ],
    "route": "/*/projects"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MDNV3RGG.js",
      "chunk-MQYQE253.js",
      "chunk-DIPLBBB4.js",
      "chunk-UDMMIS75.js"
    ],
    "route": "/*/projects-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2HYQC6T5.js",
      "chunk-QE4PRNKN.js",
      "chunk-UDMMIS75.js"
    ],
    "route": "/*/services"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ILVGVAX5.js",
      "chunk-MQYQE253.js",
      "chunk-DIPLBBB4.js",
      "chunk-UDMMIS75.js"
    ],
    "route": "/*/services-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZJUHKHFV.js",
      "chunk-WAJWW5RD.js",
      "chunk-ALQCY26X.js",
      "chunk-QE4PRNKN.js",
      "chunk-ZPWYFUNN.js",
      "chunk-XSN7N5J5.js",
      "chunk-UDMMIS75.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JJSPF3U2.js",
      "chunk-WAJWW5RD.js",
      "chunk-QE4PRNKN.js",
      "chunk-EG73HCAF.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-K6HOVMFO.js"
    ],
    "route": "/*/blogs"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-K6HOVMFO.js"
    ],
    "route": "/*/blogs/blogs-details/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RUT727A4.js"
    ],
    "route": "/*/blogs/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3RLSCXWQ.js"
    ],
    "route": "/*/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16032, hash: 'f6585261f5c1b63b5b75f8627892a9afbf9f66ff61dd62761f8090b5e6250db2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4686, hash: '07f4e8df9585cee615d369ea15a85736769047de32230ac83b92968f01365971', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-KJAQBUR5.css': {size: 146381, hash: '/FCWedSqGlo', text: () => import('./assets-chunks/styles-KJAQBUR5_css.mjs').then(m => m.default)}
  },
};
