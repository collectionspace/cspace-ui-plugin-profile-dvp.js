import { defineMessages } from 'react-intl';

// FIXME: Plugins shouldn't have to import react-intl, since this unnecessarily increases the size
// when built as a standalone package. Instead, defineMessages should be supplied in the
// pluginContext. But this means that messages won't be extracted by the Babel plugin, since it
// only operates on files that import react-intl.

export default {
  collegeBranches: {
    values: [
      'artsAndHumanties',
      'socialSciences',
      'sciences',
      'other',
    ],
    messages: defineMessages({
      artsAndHumanties: {
        id: 'option.collegeBranches.artsAndHumanties',
        defaultMessage: 'Arts & Humanities',
      },
      socialSciences: {
        id: 'option.collegeBranches.socialSciences',
        defaultMessage: 'Social Sciences',
      },
      sciences: {
        id: 'option.collegeBranches.sciences',
        defaultMessage: 'Sciences',
      },
      other: {
        id: 'option.collegeBranches.other',
        defaultMessage: 'Other',
      },
    }),
  },
};
