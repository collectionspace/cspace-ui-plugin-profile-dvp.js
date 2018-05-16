import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TermPickerInput,
    DateInput,
    CompoundInput,
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
        interviewStatusGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          interviewStatusGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.intakes_dvp.interviewStatusGroup.name',
                  defaultMessage: 'Interview status',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            interviewStatus: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.intakes_dvp.interviewStatus.fullName',
                    defaultMessage: 'Interview status',
                  },
                  name: {
                    id: 'field.intakes_dvp.interviewStatus.name',
                    defaultMessage: 'Status',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'interviewstatus',
                  },
                },
              },
            },
            interviewDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.intakes_dvp.interviewDate.fullName',
                    defaultMessage: 'Interview date',
                  },
                  name: {
                    id: 'field.intakes_dvp.interviewDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
      },
    },
  };
};
