import forms from './forms';
import fields from './fields';

export default () => configContext => ({
  recordTypes: {
    acquisition: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
