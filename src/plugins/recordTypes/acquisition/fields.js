import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
        AutocompleteInput,
        CompoundInput,
        TextInput,
        DateInput,
        OptionPickerInput,
        StructuredDateInput,
        TermPickerInput,
        CheckboxInput,
    } = configContext.inputComponents;

  const {
        configKey: config,
    } = configContext.configHelpers;

  const {
        DATA_TYPE_DATE,
        DATA_TYPE_BOOL,
        DATA_TYPE_STRUCTURED_DATE,
    } = configContext.dataTypes;

  const {
        extensions,
    } = configContext.config;

  return {
    document: {
      'ns2:acquisitions_common': {
        acquisitionSources: {
          acquisitionSource: {
            [config]: {
              view: {
                props: {
                  source: 'person/local',
                },
              },
            },
          },
        },
        owners: {
          owner: {
            [config]: {
              view: {
                props: {
                  source: 'person/local',
                },
              },
            },
          },
        },
      },
      'ns2:acquisitions_dvp': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/acquisition/local/dvp',
          },
        },
        archivesSpaceRecordId: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_dvp.archivesSpaceRecordId.name',
                defaultMessage: 'ArchivesSpace record ID',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        restrictionsApply: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_dvp.restrictionsApply.name',
                defaultMessage: 'Restrictions apply?',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        publish: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_dvp.publish.name',
                defaultMessage: 'Publish?',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        accessRestrictions: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_dvp.accessRestrictions.name',
                defaultMessage: 'Access restrictions?',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        useRestrictions: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_dvp.useRestrictions.name',
                defaultMessage: 'Use restrictions?',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
      },
    },
  };
};
