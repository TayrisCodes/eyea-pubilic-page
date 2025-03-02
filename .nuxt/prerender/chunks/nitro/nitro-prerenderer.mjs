globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/node-fetch-native/dist/polyfill.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, getQuery as getQuery$1, getCookie, lazyEventHandler, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/ofetch/dist/node.mjs';
import destr from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/hookable/dist/index.mjs';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/scule/dist/index.mjs';
import { klona } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/defu/dist/defu.mjs';
import { hash as hash$1 } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash, isRelative } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, extname, join } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/pathe/dist/index.mjs';
import { unified } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/unified/index.js';
import { toString } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/mdast-util-to-string/index.js';
import { preprocess } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/micromark/lib/preprocess.js';
import { postprocess } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/micromark/lib/postprocess.js';
import { stringifyPosition } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/unist-util-stringify-position/index.js';
import { markdownLineEnding, markdownSpace } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/micromark-util-character/index.js';
import { push, splice } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/micromark-util-chunked/index.js';
import { resolveAll } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/micromark-util-resolve-all/index.js';
import remarkEmoji from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/remark-emoji/index.js';
import rehypeSlug from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/rehype-slug/index.js';
import remarkSqueezeParagraphs from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/remark-squeeze-paragraphs/index.js';
import rehypeExternalLinks from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/rehype-external-links/index.js';
import remarkGfm from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/remark-gfm/index.js';
import rehypeSortAttributeValues from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/rehype-raw/index.js';
import remarkMDC, { parseFrontMatter } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/remark-mdc/dist/index.mjs';
import remarkParse from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/remark-parse/index.js';
import remark2rehype from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/remark-rehype/index.js';
import { all } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/mdast-util-to-hast/index.js';
import { detab } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/detab/index.js';
import { u } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/unist-builder/index.js';
import { encode } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/mdurl/index.js';
import slugify from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/slugify/slugify.js';
import { position } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/unist-util-position/index.js';
import { visit } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/unist-util-visit/index.js';
import { FontStyle, BUNDLED_LANGUAGES, BUNDLED_THEMES, getHighlighter } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/shiki-es/dist/shiki.node.mjs';
import { consola } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/unenv/runtime/npm/consola.mjs';
import { createIPX, createIPXMiddleware } from 'file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/ipx/dist/index.mjs';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "mode": "",
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": 1740946201648,
      "experimental": {
        "stripQueryParameters": false,
        "clientDB": false
      },
      "respectPathCase": false,
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": []
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "prose-code",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": false,
      "wsUrl": "",
      "documentDriven": false,
      "host": "",
      "trailingSlash": false,
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      }
    },
    "persistedState": {
      "storage": "cookies",
      "debug": false,
      "cookieOptions": {}
    }
  },
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "kc4UzpZUjI",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [],
    "locales": [],
    "defaultLocale": "",
    "highlight": false,
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "prose-code",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      },
      "remarkPlugins": {},
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": []
    },
    "documentDriven": false,
    "respectPathCase": false,
    "experimental": {
      "clientDB": false,
      "stripQueryParameters": false
    }
  },
  "ipx": {
    "dir": "C:/Users/tarik/Projects/eyea-web-client-main/public",
    "maxAge": "",
    "domains": [],
    "sharp": {},
    "alias": {}
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"C:/Users/tarik/Projects/eyea-web-client-main/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('content:source:content', unstorage_47drivers_47fs({"name":"content:source:content","driver":"fs","base":"C:\\Users\\tarik\\Projects\\eyea-web-client-main\\content","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache:content', unstorage_47drivers_47fs({"driver":"fs","base":"C:\\Users\\tarik\\Projects\\eyea-web-client-main\\.nuxt\\content-cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\tarik\\Projects\\eyea-web-client-main","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\tarik\\Projects\\eyea-web-client-main\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\tarik\\Projects\\eyea-web-client-main\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\tarik\\Projects\\eyea-web-client-main\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash$1([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash$1(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash$1(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash$1(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = "\"use strict\";(()=>{const a=window,e=document.documentElement,m=[\"dark\",\"light\"],c=window.localStorage.getItem(\"nuxt-color-mode\")||\"light\";let n=c===\"system\"?f():c;const l=e.getAttribute(\"data-color-mode-forced\");l&&(n=l),i(n),a[\"__NUXT_COLOR_MODE__\"]={preference:c,value:n,getColorScheme:f,addColorScheme:i,removeColorScheme:d};function i(o){const t=\"\"+o+\"\",s=\"\";e.classList?e.classList.add(t):e.className+=\" \"+t,s&&e.setAttribute(\"data-\"+s,o)}function d(o){const t=\"\"+o+\"\",s=\"\";e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(t,\"g\"),\"\"),s&&e.removeAttribute(\"data-\"+s)}function r(o){return a.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function f(){if(a.matchMedia&&r(\"\").media!==\"not all\"){for(const o of m)if(r(\":\"+o).matches)return o}return\"light\"}})();\n";

const _dvEcC7BPPz = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _dvEcC7BPPz
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"1c73-yyrKv4DTBCoD3eINUP7wKzGXz1o\"",
    "mtime": "2025-02-25T10:19:57.228Z",
    "size": 7283,
    "path": "../../.output/public/favicon.ico"
  },
  "/images/EYEA-Logo-Color.png": {
    "type": "image/png",
    "etag": "\"5c93-2aO/Wu0et7dZfGW6RiOzSoEiSHs\"",
    "mtime": "2025-02-25T10:19:57.259Z",
    "size": 23699,
    "path": "../../.output/public/images/EYEA-Logo-Color.png"
  },
  "/images/EYEA_cropped.png": {
    "type": "image/png",
    "etag": "\"2794-n8jETgQNaX9P0maESl+q+gWXhkI\"",
    "mtime": "2025-02-25T10:19:57.302Z",
    "size": 10132,
    "path": "../../.output/public/images/EYEA_cropped.png"
  },
  "/images/EYEA_Logo_01_Color.png": {
    "type": "image/png",
    "etag": "\"62cb-09PI+QJVUcqmHpGhN46bJ1iH/18\"",
    "mtime": "2025-02-25T10:19:57.280Z",
    "size": 25291,
    "path": "../../.output/public/images/EYEA_Logo_01_Color.png"
  },
  "/images/support-box.png": {
    "type": "image/png",
    "etag": "\"25fa3-sbzu+1TqVrrkn7Ili6bMlQlAX9k\"",
    "mtime": "2025-02-25T10:19:57.327Z",
    "size": 155555,
    "path": "../../.output/public/images/support-box.png"
  },
  "/_nuxt/auth.c31937e9.js": {
    "type": "application/javascript",
    "etag": "\"12d-WR5yZ8idIm9Wa8IWO2GSHe6diyw\"",
    "mtime": "2025-03-02T20:10:29.080Z",
    "size": 301,
    "path": "../../.output/public/_nuxt/auth.c31937e9.js"
  },
  "/_nuxt/Billing.4bb0dc7d.js": {
    "type": "application/javascript",
    "etag": "\"10a2-CRtXksRgyQY1OiAMf/nwAgbqNqg\"",
    "mtime": "2025-03-02T20:10:29.073Z",
    "size": 4258,
    "path": "../../.output/public/_nuxt/Billing.4bb0dc7d.js"
  },
  "/_nuxt/Button.4b10a99b.js": {
    "type": "application/javascript",
    "etag": "\"2ed-vEhtO2kzLq/x6lX/QLpcdCvsmCw\"",
    "mtime": "2025-03-02T20:10:29.057Z",
    "size": 749,
    "path": "../../.output/public/_nuxt/Button.4b10a99b.js"
  },
  "/_nuxt/carousel.3d894b80.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"963-7qEZEFeV7MUucSR6nuOIeMoKuvY\"",
    "mtime": "2025-03-02T20:10:29.033Z",
    "size": 2403,
    "path": "../../.output/public/_nuxt/carousel.3d894b80.css"
  },
  "/_nuxt/carousel.9501beb3.js": {
    "type": "application/javascript",
    "etag": "\"2b5f-tnAzip3sY3JFcqCMDhwjD8bY240\"",
    "mtime": "2025-03-02T20:10:29.108Z",
    "size": 11103,
    "path": "../../.output/public/_nuxt/carousel.9501beb3.js"
  },
  "/_nuxt/client-db.6e8eb614.js": {
    "type": "application/javascript",
    "etag": "\"5037-e9XNsU3+iqYf1X1h9FifaAIpgA4\"",
    "mtime": "2025-03-02T20:10:29.086Z",
    "size": 20535,
    "path": "../../.output/public/_nuxt/client-db.6e8eb614.js"
  },
  "/_nuxt/coin.e82a1949.png": {
    "type": "image/png",
    "etag": "\"192c-cGdmPruftA6s2pOImUm7jF6OsV4\"",
    "mtime": "2025-03-02T20:10:29.009Z",
    "size": 6444,
    "path": "../../.output/public/_nuxt/coin.e82a1949.png"
  },
  "/_nuxt/ContentDoc.2309ff30.js": {
    "type": "application/javascript",
    "etag": "\"7f1-xek83ngOt24CGSMPvp0fHFetqGs\"",
    "mtime": "2025-03-02T20:10:29.060Z",
    "size": 2033,
    "path": "../../.output/public/_nuxt/ContentDoc.2309ff30.js"
  },
  "/_nuxt/ContentList.2a9a1a4f.js": {
    "type": "application/javascript",
    "etag": "\"399-73GmVvUBSIwlMxTt5bJQgTPWgFI\"",
    "mtime": "2025-03-02T20:10:29.090Z",
    "size": 921,
    "path": "../../.output/public/_nuxt/ContentList.2a9a1a4f.js"
  },
  "/_nuxt/ContentNavigation.c1624d08.js": {
    "type": "application/javascript",
    "etag": "\"6ff-brSNnORCVKUKikJ5v7lPIep2ZQE\"",
    "mtime": "2025-03-02T20:10:29.086Z",
    "size": 1791,
    "path": "../../.output/public/_nuxt/ContentNavigation.c1624d08.js"
  },
  "/_nuxt/ContentQuery.ee2fcf35.js": {
    "type": "application/javascript",
    "etag": "\"8ec-q2ncKjbTOIn5KsVaS8oGZmp5kqs\"",
    "mtime": "2025-03-02T20:10:29.087Z",
    "size": 2284,
    "path": "../../.output/public/_nuxt/ContentQuery.ee2fcf35.js"
  },
  "/_nuxt/ContentRenderer.f4f78575.js": {
    "type": "application/javascript",
    "etag": "\"4f1-BgYvbqV/4LAiUcDdq13YS8a7eWs\"",
    "mtime": "2025-03-02T20:10:29.081Z",
    "size": 1265,
    "path": "../../.output/public/_nuxt/ContentRenderer.f4f78575.js"
  },
  "/_nuxt/ContentRendererMarkdown.c69d1244.js": {
    "type": "application/javascript",
    "etag": "\"5796-t7r36Qc1gSL0NMa56ylc4vZ1mQU\"",
    "mtime": "2025-03-02T20:10:29.088Z",
    "size": 22422,
    "path": "../../.output/public/_nuxt/ContentRendererMarkdown.c69d1244.js"
  },
  "/_nuxt/ContentSlot.8c8be466.js": {
    "type": "application/javascript",
    "etag": "\"408-PVYEWx1dzh/7gQuunlj4S8l04vM\"",
    "mtime": "2025-03-02T20:10:29.056Z",
    "size": 1032,
    "path": "../../.output/public/_nuxt/ContentSlot.8c8be466.js"
  },
  "/_nuxt/cornerSwish.64c9068d.png": {
    "type": "image/png",
    "etag": "\"f348-/V+86oA2k36UmFq4KhyT9b20vBE\"",
    "mtime": "2025-03-02T20:10:29.007Z",
    "size": 62280,
    "path": "../../.output/public/_nuxt/cornerSwish.64c9068d.png"
  },
  "/_nuxt/date_picker.33290340.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c8-M5DCOkm5Y9tNC0aOSl6n+Byq1+0\"",
    "mtime": "2025-03-02T20:10:29.027Z",
    "size": 200,
    "path": "../../.output/public/_nuxt/date_picker.33290340.css"
  },
  "/_nuxt/date_picker.dd86c7df.js": {
    "type": "application/javascript",
    "etag": "\"9f2-6gJ7nE54hmYWVGwYKD/ydfSmTQ4\"",
    "mtime": "2025-03-02T20:10:29.094Z",
    "size": 2546,
    "path": "../../.output/public/_nuxt/date_picker.dd86c7df.js"
  },
  "/_nuxt/default.6020f51a.js": {
    "type": "application/javascript",
    "etag": "\"f6-3HhYc3Bndd2Z1MNEKRGKZGir7GI\"",
    "mtime": "2025-03-02T20:10:29.059Z",
    "size": 246,
    "path": "../../.output/public/_nuxt/default.6020f51a.js"
  },
  "/_nuxt/DocumentDrivenEmpty.9e600a5d.js": {
    "type": "application/javascript",
    "etag": "\"120-U0M/ArrmPBzSu33nns6V/RPN9d8\"",
    "mtime": "2025-03-02T20:10:29.056Z",
    "size": 288,
    "path": "../../.output/public/_nuxt/DocumentDrivenEmpty.9e600a5d.js"
  },
  "/_nuxt/DocumentDrivenNotFound.33f8bd5a.js": {
    "type": "application/javascript",
    "etag": "\"9f-qprHh/OlKQQ5xMqcneXwzQf6g3s\"",
    "mtime": "2025-03-02T20:10:29.060Z",
    "size": 159,
    "path": "../../.output/public/_nuxt/DocumentDrivenNotFound.33f8bd5a.js"
  },
  "/_nuxt/entry.12c79ce2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"38dfa-iyrsqOGvcrF11/OG+tiY+dqA3X4\"",
    "mtime": "2025-03-02T20:10:29.021Z",
    "size": 232954,
    "path": "../../.output/public/_nuxt/entry.12c79ce2.css"
  },
  "/_nuxt/entry.4b02bbfd.js": {
    "type": "application/javascript",
    "etag": "\"688ce-QfGSIKOGbC+tRSLSZUbtQRiIZ84\"",
    "mtime": "2025-03-02T20:10:29.110Z",
    "size": 428238,
    "path": "../../.output/public/_nuxt/entry.4b02bbfd.js"
  },
  "/_nuxt/errorParser.bf96fb03.js": {
    "type": "application/javascript",
    "etag": "\"7d0-91eIb61dR0dAxVnqwcg/wn9lNzQ\"",
    "mtime": "2025-03-02T20:10:29.056Z",
    "size": 2000,
    "path": "../../.output/public/_nuxt/errorParser.bf96fb03.js"
  },
  "/_nuxt/event_cover1.30b8d0fe.png": {
    "type": "image/png",
    "etag": "\"1c426-Dfue37WoSyNcXrr4Ow+3q4oHGxg\"",
    "mtime": "2025-03-02T20:10:29.020Z",
    "size": 115750,
    "path": "../../.output/public/_nuxt/event_cover1.30b8d0fe.png"
  },
  "/_nuxt/event_cover2.ef01af66.png": {
    "type": "image/png",
    "etag": "\"1d7ef-fQqNiCwJP0JsRN6O+lr2bF0foLQ\"",
    "mtime": "2025-03-02T20:10:29.020Z",
    "size": 120815,
    "path": "../../.output/public/_nuxt/event_cover2.ef01af66.png"
  },
  "/_nuxt/event_cover3.0d7a675b.png": {
    "type": "image/png",
    "etag": "\"1e5f5-Ngjp844rrqX4CnpqhoHPmZ7HqeI\"",
    "mtime": "2025-03-02T20:10:29.021Z",
    "size": 124405,
    "path": "../../.output/public/_nuxt/event_cover3.0d7a675b.png"
  },
  "/_nuxt/event_cover4.d61a0eb5.png": {
    "type": "image/png",
    "etag": "\"19174-rrDedTsVF45dkdcg3ki+b1TdBPo\"",
    "mtime": "2025-03-02T20:10:29.021Z",
    "size": 102772,
    "path": "../../.output/public/_nuxt/event_cover4.d61a0eb5.png"
  },
  "/_nuxt/EYEA_cropped.b7647e62.js": {
    "type": "application/javascript",
    "etag": "\"6f-iKRocw0kaPQCZp1f+foGWqdJERc\"",
    "mtime": "2025-03-02T20:10:29.044Z",
    "size": 111,
    "path": "../../.output/public/_nuxt/EYEA_cropped.b7647e62.js"
  },
  "/_nuxt/EYEA_logo_color.07d8f246.svg": {
    "type": "image/svg+xml",
    "etag": "\"214d-lWjisKmHKdb2bNKxDe34DuhxB+U\"",
    "mtime": "2025-03-02T20:10:29.006Z",
    "size": 8525,
    "path": "../../.output/public/_nuxt/EYEA_logo_color.07d8f246.svg"
  },
  "/_nuxt/EYEA_logo_color.17e43afd.js": {
    "type": "application/javascript",
    "etag": "\"74-R0Mi3oNl9/i9QRmIJiTnnNDi7tU\"",
    "mtime": "2025-03-02T20:10:29.055Z",
    "size": 116,
    "path": "../../.output/public/_nuxt/EYEA_logo_color.17e43afd.js"
  },
  "/_nuxt/EYEA_Logo_Color_Final.56d269a6.png": {
    "type": "image/png",
    "etag": "\"62cb-09PI+QJVUcqmHpGhN46bJ1iH/18\"",
    "mtime": "2025-03-02T20:10:29.007Z",
    "size": 25291,
    "path": "../../.output/public/_nuxt/EYEA_Logo_Color_Final.56d269a6.png"
  },
  "/_nuxt/EYEA_Logo_Color_Final.96c02bb0.js": {
    "type": "application/javascript",
    "etag": "\"7a-CmEBeoDgfRq2Ra3DJ3Fp9hk2RJE\"",
    "mtime": "2025-03-02T20:10:29.066Z",
    "size": 122,
    "path": "../../.output/public/_nuxt/EYEA_Logo_Color_Final.96c02bb0.js"
  },
  "/_nuxt/file-upload.d8f7f9b5.js": {
    "type": "application/javascript",
    "etag": "\"15cfc-dY8rgyb7frvtu/2/UPwn8bpD1Y4\"",
    "mtime": "2025-03-02T20:10:29.109Z",
    "size": 89340,
    "path": "../../.output/public/_nuxt/file-upload.d8f7f9b5.js"
  },
  "/_nuxt/file-upload.dedaa3c1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10a-PjZhvvsT/5kGLd10ckrKjQt7jyY\"",
    "mtime": "2025-03-02T20:10:29.032Z",
    "size": 266,
    "path": "../../.output/public/_nuxt/file-upload.dedaa3c1.css"
  },
  "/_nuxt/final_logo.acbcc445.svg": {
    "type": "image/svg+xml",
    "etag": "\"2a1e-UxCb8GvzmYnR2DAEbNBwRcMvwdg\"",
    "mtime": "2025-03-02T20:10:29.009Z",
    "size": 10782,
    "path": "../../.output/public/_nuxt/final_logo.acbcc445.svg"
  },
  "/_nuxt/final_logo_white.6e0f9acf.js": {
    "type": "application/javascript",
    "etag": "\"20ea-vC50K6f/xjNGeIU4b/hbl+tdM54\"",
    "mtime": "2025-03-02T20:10:29.096Z",
    "size": 8426,
    "path": "../../.output/public/_nuxt/final_logo_white.6e0f9acf.js"
  },
  "/_nuxt/final_logo_white.82520e00.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4ed-TqNz3xULf0lebo+lgGJ4KzI4OQU\"",
    "mtime": "2025-03-02T20:10:29.041Z",
    "size": 1261,
    "path": "../../.output/public/_nuxt/final_logo_white.82520e00.css"
  },
  "/_nuxt/final_logo_white.a4889f23.svg": {
    "type": "image/svg+xml",
    "etag": "\"2a1a-xwsqVeQIzxBsE1wc619kYNKqG4s\"",
    "mtime": "2025-03-02T20:10:29.010Z",
    "size": 10778,
    "path": "../../.output/public/_nuxt/final_logo_white.a4889f23.svg"
  },
  "/_nuxt/focus-management.5c3f0cf8.js": {
    "type": "application/javascript",
    "etag": "\"1aef-r/adS7JqwCJcTsMHvm2n7x+wHlQ\"",
    "mtime": "2025-03-02T20:10:29.060Z",
    "size": 6895,
    "path": "../../.output/public/_nuxt/focus-management.5c3f0cf8.js"
  },
  "/_nuxt/Footer.85ee7c24.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"da7-dhgZm/Nz83SJrTHLyX1Yo/s0kt8\"",
    "mtime": "2025-03-02T20:10:29.040Z",
    "size": 3495,
    "path": "../../.output/public/_nuxt/Footer.85ee7c24.css"
  },
  "/_nuxt/Footer.b3391508.js": {
    "type": "application/javascript",
    "etag": "\"1729-r6ftFHWen0cUIwVZCz+qIs9VCTc\"",
    "mtime": "2025-03-02T20:10:29.107Z",
    "size": 5929,
    "path": "../../.output/public/_nuxt/Footer.b3391508.js"
  },
  "/_nuxt/fyda.cd42eccc.js": {
    "type": "application/javascript",
    "etag": "\"81d-x2iW5Ouc5Ko5hNOfElPdmnG85Wc\"",
    "mtime": "2025-03-02T20:10:29.046Z",
    "size": 2077,
    "path": "../../.output/public/_nuxt/fyda.cd42eccc.js"
  },
  "/_nuxt/generate_invoice.d3888fca.js": {
    "type": "application/javascript",
    "etag": "\"5336-sp1ph/mJsXZQTRzdYDejY1Y3zy8\"",
    "mtime": "2025-03-02T20:10:29.106Z",
    "size": 21302,
    "path": "../../.output/public/_nuxt/generate_invoice.d3888fca.js"
  },
  "/_nuxt/generate_invoice.fc6e1ec4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"143-E/sPmDwViE58GpQdLUpHZqrkfgw\"",
    "mtime": "2025-03-02T20:10:29.043Z",
    "size": 323,
    "path": "../../.output/public/_nuxt/generate_invoice.fc6e1ec4.css"
  },
  "/_nuxt/get.200446a7.js": {
    "type": "application/javascript",
    "etag": "\"a1b-zSjzNzlLaZjofBBtTnNVNIbH0ls\"",
    "mtime": "2025-03-02T20:10:29.043Z",
    "size": 2587,
    "path": "../../.output/public/_nuxt/get.200446a7.js"
  },
  "/_nuxt/get_one.eb353433.js": {
    "type": "application/javascript",
    "etag": "\"1d5-uDPiEcL/HwtrZBcC62HaCfnBLVg\"",
    "mtime": "2025-03-02T20:10:29.048Z",
    "size": 469,
    "path": "../../.output/public/_nuxt/get_one.eb353433.js"
  },
  "/_nuxt/hasMembership.30c54a92.js": {
    "type": "application/javascript",
    "etag": "\"501-cdreHdLveZrlWpku2/0YBN86Sck\"",
    "mtime": "2025-03-02T20:10:29.055Z",
    "size": 1281,
    "path": "../../.output/public/_nuxt/hasMembership.30c54a92.js"
  },
  "/_nuxt/HeroSection.a14d8289.js": {
    "type": "application/javascript",
    "etag": "\"bc0-G41Om8gF/AYQjR9UA+rx3VR/Dww\"",
    "mtime": "2025-03-02T20:10:29.091Z",
    "size": 3008,
    "path": "../../.output/public/_nuxt/HeroSection.a14d8289.js"
  },
  "/_nuxt/HeroSection.fc5c9bc1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1559-5ThTKd5JaFjTSGuEq2kl5jO3WnQ\"",
    "mtime": "2025-03-02T20:10:29.021Z",
    "size": 5465,
    "path": "../../.output/public/_nuxt/HeroSection.fc5c9bc1.css"
  },
  "/_nuxt/Highlight_top_green.c26bd209.svg": {
    "type": "image/svg+xml",
    "etag": "\"4ce-stajpB1Tirt7uXetINurS8kmhf0\"",
    "mtime": "2025-03-02T20:10:29.012Z",
    "size": 1230,
    "path": "../../.output/public/_nuxt/Highlight_top_green.c26bd209.svg"
  },
  "/_nuxt/IconCSS.6edc7bff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"102-F5FEFmWVF9wjE1jgjQsXqGhD4Cc\"",
    "mtime": "2025-03-02T20:10:29.043Z",
    "size": 258,
    "path": "../../.output/public/_nuxt/IconCSS.6edc7bff.css"
  },
  "/_nuxt/IconCSS.f2834a1a.js": {
    "type": "application/javascript",
    "etag": "\"35d-hzFIPykP21948IhFdVk5W7BQYl4\"",
    "mtime": "2025-03-02T20:10:29.096Z",
    "size": 861,
    "path": "../../.output/public/_nuxt/IconCSS.f2834a1a.js"
  },
  "/_nuxt/index.240317af.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d46-aygJy1QKqrBDxTx4ovfYz1/6fbc\"",
    "mtime": "2025-03-02T20:10:29.032Z",
    "size": 3398,
    "path": "../../.output/public/_nuxt/index.240317af.css"
  },
  "/_nuxt/index.24446558.js": {
    "type": "application/javascript",
    "etag": "\"426-856PJXqyqfhKZYbWlpbRqEUQerA\"",
    "mtime": "2025-03-02T20:10:29.092Z",
    "size": 1062,
    "path": "../../.output/public/_nuxt/index.24446558.js"
  },
  "/_nuxt/index.24504b5f.js": {
    "type": "application/javascript",
    "etag": "\"1fe4-vIlVV5RMGIEJRLFX/2mC8LQ/YPo\"",
    "mtime": "2025-03-02T20:10:29.101Z",
    "size": 8164,
    "path": "../../.output/public/_nuxt/index.24504b5f.js"
  },
  "/_nuxt/index.2888d1ea.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4e3-HrF3CLFDuAcQif1ucdd/5xCpBDw\"",
    "mtime": "2025-03-02T20:10:29.043Z",
    "size": 1251,
    "path": "../../.output/public/_nuxt/index.2888d1ea.css"
  },
  "/_nuxt/index.28a2f6d5.js": {
    "type": "application/javascript",
    "etag": "\"275c-hXcD7QV+4Tch2O//om0vaFTl4xU\"",
    "mtime": "2025-03-02T20:10:29.063Z",
    "size": 10076,
    "path": "../../.output/public/_nuxt/index.28a2f6d5.js"
  },
  "/_nuxt/index.29485717.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ab-5yEN0VC1m30XBapsqW82fx5OCUQ\"",
    "mtime": "2025-03-02T20:10:29.038Z",
    "size": 427,
    "path": "../../.output/public/_nuxt/index.29485717.css"
  },
  "/_nuxt/index.348ce108.js": {
    "type": "application/javascript",
    "etag": "\"31a7-H94eHSzKkvLW55XHXrZvaXIA3JQ\"",
    "mtime": "2025-03-02T20:10:29.098Z",
    "size": 12711,
    "path": "../../.output/public/_nuxt/index.348ce108.js"
  },
  "/_nuxt/index.38a75a8f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f1-HHNnT1ZfxVuMt5RLkRlKIHjwW0M\"",
    "mtime": "2025-03-02T20:10:29.033Z",
    "size": 497,
    "path": "../../.output/public/_nuxt/index.38a75a8f.css"
  },
  "/_nuxt/index.3a9a111f.js": {
    "type": "application/javascript",
    "etag": "\"5943-r4VM05eoF4AUK1ntw2SuG3Q7Qr8\"",
    "mtime": "2025-03-02T20:10:29.097Z",
    "size": 22851,
    "path": "../../.output/public/_nuxt/index.3a9a111f.js"
  },
  "/_nuxt/index.4be81bcd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"87d-vufT9utZWHWO2tZlYa6PrHoFM0Y\"",
    "mtime": "2025-03-02T20:10:29.037Z",
    "size": 2173,
    "path": "../../.output/public/_nuxt/index.4be81bcd.css"
  },
  "/_nuxt/index.5aee08bf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"406-/iBftg8MS0H0kXSytIe3Ck/eyBw\"",
    "mtime": "2025-03-02T20:10:29.033Z",
    "size": 1030,
    "path": "../../.output/public/_nuxt/index.5aee08bf.css"
  },
  "/_nuxt/index.5b84d0fc.js": {
    "type": "application/javascript",
    "etag": "\"58e0-7xKXPAAfB4Qu7OqrmbW1bARCs3c\"",
    "mtime": "2025-03-02T20:10:29.101Z",
    "size": 22752,
    "path": "../../.output/public/_nuxt/index.5b84d0fc.js"
  },
  "/_nuxt/index.5e0965a2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ab-sP0T3lHJirndOinWem3gf541Kzc\"",
    "mtime": "2025-03-02T20:10:29.035Z",
    "size": 427,
    "path": "../../.output/public/_nuxt/index.5e0965a2.css"
  },
  "/_nuxt/index.61309cbb.js": {
    "type": "application/javascript",
    "etag": "\"2152-K6teEYgoT3Ils+pOH/MSPBK+Zxs\"",
    "mtime": "2025-03-02T20:10:29.098Z",
    "size": 8530,
    "path": "../../.output/public/_nuxt/index.61309cbb.js"
  },
  "/_nuxt/index.643c00aa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"176-c+RjnF5Iwui1MgfC1N2cv+tENvw\"",
    "mtime": "2025-03-02T20:10:29.026Z",
    "size": 374,
    "path": "../../.output/public/_nuxt/index.643c00aa.css"
  },
  "/_nuxt/index.7a51e62d.js": {
    "type": "application/javascript",
    "etag": "\"451c-EIl5ZQU8/qCccHXHTU3lo+XARlA\"",
    "mtime": "2025-03-02T20:10:29.056Z",
    "size": 17692,
    "path": "../../.output/public/_nuxt/index.7a51e62d.js"
  },
  "/_nuxt/index.85ae610a.js": {
    "type": "application/javascript",
    "etag": "\"2618-EaVgk8C0v7neG5BsFbOa34K3rm4\"",
    "mtime": "2025-03-02T20:10:29.101Z",
    "size": 9752,
    "path": "../../.output/public/_nuxt/index.85ae610a.js"
  },
  "/_nuxt/index.92b37111.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2cf-AhtgvZw0avRF+seLuWWBH1+PAUE\"",
    "mtime": "2025-03-02T20:10:29.035Z",
    "size": 719,
    "path": "../../.output/public/_nuxt/index.92b37111.css"
  },
  "/_nuxt/index.948e5397.js": {
    "type": "application/javascript",
    "etag": "\"5e11-F4jVof9czNKrCSovpX7XxRO6NpM\"",
    "mtime": "2025-03-02T20:10:29.089Z",
    "size": 24081,
    "path": "../../.output/public/_nuxt/index.948e5397.js"
  },
  "/_nuxt/index.a0c98a46.js": {
    "type": "application/javascript",
    "etag": "\"6b3-M+QbWDt6c6t+VCrOQQVEoGorm3o\"",
    "mtime": "2025-03-02T20:10:29.097Z",
    "size": 1715,
    "path": "../../.output/public/_nuxt/index.a0c98a46.js"
  },
  "/_nuxt/index.a3769516.js": {
    "type": "application/javascript",
    "etag": "\"2033-O36TSEL80e4gJ2jhPFsTvMdOPDo\"",
    "mtime": "2025-03-02T20:10:29.050Z",
    "size": 8243,
    "path": "../../.output/public/_nuxt/index.a3769516.js"
  },
  "/_nuxt/index.a6ef77ff.js": {
    "type": "application/javascript",
    "etag": "\"26c-+VpW5S3yY9LeN0pZkd2hWLzNeBY\"",
    "mtime": "2025-03-02T20:10:29.070Z",
    "size": 620,
    "path": "../../.output/public/_nuxt/index.a6ef77ff.js"
  },
  "/_nuxt/index.ae2bbabc.js": {
    "type": "application/javascript",
    "etag": "\"2401-PS8U5FsJ8sTIDv1JsYfNrvcmPyQ\"",
    "mtime": "2025-03-02T20:10:29.096Z",
    "size": 9217,
    "path": "../../.output/public/_nuxt/index.ae2bbabc.js"
  },
  "/_nuxt/index.b7fffcd0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1af1-Y2h0JbI4WQe7QvRRg4FtpnEzHvQ\"",
    "mtime": "2025-03-02T20:10:29.033Z",
    "size": 6897,
    "path": "../../.output/public/_nuxt/index.b7fffcd0.css"
  },
  "/_nuxt/index.c95a4107.js": {
    "type": "application/javascript",
    "etag": "\"3901-gKbOIp2QArWbb+T2FvEjr7+5l+E\"",
    "mtime": "2025-03-02T20:10:29.106Z",
    "size": 14593,
    "path": "../../.output/public/_nuxt/index.c95a4107.js"
  },
  "/_nuxt/index.ca654b8b.js": {
    "type": "application/javascript",
    "etag": "\"9e5-xWgceYEECjDVAuyCgF+xS+4X7e4\"",
    "mtime": "2025-03-02T20:10:29.096Z",
    "size": 2533,
    "path": "../../.output/public/_nuxt/index.ca654b8b.js"
  },
  "/_nuxt/index.cb7e7a50.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36a4-5C6mxXfAhUgyc/D2Xl94vRU8BVY\"",
    "mtime": "2025-03-02T20:10:29.023Z",
    "size": 13988,
    "path": "../../.output/public/_nuxt/index.cb7e7a50.css"
  },
  "/_nuxt/index.d1e19181.js": {
    "type": "application/javascript",
    "etag": "\"b60-wfb0b312dYn/qe1RkaN/aTOQfdY\"",
    "mtime": "2025-03-02T20:10:29.046Z",
    "size": 2912,
    "path": "../../.output/public/_nuxt/index.d1e19181.js"
  },
  "/_nuxt/index.d235a3c0.js": {
    "type": "application/javascript",
    "etag": "\"553c-KCkRwtOHDvclqEtSCLLolBsm1mw\"",
    "mtime": "2025-03-02T20:10:29.102Z",
    "size": 21820,
    "path": "../../.output/public/_nuxt/index.d235a3c0.js"
  },
  "/_nuxt/index.f5645bda.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5bc-PlrnmbTCxNoPVeobnQvrK2mNtCg\"",
    "mtime": "2025-03-02T20:10:29.037Z",
    "size": 1468,
    "path": "../../.output/public/_nuxt/index.f5645bda.css"
  },
  "/_nuxt/index.fa5f379a.js": {
    "type": "application/javascript",
    "etag": "\"336b-Kx9MpZ8tR3b8Vml9xm5hcLsPzaM\"",
    "mtime": "2025-03-02T20:10:29.106Z",
    "size": 13163,
    "path": "../../.output/public/_nuxt/index.fa5f379a.js"
  },
  "/_nuxt/individual_regi_completed.acee2439.js": {
    "type": "application/javascript",
    "etag": "\"7e-XVjWUexbL92k2y8prpd/uWGt3Kc\"",
    "mtime": "2025-03-02T20:10:29.044Z",
    "size": 126,
    "path": "../../.output/public/_nuxt/individual_regi_completed.acee2439.js"
  },
  "/_nuxt/individual_regi_completed.f29938d6.svg": {
    "type": "image/svg+xml",
    "etag": "\"41a-W8djjQZ4GfQBddjaEhxvs1pyq3c\"",
    "mtime": "2025-03-02T20:10:29.006Z",
    "size": 1050,
    "path": "../../.output/public/_nuxt/individual_regi_completed.f29938d6.svg"
  },
  "/_nuxt/invoice.a668f808.js": {
    "type": "application/javascript",
    "etag": "\"452f-bOxeyxdVa4Inp984ytXO4cESBeA\"",
    "mtime": "2025-03-02T20:10:29.086Z",
    "size": 17711,
    "path": "../../.output/public/_nuxt/invoice.a668f808.js"
  },
  "/_nuxt/joint_venture.733f5bfd.png": {
    "type": "image/png",
    "etag": "\"333d-EoKUQXdUh7yNscj86aSiwQ1mDjg\"",
    "mtime": "2025-03-02T20:10:29.007Z",
    "size": 13117,
    "path": "../../.output/public/_nuxt/joint_venture.733f5bfd.png"
  },
  "/_nuxt/JoinUs.65e9643b.js": {
    "type": "application/javascript",
    "etag": "\"1ad3-7UE2eACcMuZGhm90v6VrHJA8Dz8\"",
    "mtime": "2025-03-02T20:10:29.050Z",
    "size": 6867,
    "path": "../../.output/public/_nuxt/JoinUs.65e9643b.js"
  },
  "/_nuxt/joinVerctor.0b6c83d3.svg": {
    "type": "image/svg+xml",
    "etag": "\"a6e-0sWrHOVZjLh6UHN/U+BTTIZUD4I\"",
    "mtime": "2025-03-02T20:10:29.007Z",
    "size": 2670,
    "path": "../../.output/public/_nuxt/joinVerctor.0b6c83d3.svg"
  },
  "/_nuxt/kena-banner.417f03bb.png": {
    "type": "image/png",
    "etag": "\"1688f-9Eq2yTmzWaz6HDK8j9ziocc/XoY\"",
    "mtime": "2025-03-02T20:10:29.007Z",
    "size": 92303,
    "path": "../../.output/public/_nuxt/kena-banner.417f03bb.png"
  },
  "/_nuxt/LeadershipSection.3bf895f3.js": {
    "type": "application/javascript",
    "etag": "\"101c-4gxVp/rWZdW/JsQJPrjMJhro++Q\"",
    "mtime": "2025-03-02T20:10:29.096Z",
    "size": 4124,
    "path": "../../.output/public/_nuxt/LeadershipSection.3bf895f3.js"
  },
  "/_nuxt/LeadershipSection.c6c20e29.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1201-4AxK3Vo2mCy6ItuWSoFqqW3kYuk\"",
    "mtime": "2025-03-02T20:10:29.022Z",
    "size": 4609,
    "path": "../../.output/public/_nuxt/LeadershipSection.c6c20e29.css"
  },
  "/_nuxt/list.d73cd922.js": {
    "type": "application/javascript",
    "etag": "\"222-XtrzB5Moq8lYLzSE5LzYYlMfDyM\"",
    "mtime": "2025-03-02T20:10:29.076Z",
    "size": 546,
    "path": "../../.output/public/_nuxt/list.d73cd922.js"
  },
  "/_nuxt/lists.2067d2bc.js": {
    "type": "application/javascript",
    "etag": "\"26f-Tm504tvHjSfiAPs2d0jfi06di/w\"",
    "mtime": "2025-03-02T20:10:29.076Z",
    "size": 623,
    "path": "../../.output/public/_nuxt/lists.2067d2bc.js"
  },
  "/_nuxt/Listselect.3915940c.js": {
    "type": "application/javascript",
    "etag": "\"10e8-n+VX+CUYYXHCCKDcydNT8UwY4i8\"",
    "mtime": "2025-03-02T20:10:29.103Z",
    "size": 4328,
    "path": "../../.output/public/_nuxt/Listselect.3915940c.js"
  },
  "/_nuxt/Listselect.f5060d95.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"140-VMrj3m4zCy5ODFs3z4JkH/ZrACM\"",
    "mtime": "2025-03-02T20:10:29.043Z",
    "size": 320,
    "path": "../../.output/public/_nuxt/Listselect.f5060d95.css"
  },
  "/_nuxt/Markdown.2110a54c.js": {
    "type": "application/javascript",
    "etag": "\"185-jdhAPZF3rvY2QwNgcOC+gI/fL44\"",
    "mtime": "2025-03-02T20:10:29.077Z",
    "size": 389,
    "path": "../../.output/public/_nuxt/Markdown.2110a54c.js"
  },
  "/_nuxt/member-form.6f42538d.js": {
    "type": "application/javascript",
    "etag": "\"70-C4AeuppswX1X4lbFFUBatm7tXqk\"",
    "mtime": "2025-03-02T20:10:29.053Z",
    "size": 112,
    "path": "../../.output/public/_nuxt/member-form.6f42538d.js"
  },
  "/_nuxt/member-form.90b90aba.png": {
    "type": "image/png",
    "etag": "\"f2cc-Vkm11+MT7XVp8QXQ6yt7Sl3PGH0\"",
    "mtime": "2025-03-02T20:10:29.007Z",
    "size": 62156,
    "path": "../../.output/public/_nuxt/member-form.90b90aba.png"
  },
  "/_nuxt/memberregister.c70dc0c7.js": {
    "type": "application/javascript",
    "etag": "\"2706-Sv6OvnYz3wr0xfLF7x/DHmdHdl0\"",
    "mtime": "2025-03-02T20:10:29.088Z",
    "size": 9990,
    "path": "../../.output/public/_nuxt/memberregister.c70dc0c7.js"
  },
  "/_nuxt/members.11bbdc18.js": {
    "type": "application/javascript",
    "etag": "\"4b2-1aCukCS+jm1GWsLFv3wtY8ma/b0\"",
    "mtime": "2025-03-02T20:10:29.103Z",
    "size": 1202,
    "path": "../../.output/public/_nuxt/members.11bbdc18.js"
  },
  "/_nuxt/members.999cd406.js": {
    "type": "application/javascript",
    "etag": "\"231-wyD0sAEOQh0KhXQU+58hh1uApyA\"",
    "mtime": "2025-03-02T20:10:29.074Z",
    "size": 561,
    "path": "../../.output/public/_nuxt/members.999cd406.js"
  },
  "/_nuxt/membership.52931c20.js": {
    "type": "application/javascript",
    "etag": "\"28c-C2sjn5MeKGJ0hEsZ356SRziqfaM\"",
    "mtime": "2025-03-02T20:10:29.044Z",
    "size": 652,
    "path": "../../.output/public/_nuxt/membership.52931c20.js"
  },
  "/_nuxt/membership.c561250d.js": {
    "type": "application/javascript",
    "etag": "\"138f-AR5upPaNLzxeouA6cMhtD03D+GY\"",
    "mtime": "2025-03-02T20:10:29.050Z",
    "size": 5007,
    "path": "../../.output/public/_nuxt/membership.c561250d.js"
  },
  "/_nuxt/menu.a4f37317.js": {
    "type": "application/javascript",
    "etag": "\"25e7-6KfAj8SRg4whFTBe5IdyRWOgXAk\"",
    "mtime": "2025-03-02T20:10:29.086Z",
    "size": 9703,
    "path": "../../.output/public/_nuxt/menu.a4f37317.js"
  },
  "/_nuxt/micro-task.adedf91f.js": {
    "type": "application/javascript",
    "etag": "\"332-8zd9I+KAFRMT6URjXjAc7jcPhJ8\"",
    "mtime": "2025-03-02T20:10:29.070Z",
    "size": 818,
    "path": "../../.output/public/_nuxt/micro-task.adedf91f.js"
  },
  "/_nuxt/modal.9523a23f.js": {
    "type": "application/javascript",
    "etag": "\"5d01-4XiV1TdUmYM8hx+RLIiTlHCjsNo\"",
    "mtime": "2025-03-02T20:10:29.091Z",
    "size": 23809,
    "path": "../../.output/public/_nuxt/modal.9523a23f.js"
  },
  "/_nuxt/mutator.7de0888b.js": {
    "type": "application/javascript",
    "etag": "\"14a-PhRJH6EDrwoF6MoAA834iTMWhSE\"",
    "mtime": "2025-03-02T20:10:29.076Z",
    "size": 330,
    "path": "../../.output/public/_nuxt/mutator.7de0888b.js"
  },
  "/_nuxt/NavBar.03160aad.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18f-90ZYEXpHDjRU4jlW/RvCPWzxU7g\"",
    "mtime": "2025-03-02T20:10:29.038Z",
    "size": 399,
    "path": "../../.output/public/_nuxt/NavBar.03160aad.css"
  },
  "/_nuxt/NavBar.990fdb04.js": {
    "type": "application/javascript",
    "etag": "\"2810-Y1eTHKvipiTnqvEQ1JtKC1olQ0E\"",
    "mtime": "2025-03-02T20:10:29.107Z",
    "size": 10256,
    "path": "../../.output/public/_nuxt/NavBar.990fdb04.js"
  },
  "/_nuxt/nuxt-img.92e0c5f7.js": {
    "type": "application/javascript",
    "etag": "\"1b6b-pVxa4Bt4r05q0RZrSv+RUWGALYU\"",
    "mtime": "2025-03-02T20:10:29.056Z",
    "size": 7019,
    "path": "../../.output/public/_nuxt/nuxt-img.92e0c5f7.js"
  },
  "/_nuxt/nuxt-link.685b2327.js": {
    "type": "application/javascript",
    "etag": "\"1104-bH4W/ZhlMfidyCs62gi0Iev1XRo\"",
    "mtime": "2025-03-02T20:10:29.081Z",
    "size": 4356,
    "path": "../../.output/public/_nuxt/nuxt-link.685b2327.js"
  },
  "/_nuxt/OrgStructureSection.4767684f.js": {
    "type": "application/javascript",
    "etag": "\"25e0-ZdNTjYCLZGBXp9ff6ZwBwpPMux8\"",
    "mtime": "2025-03-02T20:10:29.106Z",
    "size": 9696,
    "path": "../../.output/public/_nuxt/OrgStructureSection.4767684f.js"
  },
  "/_nuxt/OrgStructureSection.92ec1f4a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1725-abhTb7/KpQq00ErfTtXwt7nqYEQ\"",
    "mtime": "2025-03-02T20:10:29.022Z",
    "size": 5925,
    "path": "../../.output/public/_nuxt/OrgStructureSection.92ec1f4a.css"
  },
  "/_nuxt/Page-Loading.00a8b3ba.js": {
    "type": "application/javascript",
    "etag": "\"15a-Y+GHvR1I+rU7LkT3EipmHPCWpMw\"",
    "mtime": "2025-03-02T20:10:29.050Z",
    "size": 346,
    "path": "../../.output/public/_nuxt/Page-Loading.00a8b3ba.js"
  },
  "/_nuxt/pages.8b8810a2.svg": {
    "type": "image/svg+xml",
    "etag": "\"d19b8-UKpWFZW0DwY8Nx/sq5zBrFLNgqs\"",
    "mtime": "2025-03-02T20:10:29.014Z",
    "size": 858552,
    "path": "../../.output/public/_nuxt/pages.8b8810a2.svg"
  },
  "/_nuxt/partners.bfd49674.png": {
    "type": "image/png",
    "etag": "\"1a5a4d-AE+9EHMPd9V8UqLvUZPkFdujQnk\"",
    "mtime": "2025-03-02T20:10:29.022Z",
    "size": 1727053,
    "path": "../../.output/public/_nuxt/partners.bfd49674.png"
  },
  "/_nuxt/personInfo.3c7fc070.js": {
    "type": "application/javascript",
    "etag": "\"428-oMzujrTLu4m2BqqvNjc9dPrW5aU\"",
    "mtime": "2025-03-02T20:10:29.048Z",
    "size": 1064,
    "path": "../../.output/public/_nuxt/personInfo.3c7fc070.js"
  },
  "/_nuxt/preview.afbac43a.js": {
    "type": "application/javascript",
    "etag": "\"219-aF9iYnHgJzB/W+D4L2xpeHcwmR8\"",
    "mtime": "2025-03-02T20:10:29.076Z",
    "size": 537,
    "path": "../../.output/public/_nuxt/preview.afbac43a.js"
  },
  "/_nuxt/ProseA.8f2ab35c.js": {
    "type": "application/javascript",
    "etag": "\"18b-YG7waDfoHOtn9rqdSIwwe/XLybo\"",
    "mtime": "2025-03-02T20:10:29.087Z",
    "size": 395,
    "path": "../../.output/public/_nuxt/ProseA.8f2ab35c.js"
  },
  "/_nuxt/ProseBlockquote.dae9e115.js": {
    "type": "application/javascript",
    "etag": "\"bd-TGwjCdQq5CcSXrAM3Q85AXLLWvs\"",
    "mtime": "2025-03-02T20:10:29.065Z",
    "size": 189,
    "path": "../../.output/public/_nuxt/ProseBlockquote.dae9e115.js"
  },
  "/_nuxt/ProseCode.e63e49c6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e-GbvrqT5j9gSWlpa8e36U/Kv6Zx0\"",
    "mtime": "2025-03-02T20:10:29.043Z",
    "size": 46,
    "path": "../../.output/public/_nuxt/ProseCode.e63e49c6.css"
  },
  "/_nuxt/ProseCode.ff245224.js": {
    "type": "application/javascript",
    "etag": "\"15f-R4DXqSubuy6Jp8SGeHO8knLHJNA\"",
    "mtime": "2025-03-02T20:10:29.105Z",
    "size": 351,
    "path": "../../.output/public/_nuxt/ProseCode.ff245224.js"
  },
  "/_nuxt/ProseCodeInline.f5ecc49b.js": {
    "type": "application/javascript",
    "etag": "\"bc-tuoT0HF8cbCzRhOIPmPq6cFOvlA\"",
    "mtime": "2025-03-02T20:10:29.070Z",
    "size": 188,
    "path": "../../.output/public/_nuxt/ProseCodeInline.f5ecc49b.js"
  },
  "/_nuxt/ProseEm.b16ea2f6.js": {
    "type": "application/javascript",
    "etag": "\"ba-WXzkjUz0j/JqWnN0H9n/eSFH/Wk\"",
    "mtime": "2025-03-02T20:10:29.060Z",
    "size": 186,
    "path": "../../.output/public/_nuxt/ProseEm.b16ea2f6.js"
  },
  "/_nuxt/ProseH1.62f21530.js": {
    "type": "application/javascript",
    "etag": "\"1a9-R2h6m7o3vz0bP95ksPAynCPWQwg\"",
    "mtime": "2025-03-02T20:10:29.070Z",
    "size": 425,
    "path": "../../.output/public/_nuxt/ProseH1.62f21530.js"
  },
  "/_nuxt/ProseH2.2e3f6571.js": {
    "type": "application/javascript",
    "etag": "\"1a9-gUNNAYzu1J0ld3r3pA6K251HdpY\"",
    "mtime": "2025-03-02T20:10:29.067Z",
    "size": 425,
    "path": "../../.output/public/_nuxt/ProseH2.2e3f6571.js"
  },
  "/_nuxt/ProseH3.7c734df8.js": {
    "type": "application/javascript",
    "etag": "\"1a9-nN+Pd/WM/cEWiY6ppfFw7so8pJI\"",
    "mtime": "2025-03-02T20:10:29.071Z",
    "size": 425,
    "path": "../../.output/public/_nuxt/ProseH3.7c734df8.js"
  },
  "/_nuxt/ProseH4.a2cb4fb3.js": {
    "type": "application/javascript",
    "etag": "\"1a9-u3a7SVXYJEntepA7HxL7o9+fAg8\"",
    "mtime": "2025-03-02T20:10:29.067Z",
    "size": 425,
    "path": "../../.output/public/_nuxt/ProseH4.a2cb4fb3.js"
  },
  "/_nuxt/ProseH5.c8b39bb5.js": {
    "type": "application/javascript",
    "etag": "\"1a9-xSdnmmklZQ35JS2cUy9al+Ez/Zk\"",
    "mtime": "2025-03-02T20:10:29.060Z",
    "size": 425,
    "path": "../../.output/public/_nuxt/ProseH5.c8b39bb5.js"
  },
  "/_nuxt/ProseH6.be64dd76.js": {
    "type": "application/javascript",
    "etag": "\"1a9-suRkPn/GsVVRkqSchkvj61X+1u4\"",
    "mtime": "2025-03-02T20:10:29.069Z",
    "size": 425,
    "path": "../../.output/public/_nuxt/ProseH6.be64dd76.js"
  },
  "/_nuxt/ProseHr.17e73c57.js": {
    "type": "application/javascript",
    "etag": "\"91-aCVdYjEumWnyP7s5TlzymS013Jg\"",
    "mtime": "2025-03-02T20:10:29.074Z",
    "size": 145,
    "path": "../../.output/public/_nuxt/ProseHr.17e73c57.js"
  },
  "/_nuxt/ProseImg.9c5d80a7.js": {
    "type": "application/javascript",
    "etag": "\"21e-mPgbtFg1AcjoNUvR021yJZFXa9Y\"",
    "mtime": "2025-03-02T20:10:29.086Z",
    "size": 542,
    "path": "../../.output/public/_nuxt/ProseImg.9c5d80a7.js"
  },
  "/_nuxt/ProseLi.86252c8c.js": {
    "type": "application/javascript",
    "etag": "\"ba-nhSY1DgfOrZDXfT0FQxryp04g3A\"",
    "mtime": "2025-03-02T20:10:29.085Z",
    "size": 186,
    "path": "../../.output/public/_nuxt/ProseLi.86252c8c.js"
  },
  "/_nuxt/ProseOl.d6221f88.js": {
    "type": "application/javascript",
    "etag": "\"ba-KQcBCZ/DHNKLa5qdD6Uau2H/rRg\"",
    "mtime": "2025-03-02T20:10:29.065Z",
    "size": 186,
    "path": "../../.output/public/_nuxt/ProseOl.d6221f88.js"
  },
  "/_nuxt/ProseP.0c99d76e.js": {
    "type": "application/javascript",
    "etag": "\"b9-TZ/GQDFF+u1d9r01DEcdghJmDMA\"",
    "mtime": "2025-03-02T20:10:29.070Z",
    "size": 185,
    "path": "../../.output/public/_nuxt/ProseP.0c99d76e.js"
  },
  "/_nuxt/ProseStrong.dcf91142.js": {
    "type": "application/javascript",
    "etag": "\"be-tVbwBGrOodSMz5VXOXjOubc2VVs\"",
    "mtime": "2025-03-02T20:10:29.082Z",
    "size": 190,
    "path": "../../.output/public/_nuxt/ProseStrong.dcf91142.js"
  },
  "/_nuxt/ProseTable.cb363137.js": {
    "type": "application/javascript",
    "etag": "\"bd-pKCSX807BeRYT8E8/9vt4KsbBhc\"",
    "mtime": "2025-03-02T20:10:29.066Z",
    "size": 189,
    "path": "../../.output/public/_nuxt/ProseTable.cb363137.js"
  },
  "/_nuxt/ProseTbody.c30df6fd.js": {
    "type": "application/javascript",
    "etag": "\"bd-O1MY62P9fiBhQb4Gpos7E53iyT8\"",
    "mtime": "2025-03-02T20:10:29.074Z",
    "size": 189,
    "path": "../../.output/public/_nuxt/ProseTbody.c30df6fd.js"
  },
  "/_nuxt/ProseTd.90ffd60b.js": {
    "type": "application/javascript",
    "etag": "\"ba-WggwlJ3KlZANKtiYk64zlyEFSkQ\"",
    "mtime": "2025-03-02T20:10:29.074Z",
    "size": 186,
    "path": "../../.output/public/_nuxt/ProseTd.90ffd60b.js"
  },
  "/_nuxt/ProseTh.e390fbb8.js": {
    "type": "application/javascript",
    "etag": "\"ba-1XebgBXaeSiTe9QUXsFSXjmwnhA\"",
    "mtime": "2025-03-02T20:10:29.066Z",
    "size": 186,
    "path": "../../.output/public/_nuxt/ProseTh.e390fbb8.js"
  },
  "/_nuxt/ProseThead.8a25f4cf.js": {
    "type": "application/javascript",
    "etag": "\"bd-T80jbpTf3scXGQbtNbaR3YRkVa0\"",
    "mtime": "2025-03-02T20:10:29.058Z",
    "size": 189,
    "path": "../../.output/public/_nuxt/ProseThead.8a25f4cf.js"
  },
  "/_nuxt/ProseTr.7684e845.js": {
    "type": "application/javascript",
    "etag": "\"b5-LAnx/ZyZu6x6k0xiRP6DgXlZ8B4\"",
    "mtime": "2025-03-02T20:10:29.066Z",
    "size": 181,
    "path": "../../.output/public/_nuxt/ProseTr.7684e845.js"
  },
  "/_nuxt/ProseUl.9ef895f1.js": {
    "type": "application/javascript",
    "etag": "\"ba-ERvr3T/mFFOA70vCr4yjug+QC8o\"",
    "mtime": "2025-03-02T20:10:29.056Z",
    "size": 186,
    "path": "../../.output/public/_nuxt/ProseUl.9ef895f1.js"
  },
  "/_nuxt/PurposeAndNeeds.050ab702.js": {
    "type": "application/javascript",
    "etag": "\"886-Qgz+vWJlVB79lM1za0yCHPzak/w\"",
    "mtime": "2025-03-02T20:10:29.091Z",
    "size": 2182,
    "path": "../../.output/public/_nuxt/PurposeAndNeeds.050ab702.js"
  },
  "/_nuxt/PurposeAndNeeds.2c24fd67.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c95-jADwX68fLo9IyHZyozUKcWY807o\"",
    "mtime": "2025-03-02T20:10:29.022Z",
    "size": 3221,
    "path": "../../.output/public/_nuxt/PurposeAndNeeds.2c24fd67.css"
  },
  "/_nuxt/query.949e9116.js": {
    "type": "application/javascript",
    "etag": "\"1683-BojpGf32vdcJrKSGp915Prslzl4\"",
    "mtime": "2025-03-02T20:10:29.081Z",
    "size": 5763,
    "path": "../../.output/public/_nuxt/query.949e9116.js"
  },
  "/_nuxt/registration.416f9ebe.js": {
    "type": "application/javascript",
    "etag": "\"44f-8/H5x2o6a2qdPTc41q0ZjFVcXow\"",
    "mtime": "2025-03-02T20:10:29.066Z",
    "size": 1103,
    "path": "../../.output/public/_nuxt/registration.416f9ebe.js"
  },
  "/_nuxt/riverShape.03442b6b.js": {
    "type": "application/javascript",
    "etag": "\"6f-jmJWGAz2W6Ent2mTiTiaaoylLJM\"",
    "mtime": "2025-03-02T20:10:29.045Z",
    "size": 111,
    "path": "../../.output/public/_nuxt/riverShape.03442b6b.js"
  },
  "/_nuxt/riverShape.3cdc8f7f.svg": {
    "type": "image/svg+xml",
    "etag": "\"177d-TmXnUDFmcBCg1VnT+8yzp82oBJ4\"",
    "mtime": "2025-03-02T20:10:29.000Z",
    "size": 6013,
    "path": "../../.output/public/_nuxt/riverShape.3cdc8f7f.svg"
  },
  "/_nuxt/scan-upload.79fa2464.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10a-2PMXa1kaIGncFBnymrOoVJQUT6c\"",
    "mtime": "2025-03-02T20:10:29.032Z",
    "size": 266,
    "path": "../../.output/public/_nuxt/scan-upload.79fa2464.css"
  },
  "/_nuxt/scan-upload.a03d2f72.js": {
    "type": "application/javascript",
    "etag": "\"1093-v0/SP+JWLkkkpiw2bFO2x14nMBA\"",
    "mtime": "2025-03-02T20:10:29.097Z",
    "size": 4243,
    "path": "../../.output/public/_nuxt/scan-upload.a03d2f72.js"
  },
  "/_nuxt/Section-Header.a17ae5a5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"28a-+TKNQX7n92TU2JKe1b2+XDBOn9w\"",
    "mtime": "2025-03-02T20:10:29.033Z",
    "size": 650,
    "path": "../../.output/public/_nuxt/Section-Header.a17ae5a5.css"
  },
  "/_nuxt/Section-Header.dc732d8a.js": {
    "type": "application/javascript",
    "etag": "\"5b3-IceD/6Gt/nqEaSLZdpSA4opWKlw\"",
    "mtime": "2025-03-02T20:10:29.098Z",
    "size": 1459,
    "path": "../../.output/public/_nuxt/Section-Header.dc732d8a.js"
  },
  "/_nuxt/service-advocacy.50c7c535.png": {
    "type": "image/png",
    "etag": "\"5d261-yRMpN8dvCb4OvaxFQWo3vfvkwfM\"",
    "mtime": "2025-03-02T20:10:29.007Z",
    "size": 381537,
    "path": "../../.output/public/_nuxt/service-advocacy.50c7c535.png"
  },
  "/_nuxt/service-network-and-exposure.22192484.png": {
    "type": "image/png",
    "etag": "\"61014-i7bGPht3+5GjHyhujbMT0+nccG4\"",
    "mtime": "2025-03-02T20:10:29.007Z",
    "size": 397332,
    "path": "../../.output/public/_nuxt/service-network-and-exposure.22192484.png"
  },
  "/_nuxt/speaker.eabdb9a1.jpg": {
    "type": "image/jpeg",
    "etag": "\"282e95-PUja2jlMhB77g7YskLJxlVzkBAA\"",
    "mtime": "2025-03-02T20:10:29.030Z",
    "size": 2633365,
    "path": "../../.output/public/_nuxt/speaker.eabdb9a1.jpg"
  },
  "/_nuxt/subscribers.b2e18b73.png": {
    "type": "image/png",
    "etag": "\"190e-ARBvVzMy1Ao0NuU+bwcgEzfSIxI\"",
    "mtime": "2025-03-02T20:10:29.006Z",
    "size": 6414,
    "path": "../../.output/public/_nuxt/subscribers.b2e18b73.png"
  },
  "/_nuxt/support.33614809.png": {
    "type": "image/png",
    "etag": "\"10b9de-ThISQmSB8MQRhM3yFcCDsTWhE0Y\"",
    "mtime": "2025-03-02T20:10:29.015Z",
    "size": 1096158,
    "path": "../../.output/public/_nuxt/support.33614809.png"
  },
  "/_nuxt/tabs.bff71165.js": {
    "type": "application/javascript",
    "etag": "\"1c12-ioV4BPctREQeLYkzl/IPIqbeggc\"",
    "mtime": "2025-03-02T20:10:29.081Z",
    "size": 7186,
    "path": "../../.output/public/_nuxt/tabs.bff71165.js"
  },
  "/_nuxt/TeamSection.6c8bb013.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a2d-YTa4HcV8GXwjEGp53Xv/Qr7jB9w\"",
    "mtime": "2025-03-02T20:10:29.022Z",
    "size": 2605,
    "path": "../../.output/public/_nuxt/TeamSection.6c8bb013.css"
  },
  "/_nuxt/TeamSection.a446e042.js": {
    "type": "application/javascript",
    "etag": "\"81f-C6qNlAhSjudID3OKO/XxW/X7OdA\"",
    "mtime": "2025-03-02T20:10:29.091Z",
    "size": 2079,
    "path": "../../.output/public/_nuxt/TeamSection.a446e042.js"
  },
  "/_nuxt/Textfield.4b70a2f7.js": {
    "type": "application/javascript",
    "etag": "\"b62-k4EBtiVzCKQuw2ZBDb1M0WJDTMs\"",
    "mtime": "2025-03-02T20:10:29.079Z",
    "size": 2914,
    "path": "../../.output/public/_nuxt/Textfield.4b70a2f7.js"
  },
  "/_nuxt/third-party.07fe92d1.js": {
    "type": "application/javascript",
    "etag": "\"952-Gmq9V5V4b9QR20ue4aoOoJntdxQ\"",
    "mtime": "2025-03-02T20:10:29.082Z",
    "size": 2386,
    "path": "../../.output/public/_nuxt/third-party.07fe92d1.js"
  },
  "/_nuxt/upload.6474fa87.js": {
    "type": "application/javascript",
    "etag": "\"763-VyjGKNskgsseNuYeFsXmMOolObE\"",
    "mtime": "2025-03-02T20:10:29.092Z",
    "size": 1891,
    "path": "../../.output/public/_nuxt/upload.6474fa87.js"
  },
  "/_nuxt/upload.955b52ba.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10b7-z+ZHKZHy0sAa+P7/w7Hkx2ocKBo\"",
    "mtime": "2025-03-02T20:10:29.033Z",
    "size": 4279,
    "path": "../../.output/public/_nuxt/upload.955b52ba.css"
  },
  "/_nuxt/use-outside-click.ca302d48.js": {
    "type": "application/javascript",
    "etag": "\"64f-qzYtRP70WmRaVhAysNs/WKIawuA\"",
    "mtime": "2025-03-02T20:10:29.065Z",
    "size": 1615,
    "path": "../../.output/public/_nuxt/use-outside-click.ca302d48.js"
  },
  "/_nuxt/use-resolve-button-type.29994cd6.js": {
    "type": "application/javascript",
    "etag": "\"1cd-hXxraHGP+dziN/1aHppKJCLWxW4\"",
    "mtime": "2025-03-02T20:10:29.056Z",
    "size": 461,
    "path": "../../.output/public/_nuxt/use-resolve-button-type.29994cd6.js"
  },
  "/_nuxt/utils.beeca3ca.js": {
    "type": "application/javascript",
    "etag": "\"592-m/+heqQrnXHDBkueCLQGdqN0ofA\"",
    "mtime": "2025-03-02T20:10:29.087Z",
    "size": 1426,
    "path": "../../.output/public/_nuxt/utils.beeca3ca.js"
  },
  "/_nuxt/vue3-otp-input.esm.3884e336.js": {
    "type": "application/javascript",
    "etag": "\"1704-+iCNaiN070npc/vZgEyuyfXAdLM\"",
    "mtime": "2025-03-02T20:10:29.081Z",
    "size": 5892,
    "path": "../../.output/public/_nuxt/vue3-otp-input.esm.3884e336.js"
  },
  "/_nuxt/WhatsApp_Image_2025-02-17_at_17.38.21_69609b91.0e890315.jpg": {
    "type": "image/jpeg",
    "etag": "\"15436-vufRkz4ALELxrmpFdw0blwNC+xU\"",
    "mtime": "2025-03-02T20:10:29.020Z",
    "size": 87094,
    "path": "../../.output/public/_nuxt/WhatsApp_Image_2025-02-17_at_17.38.21_69609b91.0e890315.jpg"
  },
  "/_nuxt/why-you-should-join.feacc8b0.png": {
    "type": "image/png",
    "etag": "\"1e85-9jyLzBBXKnOzktc1R60UiQ4s+d8\"",
    "mtime": "2025-03-02T20:10:29.006Z",
    "size": 7813,
    "path": "../../.output/public/_nuxt/why-you-should-join.feacc8b0.png"
  },
  "/_nuxt/zelela-banner.9f7be6c3.png": {
    "type": "image/png",
    "etag": "\"8cb37-5T6VAokrS4GKr1inPGgVqIoibTU\"",
    "mtime": "2025-03-02T20:10:29.023Z",
    "size": 576311,
    "path": "../../.output/public/_nuxt/zelela-banner.9f7be6c3.png"
  },
  "/_nuxt/_id_.072993da.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"146-K9Fy8xkqEhoWbNdtZT+vyWB32mY\"",
    "mtime": "2025-03-02T20:10:29.034Z",
    "size": 326,
    "path": "../../.output/public/_nuxt/_id_.072993da.css"
  },
  "/_nuxt/_id_.078a63a6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17c-4dTaVGytmu06m6o3mUp5kurwJ3g\"",
    "mtime": "2025-03-02T20:10:29.023Z",
    "size": 380,
    "path": "../../.output/public/_nuxt/_id_.078a63a6.css"
  },
  "/_nuxt/_id_.088aa84d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"510-Rk1flyUy70le9AWT4eHdMtBJoIo\"",
    "mtime": "2025-03-02T20:10:29.032Z",
    "size": 1296,
    "path": "../../.output/public/_nuxt/_id_.088aa84d.css"
  },
  "/_nuxt/_id_.2d4d40b3.js": {
    "type": "application/javascript",
    "etag": "\"8871-zfvJeDYE4QGEB2pLOPMyM+Y7eEA\"",
    "mtime": "2025-03-02T20:10:29.106Z",
    "size": 34929,
    "path": "../../.output/public/_nuxt/_id_.2d4d40b3.js"
  },
  "/_nuxt/_id_.2d6206b8.js": {
    "type": "application/javascript",
    "etag": "\"9a3-2ziupVEjBr36uw5r2qfPb5Zgn5A\"",
    "mtime": "2025-03-02T20:10:29.070Z",
    "size": 2467,
    "path": "../../.output/public/_nuxt/_id_.2d6206b8.js"
  },
  "/_nuxt/_id_.2e875ba7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"404-BCerFS/kZXf6HNbG0O/xeOmW8go\"",
    "mtime": "2025-03-02T20:10:29.034Z",
    "size": 1028,
    "path": "../../.output/public/_nuxt/_id_.2e875ba7.css"
  },
  "/_nuxt/_id_.35042466.js": {
    "type": "application/javascript",
    "etag": "\"9ce-smkn4n7hCMr9ThCoPFLF//QPFL4\"",
    "mtime": "2025-03-02T20:10:29.066Z",
    "size": 2510,
    "path": "../../.output/public/_nuxt/_id_.35042466.js"
  },
  "/_nuxt/_id_.391fa685.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17c-Kk20Cavuxv1mHsI8AGSahQ51xZ0\"",
    "mtime": "2025-03-02T20:10:29.026Z",
    "size": 380,
    "path": "../../.output/public/_nuxt/_id_.391fa685.css"
  },
  "/_nuxt/_id_.465022b6.js": {
    "type": "application/javascript",
    "etag": "\"32ac-XTYueNtYD3i7A3snpCzqL2PRbqE\"",
    "mtime": "2025-03-02T20:10:29.106Z",
    "size": 12972,
    "path": "../../.output/public/_nuxt/_id_.465022b6.js"
  },
  "/_nuxt/_id_.4ee66503.js": {
    "type": "application/javascript",
    "etag": "\"f3cf-w/fmrQkbotNf5oyQZhvNDpA7o0Y\"",
    "mtime": "2025-03-02T20:10:29.109Z",
    "size": 62415,
    "path": "../../.output/public/_nuxt/_id_.4ee66503.js"
  },
  "/_nuxt/_id_.55a12210.js": {
    "type": "application/javascript",
    "etag": "\"50cb-zAVXD0C7WqjZfb+38erIsfuzunI\"",
    "mtime": "2025-03-02T20:10:29.055Z",
    "size": 20683,
    "path": "../../.output/public/_nuxt/_id_.55a12210.js"
  },
  "/_nuxt/_id_.9c563d2b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ace-L/v+3lDQHcneU9lhj3xxClKXL7w\"",
    "mtime": "2025-03-02T20:10:29.027Z",
    "size": 6862,
    "path": "../../.output/public/_nuxt/_id_.9c563d2b.css"
  },
  "/_nuxt/_id_.c2921742.js": {
    "type": "application/javascript",
    "etag": "\"1bd1-3nw0U8Cw77Gpw7WzG6bhJcy6d8w\"",
    "mtime": "2025-03-02T20:10:29.102Z",
    "size": 7121,
    "path": "../../.output/public/_nuxt/_id_.c2921742.js"
  },
  "/_nuxt/_id_.e10dbc6e.js": {
    "type": "application/javascript",
    "etag": "\"11d1-rxo1u/iNYTIV851ABlLU3OB6JN8\"",
    "mtime": "2025-03-02T20:10:29.106Z",
    "size": 4561,
    "path": "../../.output/public/_nuxt/_id_.e10dbc6e.js"
  },
  "/_nuxt/_id_.f62cb2da.js": {
    "type": "application/javascript",
    "etag": "\"3294-PNz7JHgbOfjnHkrVkI1gJQL4a70\"",
    "mtime": "2025-03-02T20:10:29.096Z",
    "size": 12948,
    "path": "../../.output/public/_nuxt/_id_.f62cb2da.js"
  },
  "/images/temp/event_cover1.png": {
    "type": "image/png",
    "etag": "\"30a46-VWgQ8KwQzR0fAcjrefxKzcrf+9k\"",
    "mtime": "2025-02-25T10:19:57.361Z",
    "size": 199238,
    "path": "../../.output/public/images/temp/event_cover1.png"
  },
  "/images/temp/event_cover2.png": {
    "type": "image/png",
    "etag": "\"332cc-qn3/MekIRMj7Fzd/zNZT7Y0xCIM\"",
    "mtime": "2025-02-25T10:19:57.392Z",
    "size": 209612,
    "path": "../../.output/public/images/temp/event_cover2.png"
  },
  "/images/temp/event_cover3.png": {
    "type": "image/png",
    "etag": "\"2e574-1Ih0UvysT39sFVJxzodC+8yEKRM\"",
    "mtime": "2025-02-25T10:19:57.418Z",
    "size": 189812,
    "path": "../../.output/public/images/temp/event_cover3.png"
  },
  "/images/temp/event_cover4.png": {
    "type": "image/png",
    "etag": "\"29d35-1mlmiwTdioIz9/Ycq3f0ls2NFro\"",
    "mtime": "2025-02-25T10:19:57.447Z",
    "size": 171317,
    "path": "../../.output/public/images/temp/event_cover4.png"
  },
  "/images/temp/8th-round/News-4-a.JPG": {
    "type": "image/jpeg",
    "etag": "\"29804-wLDW5+bfWE7I6wrUhU9BBB71OWw\"",
    "mtime": "2025-02-25T10:19:57.487Z",
    "size": 169988,
    "path": "../../.output/public/images/temp/8th-round/News-4-a.JPG"
  },
  "/images/temp/8th-round/News-4-b.JPG": {
    "type": "image/jpeg",
    "etag": "\"3448f-qb0JvIvdcB8OURDxxSYnZNNusoY\"",
    "mtime": "2025-02-25T10:19:57.521Z",
    "size": 214159,
    "path": "../../.output/public/images/temp/8th-round/News-4-b.JPG"
  },
  "/images/temp/engagement/News-1-a.jpg": {
    "type": "image/jpeg",
    "etag": "\"fc18-GpSPBZQRrvNON9XM/HJA2elGLLY\"",
    "mtime": "2025-02-25T10:19:57.555Z",
    "size": 64536,
    "path": "../../.output/public/images/temp/engagement/News-1-a.jpg"
  },
  "/images/temp/engagement/News-1-b.jpg": {
    "type": "image/jpeg",
    "etag": "\"ea6e-M+zL68bQdwDLv1kKK9t988GgAck\"",
    "mtime": "2025-02-25T10:19:57.577Z",
    "size": 60014,
    "path": "../../.output/public/images/temp/engagement/News-1-b.jpg"
  },
  "/images/temp/international-youth/News-3-a.jpg": {
    "type": "image/jpeg",
    "etag": "\"3492f-+cRZ04YNvGAzjyZZAdf3LKnAgwE\"",
    "mtime": "2025-02-25T10:19:57.611Z",
    "size": 215343,
    "path": "../../.output/public/images/temp/international-youth/News-3-a.jpg"
  },
  "/images/temp/international-youth/News-3-c.jpg": {
    "type": "image/jpeg",
    "etag": "\"5330d-w198MlF9UdTqCdnVIRs3rAY7gcU\"",
    "mtime": "2025-02-25T10:19:57.652Z",
    "size": 340749,
    "path": "../../.output/public/images/temp/international-youth/News-3-c.jpg"
  },
  "/images/temp/publication/bannerVid.mp4": {
    "type": "video/mp4",
    "etag": "\"240e8ad-d8WRkDzTDBlA1V8DyfDNuho2iHQ\"",
    "mtime": "2025-02-25T10:19:58.104Z",
    "size": 37808301,
    "path": "../../.output/public/images/temp/publication/bannerVid.mp4"
  },
  "/images/temp/publication/news-2-a.png": {
    "type": "image/png",
    "etag": "\"351df-oLtwTeIYFRVnDpBHcIOaoF0YziU\"",
    "mtime": "2025-02-25T10:19:58.138Z",
    "size": 217567,
    "path": "../../.output/public/images/temp/publication/news-2-a.png"
  },
  "/images/temp/publication/news-2-b.png": {
    "type": "image/png",
    "etag": "\"77fc9-D9ahpdAIOHUu7/+6RfWhNEnWo+8\"",
    "mtime": "2025-02-25T10:19:58.167Z",
    "size": 491465,
    "path": "../../.output/public/images/temp/publication/news-2-b.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => {
  return Array.isArray(value) ? value : [void 0, null].includes(value) ? [] : [value];
};

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    // locale
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or math every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before ?? 1;
    after = after ?? 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    // Conditions
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    // Sort data
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    // Surround logic
    (data, params) => params.surround ? surround(data, params.surround) : data,
    // Skip first items
    (data, params) => params.skip ? data.slice(params.skip) : data,
    // Pick first items
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    // Remove unwanted fields
    (data, params) => apply(withoutKeys(params.without))(data),
    // Select only wanted fields
    (data, params) => apply(withKeys(params.only))(data)
  ];
  return async (query) => {
    const data = await getContentsList();
    const params = query.params();
    const filteredData = pipelines.reduce(($data, pipe) => pipe($data, params) || $data, data);
    if (params.first) {
      return filteredData[0];
    }
    return filteredData;
  };
}

const defineTransformer = (transformer) => {
  return transformer;
};
const createSingleton = (fn) => {
  let instance;
  return (...args) => {
    if (!instance) {
      instance = fn(...args);
    }
    return instance;
  };
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse$1 = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler$1()(
    postprocess(
      parse$1(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler$1() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang?.trim()) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/{([^}]*)}/);
  const filenameMatches = lang.match(/\[((\\]|[^\]])*)\]/);
  const meta = lang.replace(languageMatches?.[0] ?? "", "").replace(highlightTokensMatches?.[0] ?? "", "").replace(filenameMatches?.[0] ?? "", "").trim();
  return {
    language: languageMatches?.[0] || void 0,
    highlights: parseHighlightedLines(highlightTokensMatches?.[1] || void 0),
    filename: filenameMatches?.[1].replace(/\\]/g, "]") || void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename, meta } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(
    node.position,
    "code",
    {
      language,
      filename,
      highlights,
      meta,
      code,
      className: [`language-${language}`]
    },
    [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]
  );
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en", respectPathCase = false } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"), { respectPathCase });
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: content._draft ?? isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true, respectPathCase = false } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: !respectPathCase })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}
function normalizeLink(link2) {
  const match = link2.match(/#.+$/);
  const hash = match ? match[0] : "";
  if (link2.replace(/#.+$/, "").endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(".md" + hash, ""), { forceLeadingSlash: false }) + hash;
  } else {
    return link2;
  }
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    props.className = ["contains-task-list"];
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(
      h({}, "input", {
        type: "checkbox",
        checked: node.checked,
        disabled: true
      })
    );
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h(
    {
      start: position(result[1]).start,
      end: position(result[result.length - 1]).end
    },
    "tbody",
    wrap(result.slice(1), true)
  );
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    // @ts-ignore
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
const isSafeAttribute = (attribute, value) => {
  if (attribute.startsWith("on")) {
    console.warn(`[@nuxt/content] removing unsafe attribute: ${attribute}="${value}"`);
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return !unsafeLinkPrefix.some((prefix) => value.toLowerCase().startsWith(prefix));
  }
  return true;
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.properties) {
      node.properties = Object.entries(node.properties).reduce((acc, [key, value]) => {
        if (isSafeAttribute(key, value)) {
          acc[key] = value;
        }
        return acc;
      }, {});
    }
    if (node.tagName?.startsWith("h") && node.properties.id) {
      node.properties.id = node.properties.id.replace(/-+/g, "-").replace(/-$/, "").replace(/^-/, "").replace(/^(\d)/, "_$1");
    }
    if (node.type === "element") {
      switch (node.tagName) {
        case "li": {
          let hasPreviousParagraph = false;
          node.children = node.children?.flatMap((child) => {
            if (child.tagName === "p") {
              if (hasPreviousParagraph) {
                child.children.unshift({
                  type: "element",
                  tagName: "br",
                  properties: {}
                });
              }
              hasPreviousParagraph = true;
              return child.children;
            }
            return child;
          });
          break;
        }
        case "component-slot":
          node.tagName = "template";
          break;
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return void 0;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return void 0;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}

const usePlugins = (plugins, stream) => {
  for (const plugin of Object.values(plugins)) {
    if (plugin) {
      const { instance, options, ...deprecatedOptions } = plugin;
      if (Object.keys(deprecatedOptions).length) {
        console.warn("[Markdown] Deprecated syntax. Please use `options` key in order to pass option to remark/rehype plugins.");
      }
      stream.use(instance, options || deprecatedOptions);
    }
  }
};
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process(
      {
        value: content,
        data: options.data
      },
      (error, file) => {
        if (error) {
          return reject(error);
        }
        Object.assign(options.data, file?.data || {});
        resolve(file?.result);
      }
    );
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: {
    "remark-emoji": {
      instance: remarkEmoji
    },
    "remark-squeeze-paragraphs": {
      instance: remarkSqueezeParagraphs
    },
    "remark-gfm": {
      instance: remarkGfm
    }
  },
  rehypePlugins: {
    "rehype-slug": {
      instance: rehypeSlug
    },
    "rehype-external-links": {
      instance: rehypeExternalLinks
    },
    "rehype-sort-attribute-values": {
      instance: rehypeSortAttributeValues
    },
    "rehype-sort-attributes": {
      instance: rehypeSortAttributes
    },
    "rehype-raw": {
      instance: rehypeRaw,
      options: {
        passThrough: ["element"]
      }
    }
  }
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = parseFrontMatter(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        options: plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: (_id, content) => {
    const { data } = parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const grammar = {
  "information_for_contributors": [
    "This file has been converted from https://github.com/docusgen/vscode-extension/blob/main/syntaxes/mdc.tmLanguage.json",
    "If you want to provide a fix or improvement, please create a pull request against the original repository.",
    "Once accepted there, we are happy to receive an update request."
  ],
  "version": "https://github.com/docusgen/vscode-extension/blob/1303abd16342880a42a4d143a660da049c79ea6c/syntaxes/mdc.tmLanguage.json",
  "name": "markdown",
  "injectionSelector": "L:text.html.markdown",
  "scopeName": "text.markdown.mdc",
  "patterns": [
    {
      "include": "text.html.markdown#frontMatter"
    },
    {
      "include": "#component_block"
    },
    {
      "include": "#block"
    }
  ],
  "repository": {
    "block": {
      "comment": "Same as `text.html.markdown#block`, but without `raw_block`",
      "patterns": [
        {
          "include": "#component_block"
        },
        {
          "include": "text.html.markdown#separator"
        },
        {
          "include": "#heading"
        },
        {
          "include": "#blockquote"
        },
        {
          "include": "#lists"
        },
        {
          "include": "#paragraph"
        },
        {
          "include": "text.html.markdown#fenced_code_block"
        },
        {
          "include": "text.html.markdown#link-def"
        },
        {
          "include": "text.html.markdown#html"
        }
      ]
    },
    "inline": {
      "patterns": [
        {
          "include": "#component_inline"
        },
        {
          "include": "#span"
        },
        {
          "include": "#markdown_attributes"
        }
      ]
    },
    "markdown_attributes": {
      "match": "(?x)([^ ])(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
      "name": "markup.component.attribute",
      "captures": {
        "4": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      }
    },
    "span": {
      "match": "(?x)\n  (\\[)           # Open\n    ([^]]*)\n  (\\])\n  (               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )?",
      "name": "markup.component.span",
      "captures": {
        "2": {
          "name": "string.other.link.description.title.markdown"
        },
        "4": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        }
      }
    },
    "attributes": {
      "match": "(?x)(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
      "name": "markup.attributes",
      "captures": {
        "3": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      }
    },
    "component_inline": {
      "match": "(?x)\n  (^|\\G|\\s+)\n  (:)           # component colon\n  (?i:             # component name\n    (\\w[\\w\\d-]*)\n  )\n  (\n      ({[^}]*})        # attributes\n      (\\[[^\\]]*\\]?) # slot\n      # reverse order\n    | (\\[[^\\]]*\\])  # slot\n      ({[^}]*})?       # attributes\n  )?",
      "name": "markup.component.inline",
      "captures": {
        "2": {
          "name": "punctuation.definition.tag.start.component"
        },
        "3": {
          "name": "entity.name.tag.component"
        },
        "5": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        },
        "6": {
          "patterns": [
            {
              "include": "#span"
            }
          ]
        },
        "7": {
          "patterns": [
            {
              "include": "#span"
            }
          ]
        },
        "8": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        }
      }
    },
    "component_block": {
      "begin": "(?x)\n  (^|\\G)(\\s*)\n  (:{2,})     # component colons\n  (?i:\n    (\\w[\\w\\d-]+)   # component name\n    (                 # folowing spaces or attributes\n        \\s*\n      | {([^{]*)}\n    )\n    $\n  )",
      "name": "markup.component.block",
      "end": "(^|\\G)(\\2)(\\3)\\s*$",
      "beginCaptures": {
        "4": {
          "name": "entity.name.tag.component"
        },
        "5": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      },
      "patterns": [
        {
          "include": "#content"
        }
      ]
    },
    "content": {
      "begin": "(^|\\G)(\\s*)(.*)",
      "while": "(^|\\G)(?!\\s*([:]{2,})\\s*$)",
      "contentName": "meta.embedded.block.component",
      "patterns": [
        {
          "begin": "(^|\\G)(\\s*)(-{3})(\\s*)$",
          "end": "(^|\\G)(\\s*(-{3})(\\s*)$)",
          "patterns": [
            {
              "include": "source.yaml"
            }
          ]
        },
        {
          "match": "^(\\s*)(#[\\w\\-\\_]*)\\s*(<!--(.*)-->)?$",
          "captures": {
            "2": {
              "name": "entity.other.attribute-name.html"
            },
            "3": {
              "name": "comment.block.html"
            }
          }
        },
        {
          "comment": "Block Repository created to disable 4-space raw block inside components",
          "include": "#block"
        }
      ]
    },
    "attribute": {
      "patterns": [
        {
          "match": `(?x)
  (
    ([^=><\\s]*)  # attribute name
    (             # attribute value
        =["]([^"]*)(["])|[']([^']*)(['])
      | =[^\\s'"]*
    )?
    \\s*
  )`,
          "captures": {
            "2": {
              "name": "entity.other.attribute-name.html"
            },
            "3": {
              "patterns": [
                {
                  "include": "#attribute-interior"
                }
              ]
            }
          }
        }
      ]
    },
    "attribute-interior": {
      "comment": "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L376",
      "patterns": [
        {
          "begin": "=",
          "beginCaptures": {
            "0": {
              "name": "punctuation.separator.key-value.html"
            }
          },
          "end": "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
          "patterns": [
            {
              "match": "([^\\s\"'=<>`/]|/(?!>))+",
              "name": "string.unquoted.html"
            },
            {
              "begin": '"',
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.html"
                }
              },
              "end": '"',
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.html"
                }
              },
              "name": "string.quoted.double.html",
              "patterns": [
                {
                  "include": "#entities"
                }
              ]
            },
            {
              "begin": "'",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.html"
                }
              },
              "end": "'",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.html"
                }
              },
              "name": "string.quoted.single.html",
              "patterns": [
                {
                  "include": "#entities"
                }
              ]
            },
            {
              "match": "=",
              "name": "invalid.illegal.unexpected-equals-sign.html"
            }
          ]
        }
      ]
    },
    "entities": {
      "comment": "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L532",
      "patterns": [
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "912": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "comment": "Yes this is a bit ridiculous, there are quite a lot of these",
          "match": "(?x)\n						(&)	(?=[a-zA-Z])\n						(\n							(a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))\n						  | (B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))\n						  | (c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))\n						  | (d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))\n						  | (e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))\n						  | (f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))\n						  | (G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))\n						  | (h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))\n						  | (i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))\n						  | (j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))\n						  | (k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))\n						  | (l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))\n						  | (M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))\n						  | (n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))\n						  | (o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))\n						  | (p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))\n						  | (q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))\n						  | (R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))\n						  | (s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))\n						  | (t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))\n						  | (u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))\n						  | (v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))\n						  | (w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))\n						  | (X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))\n						  | (y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))\n						  | (z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute))\n						)\n						(;)\n					",
          "name": "constant.character.entity.named.$2.html"
        },
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "3": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "match": "(&)#[0-9]+(;)",
          "name": "constant.character.entity.numeric.decimal.html"
        },
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "3": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "match": "(&)#[xX][0-9a-fA-F]+(;)",
          "name": "constant.character.entity.numeric.hexadecimal.html"
        },
        {
          "match": "&(?=[a-zA-Z0-9]+;)",
          "name": "invalid.illegal.ambiguous-ampersand.html"
        }
      ]
    },
    "heading": {
      "match": "(?:^|\\G)[ ]*(#{1,6}\\s+(.*?)(\\s+#{1,6})?\\s*)$",
      "captures": {
        "1": {
          "patterns": [
            {
              "match": "(#{6})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.6.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{5})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.5.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{4})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.4.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{3})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.3.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{2})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.2.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{1})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.1.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            }
          ]
        }
      },
      "name": "markup.heading.markdown",
      "patterns": [
        {
          "include": "text.html.markdown#inline"
        }
      ]
    },
    "heading-setext": {
      "patterns": [
        {
          "match": "^(={3,})(?=[ \\t]*$\\n?)",
          "name": "markup.heading.setext.1.markdown"
        },
        {
          "match": "^(-{3,})(?=[ \\t]*$\\n?)",
          "name": "markup.heading.setext.2.markdown"
        }
      ]
    },
    "lists": {
      "patterns": [
        {
          "begin": "(^|\\G)([ ]*)([*+-])([ \\t])",
          "beginCaptures": {
            "3": {
              "name": "punctuation.definition.list.begin.markdown"
            }
          },
          "comment": "Currently does not support un-indented second lines.",
          "name": "markup.list.unnumbered.markdown",
          "patterns": [
            {
              "include": "#block"
            },
            {
              "include": "text.html.markdown#list_paragraph"
            }
          ],
          "while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
        },
        {
          "begin": "(^|\\G)([ ]*)([0-9]+\\.)([ \\t])",
          "beginCaptures": {
            "3": {
              "name": "punctuation.definition.list.begin.markdown"
            }
          },
          "name": "markup.list.numbered.markdown",
          "patterns": [
            {
              "include": "#block"
            },
            {
              "include": "text.html.markdown#list_paragraph"
            }
          ],
          "while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
        }
      ]
    },
    "paragraph": {
      "begin": "(^|\\G)[ ]*(?=\\S)",
      "name": "meta.paragraph.markdown",
      "patterns": [
        {
          "include": "#inline"
        },
        {
          "include": "text.html.markdown#inline"
        },
        {
          "include": "text.html.derivative"
        },
        {
          "include": "#heading-setext"
        }
      ],
      "while": "(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=\\S))"
    },
    "blockquote": {
      "begin": "(^|\\G)[ ]*(>) ?",
      "captures": {
        "2": {
          "name": "punctuation.definition.quote.begin.markdown"
        }
      },
      "name": "markup.quote.markdown",
      "patterns": [
        {
          "include": "#block"
        }
      ],
      "while": "(^|\\G)\\s*(>) ?"
    }
  }
};
const mdcTMLanguage = grammar;

const logger = consola.withTag("@nuxt/content");
const resolveLang = (lang) => BUNDLED_LANGUAGES.find((l) => l.id === lang || l.aliases?.includes(lang));
const resolveTheme = (theme) => {
  if (!theme) {
    return;
  }
  if (typeof theme === "string") {
    theme = {
      default: theme
    };
  }
  return Object.entries(theme).reduce((acc, [key, value]) => {
    acc[key] = BUNDLED_THEMES.find((t) => t === value);
    return acc;
  }, {});
};
const useShikiHighlighter = createSingleton((opts) => {
  const { theme, preload } = opts || {};
  let promise;
  const getShikiHighlighter = () => {
    if (!promise) {
      promise = getHighlighter({
        theme: theme?.default || theme || "dark-plus",
        langs: [
          ...preload || [],
          "diff",
          "json",
          "js",
          "ts",
          "css",
          "shell",
          "html",
          "md",
          "yaml",
          "vue",
          {
            id: "md",
            scopeName: "text.markdown.mdc",
            path: "mdc.tmLanguage.json",
            aliases: ["markdown", "md", "mdc"],
            grammar: mdcTMLanguage
          }
        ]
      }).then((highlighter) => {
        const themes = Object.values(typeof theme === "string" ? { default: theme } : theme || {});
        if (themes.length) {
          return Promise.all(themes.map((theme2) => highlighter.loadTheme(theme2))).then(() => highlighter);
        }
        return highlighter;
      });
    }
    return promise;
  };
  const splitCodeToLines = (code) => {
    const lines = code.split(/\r\n|\r|\n/);
    return [...lines.map((line) => [{ content: line }])];
  };
  const getHighlightedTokens = async (code, lang, theme2) => {
    const highlighter = await getShikiHighlighter();
    code = code.replace(/\n+$/, "");
    lang = resolveLang(lang || "")?.id || lang;
    theme2 = resolveTheme(theme2 || "") || { default: highlighter.getTheme() };
    if (!lang) {
      return splitCodeToLines(code);
    }
    if (!highlighter.getLoadedLanguages().includes(lang)) {
      const languageRegistration = resolveLang(lang);
      if (languageRegistration) {
        await highlighter.loadLanguage(languageRegistration);
      } else {
        logger.warn(`Language '${lang}' is not supported by shiki. Skipping highlight.`);
        return splitCodeToLines(code);
      }
    }
    const newThemes = Object.values(theme2).filter((t) => !highlighter.getLoadedThemes().includes(t));
    if (newThemes.length) {
      await Promise.all(newThemes.map(highlighter.loadTheme));
    }
    const coloredTokens = Object.entries(theme2).map(([key, theme3]) => {
      const tokens = highlighter.codeToThemedTokens(code, lang, theme3, { includeExplanation: false }).map((line) => line.map((token) => ({
        content: token.content,
        style: {
          [key]: {
            color: token.color,
            fontStyle: token.fontStyle
          }
        }
      })));
      return {
        key,
        theme: theme3,
        tokens
      };
    });
    const highlightedCode = [];
    for (const line in coloredTokens[0].tokens) {
      highlightedCode[line] = coloredTokens.reduce((acc, color) => {
        return mergeLines({
          key: coloredTokens[0].key,
          tokens: acc
        }, {
          key: color.key,
          tokens: color.tokens[line]
        });
      }, coloredTokens[0].tokens[line]);
    }
    return highlightedCode;
  };
  const getHighlightedAST = async (code, lang, theme2, opts2) => {
    const lines = await getHighlightedTokens(code, lang, theme2);
    const { highlights = [], styleMap = {} } = opts2 || {};
    return lines.map((line, lineIndex) => {
      if (lineIndex !== lines.length - 1) {
        if (line.length === 0) {
          line.push({ content: "" });
        }
        line[line.length - 1].content += "\n";
      }
      return {
        type: "element",
        tag: "span",
        props: {
          class: ["line", highlights.includes(lineIndex + 1) ? "highlight" : ""].join(" ").trim(),
          line: lineIndex + 1
        },
        children: line.map(tokenSpan)
      };
    });
    function getSpanProps(token) {
      if (!token.style) {
        return {};
      }
      const key = Object.values(token.style).map((themeStyle) => Object.values(themeStyle).join("")).join("");
      if (!styleMap[key]) {
        styleMap[key] = {
          style: token.style,
          // Using the hash value of the style as the className,
          // ensure that the className remains stable over multiple compilations,
          // which facilitates content caching.
          className: "ct-" + hash(key)
        };
      }
      return { class: styleMap[key].className };
    }
    function tokenSpan(token) {
      return {
        type: "element",
        tag: "span",
        props: getSpanProps(token),
        children: [{ type: "text", value: token.content }]
      };
    }
  };
  const getHighlightedCode = async (code, lang, theme2, opts2) => {
    const styleMap = opts2?.styleMap || {};
    const highlights = opts2?.highlights || [];
    const ast = await getHighlightedAST(code, lang, theme2, { styleMap, highlights });
    function renderNode(node) {
      if (node.type === "text") {
        return node.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      const children = node.children.map(renderNode).join("");
      return `<${node.tag} class="${node.props.class}">${children}</${node.tag}>`;
    }
    return {
      code: ast.map(renderNode).join(""),
      styles: generateStyles(styleMap)
    };
  };
  const generateStyles = (styleMap) => {
    const styles = [];
    for (const styleToken of Object.values(styleMap)) {
      const defaultStyle = styleToken.style.default;
      const hasColor = !!defaultStyle?.color;
      const hasBold = isBold(defaultStyle);
      const hasItalic = isItalic(defaultStyle);
      const hasUnderline = isUnderline(defaultStyle);
      const themeStyles = Object.entries(styleToken.style).map(([variant, style]) => {
        const styleText = [
          // If the default theme has a style, but the current theme does not have one,
          // we need to override to reset style
          ["color", style.color || (hasColor ? "unset" : "")],
          ["font-weight", isBold(style) ? "bold" : hasBold ? "unset" : ""],
          ["font-style", isItalic(style) ? "italic" : hasItalic ? "unset" : ""],
          ["text-decoration", isUnderline(style) ? "bold" : hasUnderline ? "unset" : ""]
        ].filter((kv) => kv[1]).map((kv) => kv.join(":") + ";").join("");
        return { variant, styleText };
      });
      const defaultThemeStyle = themeStyles.find((themeStyle) => themeStyle.variant === "default");
      themeStyles.forEach((themeStyle) => {
        if (themeStyle.variant === "default") {
          styles.push(`.${styleToken.className}{${themeStyle.styleText}}`);
        } else if (themeStyle.styleText !== defaultThemeStyle?.styleText) {
          styles.push(`.${themeStyle.variant} .${styleToken.className}{${themeStyle.styleText}}`);
        }
      });
    }
    return styles.join("\n");
  };
  return {
    getHighlightedTokens,
    getHighlightedAST,
    getHighlightedCode,
    generateStyles
  };
});
function mergeLines(line1, line2) {
  const mergedTokens = [];
  const right = {
    key: line1.key,
    tokens: line1.tokens.slice()
  };
  const left = {
    key: line2.key,
    tokens: line2.tokens.slice()
  };
  let index = 0;
  while (index < right.tokens.length) {
    const rightToken = right.tokens[index];
    const leftToken = left.tokens[index];
    if (rightToken.content === leftToken.content) {
      mergedTokens.push({
        content: rightToken.content,
        style: {
          ...right.tokens[index].style,
          ...left.tokens[index].style
        }
      });
      index += 1;
      continue;
    }
    if (rightToken.content.startsWith(leftToken.content)) {
      const nextRightToken = {
        ...rightToken,
        content: rightToken.content.slice(leftToken.content.length)
      };
      rightToken.content = leftToken.content;
      right.tokens.splice(index + 1, 0, nextRightToken);
      continue;
    }
    if (leftToken.content.startsWith(rightToken.content)) {
      const nextLeftToken = {
        ...leftToken,
        content: leftToken.content.slice(rightToken.content.length)
      };
      leftToken.content = rightToken.content;
      left.tokens.splice(index + 1, 0, nextLeftToken);
      continue;
    }
    throw new Error("Unexpected token");
  }
  return mergedTokens;
}
function isBold(style) {
  return style && style.fontStyle === FontStyle.Bold;
}
function isItalic(style) {
  return style && style.fontStyle === FontStyle.Italic;
}
function isUnderline(style) {
  return style && style.fontStyle === FontStyle.Underline;
}
function hash(str) {
  return Array.from(str).reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0).toString().slice(-6);
}

const shiki = defineTransformer({
  name: "highlight",
  extensions: [".md"],
  transform: async (content, options = {}) => {
    const shikiHighlighter = useShikiHighlighter(options);
    await Promise.all([
      highlight(content.body),
      highlight(content.excerpt)
    ]);
    return content;
    async function highlight(document) {
      if (!document) {
        return;
      }
      const styleMap = {};
      const codeBlocks = [];
      const inlineCodes = [];
      visit(
        document,
        (node) => node?.tag === "code" && node?.props.code || node?.tag === "code-inline" && (node.props?.lang || node.props?.language),
        (node) => {
          if (node?.tag === "code") {
            codeBlocks.push(node);
          } else if (node?.tag === "code-inline") {
            inlineCodes.push(node);
          }
        }
      );
      await Promise.all(codeBlocks.map((node) => highlightBlock(node, styleMap)));
      await Promise.all(inlineCodes.map((node) => highlightInline(node, styleMap)));
      if (Object.values(styleMap).length) {
        document?.children.push({
          type: "element",
          tag: "style",
          children: [{ type: "text", value: shikiHighlighter.generateStyles(styleMap) }]
        });
      }
    }
    async function highlightInline(node, styleMap) {
      const code = node.children[0].value;
      const lines = await shikiHighlighter.getHighlightedAST(code, node.props.lang || node.props.language, options.theme, { styleMap });
      node.children = lines[0].children;
      node.props = Object.assign(node.props || {}, { class: "colored" });
      return node;
    }
    async function highlightBlock(node, styleMap) {
      const { code, language: lang, highlights = [] } = node.props;
      const innerCodeNode = node.children[0].children[0];
      innerCodeNode.children = await shikiHighlighter.getHighlightedAST(code, lang, options.theme, { styleMap, highlights });
      return node;
    }
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('file://C:/Users/tarik/Projects/eyea-web-client-main/node_modules/json5/lib/index.js').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  shiki,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

function makeIgnored(ignores) {
  const rxAll = ["/\\.", "/-", ...ignores.filter((p) => p)].map((p) => new RegExp(p));
  return function isIgnored(key) {
    const path = "/" + key.replaceAll(":", "/");
    return rxAll.some((rx) => rx.test(path));
  };
}

const isPreview = (event) => {
  const previewToken = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const isIgnored = makeIgnored(contentConfig.ignores);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || isIgnored(key)) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  const meta = await sourceStorage.getMeta(id);
  const mtime = meta.mtime;
  const size = meta.size || 0;
  const hash = hash$1({
    // Last modified time
    mtime,
    // File size
    size,
    // Add Content version to the hash, to revalidate the cache on content update
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash }).catch(() => {
  });
  return parsed;
};
const parseContent = async (id, content, opts = {}) => {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: contentConfig.markdown,
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      highlight: contentConfig.highlight,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales,
        respectPathCase: contentConfig.respectPathCase
      }
    }
  );
  const file = { _id: id, body: typeof content === "string" ? content.replace(/\r\n|\r/g, "\n") : content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
};
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, query, ...pathParts) {
  const queryBuilder = createQuery(createServerQueryFetch(event), typeof query !== "string" ? query || {} : {});
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (contentConfig.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: contentConfig.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params?.qid?.replace(/.json$/, "");
  const query = getQuery$1(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid].where && !Array.isArray(memory[qid].where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (qid && memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _IK4DBL = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (query.first) {
    const content = await serverQueryContent(event, query).findOne();
    const path = content?._path || query.where?.find((w) => w._path)?._path;
    if (path) {
      const _dir = await serverQueryContent(event).where({ _path: join(path, "_dir") }).without("_").findOne();
      if (_dir && !Array.isArray(_dir)) {
        return {
          _path: path,
          ...content || {},
          _dir
        };
      }
    }
    if (!content) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  const contents = await serverQueryContent(event, query).find();
  return contents;
});

const _HkL4zv = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents,
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().public.content;
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _cZpzN5 = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

const _qFasEn = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx;
  const ipxOptions = {
    ...opts || {},
    // TODO: Switch to storage API when ipx supports it
    dir: fileURLToPath(new URL(opts.dir, globalThis._importMeta_.url))
  };
  const ipx = createIPX(ipxOptions);
  const middleware = createIPXMiddleware(ipx);
  return eventHandler(async (event) => {
    event.node.req.url = withLeadingSlash(event.context.params._);
    await middleware(event.node.req, event.node.res);
  });
});

const _lazy_JAQu31 = () => import('../file_type.mjs');
const _lazy_HYaBnL = () => import('../renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/file_type', handler: _lazy_JAQu31, lazy: true, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid/**:params', handler: _IK4DBL, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _IK4DBL, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _IK4DBL, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.1740946201648.json', handler: _HkL4zv, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _cZpzN5, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _cZpzN5, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _cZpzN5, lazy: false, middleware: false, method: "get" },
  { route: '/_ipx/**', handler: _qFasEn, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_HYaBnL, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
