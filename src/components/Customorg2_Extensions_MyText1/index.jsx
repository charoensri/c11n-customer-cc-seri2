import PropTypes from 'prop-types';
import { Input, Label } from '@pega/cosmos-react-core';

import StyledCustomorg2ExtensionsMyText1Wrapper from './styles';


// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
const Customorg2ExtensionsMyText1 = props => {
  const { getPConnect, value, placeholder, disabled, readOnly, required, label, testId } = props;

  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const propName = pConn?.getStateProps()?.value;

  const handleOnChange = event => {
    const { value: updatedValue } = event.target;
    actions.updateFieldValue(propName, updatedValue);
  };

  return (
    <StyledCustomorg2ExtensionsMyText1Wrapper>
      <Label>{label}</Label>
      <Input
        type='text'
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        onChange={handleOnChange}
        testId={testId}
      />
    </StyledCustomorg2ExtensionsMyText1Wrapper>
  );
};

Customorg2ExtensionsMyText1.defaultProps = {
  value: '',
  placeholder: '',
  disabled: false,
  readOnly: false,
  required: false,
  testId: null
};

Customorg2ExtensionsMyText1.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  getPConnect: PropTypes.func.isRequired,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  testId: PropTypes.string
};

export default Customorg2ExtensionsMyText1;
