import {PluginFunction, VueConstructor} from 'vue';
import {VueRouter} from 'vue-router/types/router';
import {AnalyticsPlugin} from './analytics-plugin';
import {DataLayer} from './datalayer';


declare module 'vue/types/vue' {
  interface Vue {
    $gtm: AnalyticsPlugin;
  }

  interface VueConstructor {
    gtm: AnalyticsPlugin;
  }
}

declare global {
  interface Window {
    dataLayer: DataLayer;
  }
}

export interface GTMVueOptions {
  id: string;
  enabled?: boolean;
  debug?: boolean;
  router?: VueRouter;
  ignoredViews?: string[];
  trackOnNextTick?: boolean;
  disableDirective?: boolean;
  directiveName?: string;
}

declare class GTMVue {
 public static install: PluginFunction<GTMVueOptions>;
}

export default GTMVue;
