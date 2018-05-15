import forms from './forms';
import fields from './fields';

export default () => configContext => ({
  recordTypes: {
    intake: {
      forms: forms(configContext),
      fields: fields(configContext),
    },
  },
});
