import {DataLayer} from './typings/datalayer';


function scriptExists () {
  const scriptTags = Array.from(document.getElementsByTagName('script'));

  return scriptTags.some((scriptTag: HTMLScriptElement) => {
    return scriptTag.src.indexOf('googletagmanager') >= 0;
  });
}

export function appendScript (id: string) {
  if (scriptExists()) {
    return;
  }

  const scriptTag = document.createElement('script');
  scriptTag.async = true;
  scriptTag.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  window.dataLayer = getDataLayer();

  window.dataLayer.push({
    'event': 'gtm.js',
    'gtm.start': new Date().getTime(),
  });

  document.body.appendChild(scriptTag);
}

export function getDataLayer (): DataLayer {
  return window.dataLayer = window.dataLayer || [];
}

export function logDebug (eventName: string, options: {[key: string]: any}) {
  // tslint:disable-next-line:no-console
  console.log(`Calling ${eventName} with:`, options);
}
