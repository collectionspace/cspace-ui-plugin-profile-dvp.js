import fields from './fields';
import forms from './forms';
import vocabularies from './vocabularies';
import messages from './messages';

export default () => configContext => ({
  recordTypes: {
    person: {
      messages,
      vocabularies,
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
