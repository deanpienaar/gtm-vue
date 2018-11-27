# gtm-vue

(Currently in Beta until testing is added. Use with care.)

An easy way of using [Google Tag Manager](https://tagmanager.google.com/) with Vue.

Heavily inspired by the package [vue-gtm](https://github.com/mib200/vue-gtm/) by 
[mib200](https://github.com/mib200). This package merely adds some extra things like a useful 
tracking directive (`v-track`), and types. It will also feature testing soon.

## Installation
```bash
yarn add gtm-vue
```

```vue
import GTMVue from 'gtm-vue';

// Passing in your instance of vue-router here will setup automatic view tracking
Vue.use(GTMVue, {...GTMVueOptions})
```

Possible options are defined by the GTMVueOptions interface
```typescript
interface GTMVueOptions {
  id: string;
  enabled?: boolean;
  debug?: boolean;
  router?: VueRouter;
  ignoredViews?: string[];
  trackOnNextTick?: boolean;
  disableDirective?: boolean;
  directiveName?: string;
}
```

### The v-track directive 
```vue
<template>
  <a v-track="{category: 'internal-link', label: 'my-url', value: 100}" href="/my-url/">
    Click me!
  </a>
</template>
```

Options are
```typescript
interface TrackEventOptions {
  event?: string;
  category: string;
  action: string;
  label: string;
  value: string | number;
  noninteraction?: boolean;
  [key: string]: any;
}
```
