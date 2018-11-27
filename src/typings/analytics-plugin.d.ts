export interface TrackEventOptions {
  event?: string;
  category: string;
  action: string;
  label: string;
  value: string | number;
  noninteraction?: boolean;
  [key: string]: any;
}

export declare class AnalyticsPlugin {
   public enabled: boolean;
   public debug: boolean;
   public trackView (screenName: string, path: string): void;
   public trackEvent (options: TrackEventOptions): void;
}
