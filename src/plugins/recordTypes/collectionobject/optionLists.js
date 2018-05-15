import { defineMessages } from 'react-intl';

export default {
  collections: {
    values: [
      'dvp-collection',
    ],
    messages: defineMessages({
      'dvp-collection': {
        id: 'option.collections.dvp-collection',
        defaultMessage: 'Dartmouth Vietnam Project',
      },
    }),
  },
  creatorTypes: {
    values: [
      'culture',
      'organization',
      'person',
    ],
    messages: defineMessages({
      culture: {
        id: 'option.creatorTypes.culture',
        defaultMessage: 'culture',
      },
      organization: {
        id: 'option.creatorTypes.organization',
        defaultMessage: 'organization',
      },
      person: {
        id: 'option.creatorTypes.person',
        defaultMessage: 'person',
      },
    }),
  },
  //
  // For Dimensions
  //
  measurementUnits: {
    values: [
      'kilobytes',
      'megabytes',
      'gigabytes',
      'terabytes',
      'hours',
      'minutes',
      'seconds',
    ],
    messages: defineMessages({
      kilobytes: {
        id: 'option.measurementUnits.kilobytes',
        defaultMessage: 'Kilobytes',
      },
      megabytes: {
        id: 'option.measurementUnits.megabytes',
        defaultMessage: 'megabytes',
      },
      gigabytes: {
        id: 'option.measurementUnits.gigabytes',
        defaultMessage: 'gigabytes',
      },
      terabytes: {
        id: 'option.measurementUnits.terabytes',
        defaultMessage: 'terabytes',
      },
      hours: {
        id: 'option.measurementUnits.hours',
        defaultMessage: 'hours',
      },
      minutes: {
        id: 'option.measurementUnits.minutes',
        defaultMessage: 'minutes',
      },
      seconds: {
        id: 'option.measurementUnits.seconds',
        defaultMessage: 'seconds',
      },
    }),
  },
  dimensions: {
    values: [
      'filesize',
      'runningtime',
    ],
    messages: defineMessages({
      filesize: {
        id: 'option.dimensions.filesize',
        defaultMessage: 'File size',
      },
      runningtime: {
        id: 'option.dimensions.runningtime',
        defaultMessage: 'Running time',
      },
    }),
  },
};
