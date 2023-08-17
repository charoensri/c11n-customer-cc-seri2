import { withKnobs } from '@storybook/addon-knobs';

import Customorg2ExtensionsMyCase1 from './index.jsx';

import historyData from './mock.stories';

export default {
  title: 'Customorg2ExtensionsMyCase1',
  decorators: [withKnobs],
  component: Customorg2ExtensionsMyCase1
};

if (!window.PCore) {
  window.PCore = {};
}

window.PCore.getConstants = () => {
  return {
    CASE_INFO: {
      CASE_INFO_ID: 'caseInfo.ID'
    }
  };
};

window.PCore.getLocaleUtils = () => {
  return {
    getLocaleValue: value => {
      return value;
    }
  };
};

window.PCore.getDataApiUtils = () => {
  return {
    getData: () => {
      return new Promise(resolve => {
        resolve(historyData);
      });
    }
  };
};

export const baseCustomorg2ExtensionsMyCase1 = () => {

  const props = {
    label: 'Case history',

    getPConnect: () => {
      return {
        getValue: value => {
          return value;
        },
        getContextName: () => {
          return 'app/primary_1';
        },
        getLocalizedValue: value => {
          return value;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: () => {/* nothing */},
            triggerFieldChange: () => {/* nothing */}
          };
        },
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      };
    }
};

return (
    <>
      <Customorg2ExtensionsMyCase1 {...props} />
    </>
  );
};
