import fields from './fields';
import forms from './forms';
import vocabularies from './vocabularies';
import messages from './messages';
import advancedSearch from './advancedSearch';

export default () => (configContext) => ({
  recordTypes: {
    person: {
      messages,
      vocabularies,
      advancedSearch: advancedSearch(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
