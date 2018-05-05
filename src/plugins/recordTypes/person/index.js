import fields from './fields';
import forms from './forms';
import vocabularies from './vocabularies';
import messages from './messages';
import optionLists from './optionLists';

export default () => configContext => ({
  optionLists,
  recordTypes: {
    person: {
      messages,
      vocabularies,
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
