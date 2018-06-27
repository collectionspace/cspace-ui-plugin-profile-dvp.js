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
  numberTypes: {
    values: [
      'accession',
      'lender',
      'obsolete',
      'previous',
      'serial',
      'unknown',
    ],
    messages: defineMessages({
      accession: {
        id: 'option.numberTypes.accession',
        defaultMessage: 'accession',
      },
      lender: {
        id: 'option.numberTypes.lender',
        defaultMessage: 'lender',
      },
      obsolete: {
        id: 'option.numberTypes.obsolete',
        defaultMessage: 'obsolete',
      },
      previous: {
        id: 'option.numberTypes.previous',
        defaultMessage: 'previous',
      },
      serial: {
        id: 'option.numberTypes.serial',
        defaultMessage: 'serial',
      },
      unknown: {
        id: 'option.numberTypes.unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
  //
  // For Dimensions
  //
  measurementUnits: {
    values: [
      'pages',
      'kilobytes',
      'megabytes',
      'gigabytes',
      'terabytes',
      'hours',
      'minutes',
      'seconds',
    ],
    messages: defineMessages({
      pages: {
        id: 'option.measurementUnits.pages',
        defaultMessage: 'pages',
      },
      kilobytes: {
        id: 'option.measurementUnits.kilobytes',
        defaultMessage: 'kilobytes',
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
      'extent',
      'filesize',
      'runningtime',
    ],
    messages: defineMessages({
      extent: {
        id: 'option.dimensions.extent',
        defaultMessage: 'Extent size',
      },
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
