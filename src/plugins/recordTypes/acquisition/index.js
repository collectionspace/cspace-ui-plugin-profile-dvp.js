import forms from './forms';
import fields from './fields';
import messages from './messages';

export default () => configContext => ({
    recordTypes: {
        acquisition: {
            messages,
            fields: fields(configContext),
            forms: forms(configContext),
        }
    }
});
