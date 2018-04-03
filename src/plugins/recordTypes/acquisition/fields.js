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
        CheckboxInput
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
                                id: 'field.collectionobjects_dvp.archivesSpaceRecordId.name',
                                defaultMessage: 'ArchivesSpace record ID',
                            },
                        }),
                        view: {
                            type: TextInput,
                        },
                    },
                }
            },
        },
    };
};
