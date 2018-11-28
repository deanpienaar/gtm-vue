import {getDataLayer, logDebug} from './utils';
import {TrackEventOptions} from './typings/analytics-plugin';

export class AnalyticsPlugin {
  private readonly inBrowser: boolean;

  constructor (public enabled: boolean = true, public debug: boolean = false) {
    this.inBrowser = typeof window !== 'undefined';
  }

  public trackView (screenName: string, path: string) {
    if (typeof window !== 'undefined' && this.enabled) {
      if (this.debug) logDebug('trackView', {screenName, path});

      const dataLayer = getDataLayer();
      dataLayer.push({
        'event': 'content-view',
        'content-name': path,
      });
    }
  }

  public trackEvent (eventConfig: TrackEventOptions) {
    const {event, category, action, label, value, noninteraction, ...rest} = eventConfig;

    if (this.inBrowser && this.enabled) {
      if (this.debug) logDebug('trackEvent', eventConfig);

      const dataLayer = getDataLayer();
      dataLayer.push({
        'event': event || 'interaction',
        'target': category,
        'action': action,
        'target-properties': label,
        'value': value,
        'interaction-type': noninteraction || false,
        ...rest,
      });
    }
  }
}

