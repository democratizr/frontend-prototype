import glamorous from 'glamorous';
import * as React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

import Button from './Button';
import Icon from './Icon';
import { medium } from '../styles/breakpoints';
import { rem } from '../styles/sizes';


const StyledBackButton = glamorous(Button)({
  width: rem(3/4),
  height: rem(3/4),
  border: 0,
  padding: 0,
  background: 'transparent',

  [medium]: {
    width: rem(1),
    height: rem(1),
  },
});

const BaseBackButton = ({ goBack }) => {
  return (
    <StyledBackButton onClick={goBack}>
      <Icon iconTheme="light" name="chevronLeft" />
    </StyledBackButton>
  );
};

type DispatchProps = {
  goBack: () => void
};

const mapDispatchToProps = (dispatch): DispatchProps => {
  return {
    goBack: () => {
      dispatch(goBack());
    }
  };
};

const HeaderBackButton = connect(null, mapDispatchToProps)(BaseBackButton);

export default HeaderBackButton;
