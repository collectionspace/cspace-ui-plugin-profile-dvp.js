import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TermPickerInput,
    DateInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:intakes_dvp': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/intake/local/dvp',
          },
        },
        interviewStatus: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.intakes_dvp.interviewStatus.name',
                defaultMessage: 'Interview Status',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'languages',
              },
            },
          },
        },
        interviewStatusDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.intakes_dvp.interviewStatusDate.name',
                defaultMessage: 'Interview Status Date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
      },
    },
  };
};
