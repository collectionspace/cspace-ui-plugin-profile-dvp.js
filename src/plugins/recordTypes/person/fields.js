import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    TextInput,
    TermPickerInput,
    DateInput,
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
        dartmouthConnectionList: {
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
                type: TermPickerInput,
                props: {
                  source: 'dartmouthconnections',
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
        collegeGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          collegeGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.persons_dvp.collegeGroup.name',
                  defaultMessage: 'College Info',
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
            collegeBranch: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_dvp.collegeBranch.name',
                    defaultMessage: 'College branch',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'collegebranches',
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
      },
    },
  };
};
