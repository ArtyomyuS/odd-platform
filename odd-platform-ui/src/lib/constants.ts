import {
  AlertType,
  type ConfigurationParameters,
  DataQualityTestSeverity,
} from 'generated-sources';

export const BASE_PARAMS: ConfigurationParameters = {
  basePath: import.meta.env.VITE_API_URL || '',
  credentials: 'same-origin',
  headers: { 'Content-Type': 'application/json' },
};

export const ORDERED_SEVERITY = [
  DataQualityTestSeverity.CRITICAL,
  DataQualityTestSeverity.MAJOR,
  DataQualityTestSeverity.MINOR,
];

export const alertTitlesMap = new Map<AlertType, string>([
  [AlertType.BACKWARDS_INCOMPATIBLE_SCHEMA, 'Backwards incompatible schema'],
  [AlertType.FAILED_JOB, 'Failed job'],
  [AlertType.FAILED_DQ_TEST, 'Failed DQ test'],
  [AlertType.DISTRIBUTION_ANOMALY, 'Distribution anomaly'],
]);

// content width constants
export const toolbarHeight = 49;
export const maxSidebarWidth = 240;
export const maxChannelsWidth = 200;
export const activitySidebarWidth = 192;
export const maxContentWidth = 1216;
export const maxContentWidthWithoutSidebar = 1440;
export const maxTagsContainerWidth = 920;
export const maxIdentityFormContentWidth = '320px';

// main skeleton height constant
export const mainSkeletonHeight = '100%';

// tabs constants
export const primaryTabsHeight = 32;
export const tabsContainerMargin = 16;

// time formats
export const mainEUDateTimeFormat = 'd MMM yyyy, HH:mm';
export const mainUSDateTimeFormat = 'MMM d yyyy, h:mm a';
export const mainEUDateFormat = 'd MMM yyyy';
export const mainUSDateFormat = 'MMM d yyyy';
export const datedListFormat = 'MMMM dd, yyyy';

// empty structures
export const emptyArr = [];
export const emptyObj = {};
