import forms from './forms';
import fields from './fields';
import messages from './messages';

export default () => configContext => ({
  recordTypes: {
    intake: {
      messages,
      forms: forms(configContext),
      fields: fields(configContext),
    },
  },
});
