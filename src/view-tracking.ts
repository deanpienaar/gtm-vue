import {VueRouter} from 'vue-router/types/router';
import {VueConstructor} from 'vue';

function setupViewTracking (Vue: VueConstructor, router: VueRouter, ignoredViews: string[] = []) {
  if (ignoredViews.length) {
    ignoredViews = ignoredViews.map(view => view.toLowerCase());
  }

  router.afterEach(to => {
    const viewName = (to.name || '').toLowerCase();

    if (ignoredViews && ignoredViews.indexOf(viewName) >= 0) {
      return;
    }

    const name = to.meta.gtm || to.name;
    Vue.gtm.trackView(name, to.fullPath);
  });

  return ignoredViews;
}


export {setupViewTracking};
