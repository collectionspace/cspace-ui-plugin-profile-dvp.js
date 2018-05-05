import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TextInput,
    AutocompleteInput,
    DateInput,
    OptionPickerInput,
    StructuredDateInput,
    CompoundInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  const {
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:persons_dvp': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/person/local/dvp',
          },
        },
        dartmouthConnections: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          dartmouthConnection: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.persons_dvp.dartmouthConnection.name',
                  defaultMessage: 'Dartmouth Connection',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local',
                },
              },
            },
          },
        },
        dartmouthConnectionOther: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_dvp.dartmouthConnectionOther.name',
                defaultMessage: 'Other',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        collegeBranch: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_dvp.collegeBranch.name',
                defaultMessage: 'College branch',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'collegeBranches',
              },
            },
          },
        },
        yearsOfAttendanceDate: {
          [config]: {
            dataType: DATA_TYPE_STRUCTURED_DATE,
            messages: defineMessages({
              name: {
                id: 'field.persons_dvp.yearsOfAttendanceDate.name',
                defaultMessage: 'Years of attendance',
              },
            }),
            searchView: {
              type: DateInput,
            },
            view: {
              type: StructuredDateInput,
            },
          },
          ...extensions.structuredDate.fields,
        },
        yearOfGraduationDate: {
          [config]: {
            dataType: DATA_TYPE_STRUCTURED_DATE,
            messages: defineMessages({
              name: {
                id: 'field.persons_dvp.yearOfGraduationDate.name',
                defaultMessage: 'Year of graduation',
              },
            }),
            searchView: {
              type: DateInput,
            },
            view: {
              type: StructuredDateInput,
            },
          },
          ...extensions.structuredDate.fields,
        },
      },
    },
  };
};
