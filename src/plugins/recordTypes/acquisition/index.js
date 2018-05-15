import forms from './forms';
import fields from './fields';
import advancedSearch from './advancedSearch';
import title from './title';

export default () => configContext => ({
  recordTypes: {
    acquisition: {
      advancedSearch: advancedSearch(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
      title: title(configContext),
    },
  },
});
