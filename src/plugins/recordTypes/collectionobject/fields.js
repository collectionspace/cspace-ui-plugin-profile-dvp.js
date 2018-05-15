import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    // DateInput,
    // OptionPickerInput,
    // StructuredDateInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  // const {
  //   DATA_TYPE_STRUCTURED_DATE,
  // } = configContext.dataTypes;

  // const {
  //   extensions,
  // } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_common': {
        titleGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          titleGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_common.titleGroup.name',
                  defaultMessage: 'Title',
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
          },
        },
        //
        // Object Content Section
        //
        contentActivities: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          contentActivity: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_common.contentActivity.name',
                  defaultMessage: 'Activity',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/associated,concept/material',
                },
              },
            },
          },
        },
        contentPlaces: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          contentPlace: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_common.contentPlace.name',
                  defaultMessage: 'Place',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'place/local',
                },
              },
            },
          },
        },
        contentEventNameGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          contentEventNameGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_common.contentEventNameGroup.name',
                  defaultMessage: 'Event',
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
            contentEventName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_common.contentEventName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/associated,concept/material',
                  },
                },
              },
            },
          },
        },
        //
        // Object Production Section
        //
        objectProductionPlaceGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          objectProductionPlaceGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_common.objectProductionPlaceGroup.name',
                  defaultMessage: 'Production place',
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
            objectProductionPlace: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_common.objectProductionPlace.fullName',
                    defaultMessage: 'Production place',
                  },
                  name: {
                    id: 'field.collectionobjects_common.objectProductionPlace.name',
                    defaultMessage: 'Place',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local',
                  },
                },
              },
            },
          },
        },
        objectProductionPersonGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          objectProductionPersonGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_common.objectProductionPersonGroup.name',
                  defaultMessage: 'Production person',
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
            objectProductionPersonRole: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_common.objectProductionPersonRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'objectproductionrole',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};
