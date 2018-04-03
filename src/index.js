/* global cspaceUIPluginProfileDartmouthVietnamProject */
/* The cspaceUIPluginProfileDartmouthVietnamProject global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/dvp.css';

module.exports = () => ({
  messages,
  className: styles.common,
  prettyUrls: true,
  tenantId: '1975',
  pluginInfo: {
    cspaceUIPluginProfileDartmouthVietnamProject: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileDartmouthVietnamProject.name',
          defaultMessage: 'Dartmouth Vietnam Project profile',
        },
      }),
      version: cspaceUIPluginProfileDartmouthVietnamProject.packageVersion,
    },
  },
  plugins: plugins.map(plugin => plugin()),
});
