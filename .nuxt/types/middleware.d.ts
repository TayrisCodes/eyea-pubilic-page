import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth" | "members" | "third-party"
declare module "C:/Users/tarik/Projects/eyea-web-client-main/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}