import {DirectiveOptions, VueConstructor} from 'vue';

export function setupDirective (Vue: VueConstructor, directiveName: string) {
  const trackDirective: DirectiveOptions = {
    bind (el, binding) {
      el.addEventListener('click', () => {
        Vue.gtm.trackEvent(binding.value);
      });
    },
  };


  Vue.directive(directiveName || 'track', trackDirective);
}
