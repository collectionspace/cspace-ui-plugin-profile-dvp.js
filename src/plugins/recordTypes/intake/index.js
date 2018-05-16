import forms from './forms';
import fields from './fields';
import advancedSearch from './advancedSearch';

export default () => configContext => ({
  recordTypes: {
    intake: {
      advancedSearch: advancedSearch(configContext),
      forms: forms(configContext),
      fields: fields(configContext),
    },
  },
});
