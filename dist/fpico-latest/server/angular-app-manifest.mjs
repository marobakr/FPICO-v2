
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
      "chunk-Z3EEJ5GS.js",
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
    'index.csr.html': {size: 16058, hash: 'cf9d442ff582336b21b2440f8580b894b558feadd72446fc209d3104f2bf0184', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4686, hash: 'aefb109adc3d8e17a4b875f22c0cc6eab3773f2fb50460919d22a9c74a19f356', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3XDMC3F2.css': {size: 149550, hash: 'OvROD60qmxk', text: () => import('./assets-chunks/styles-3XDMC3F2_css.mjs').then(m => m.default)}
  },
};
