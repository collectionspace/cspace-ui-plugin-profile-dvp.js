import form from './form';
import optionLists from './optionLists';

export default () => configContext => ({
  optionLists,
  extensions: {
    dimension: {
      form: form(configContext),
    },
  },
});
