import {VueConstructor} from 'vue';
import {GTMVueOptions} from './typings';
import {appendScript} from './utils';
import {AnalyticsPlugin} from './plugin';
import {setupDirective} from './directive';
import {setupViewTracking} from './view-tracking';


class GTMVue {
  public static install (Vue: VueConstructor, options: GTMVueOptions) {
    const {id, disableDirective, directiveName, router, ignoredViews, debug, enabled} = options;
    appendScript(id);

    Vue.gtm = Vue.prototype.$gtm = new AnalyticsPlugin(enabled, debug);

    if (!disableDirective) {
      setupDirective(Vue, directiveName || 'track');
    }

    if (router) {
      setupViewTracking(Vue, router, ignoredViews);
    }
  }
}

export default GTMVue;
