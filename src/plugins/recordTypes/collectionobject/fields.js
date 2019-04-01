export default (configContext) => {
  const {
    AutocompleteInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:collectionobjects_common': {
        titleGroupList: {
          titleGroup: {
            title: {
              [config]: {
                view: {
                  props: {
                    embedded: true,
                    label: null,
                  },
                },
              },
            },
          },
        },
        objectNameList: {
          objectNameGroup: {
            [config]: {
              view: {
                props: {
                  tabular: false,
                },
              },
            },
            objectName: {
              [config]: {
                view: {
                  props: {
                    embedded: true,
                    label: null,
                  },
                },
              },
            },
          },
        },
        //
        // Object Content Section
        //
        contentActivities: {
          contentActivity: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/associated',
                },
              },
            },
          },
        },
        contentPlaces: {
          contentPlace: {
            [config]: {
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
          contentEventNameGroup: {
            contentEventName: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/associated',
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
          objectProductionPlaceGroup: {
            objectProductionPlace: {
              [config]: {
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
          objectProductionPersonGroup: {
            objectProductionPersonRole: {
              [config]: {
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
