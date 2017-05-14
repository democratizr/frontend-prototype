import glamorous from 'glamorous';
import { CSSProperties } from 'glamorous/typings/css-properties';
import * as React from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import Icon from './Icon';
import TextInput from './TextInput';
import { Theme } from '../config';
import { actions, State } from '../reducers/location';
import { medium } from '../styles/breakpoints';
import { percent, px, rem } from '../styles/sizes';


const fieldStyle = (props, theme: Theme): CSSProperties => ({
  padding: rem(1/2),
  border: 0,
  borderRadius: px(4),
  boxShadow: `${px(0, 1, 1)} ${theme.colors.headerFieldShadow}`,
  ...theme.colors.field,
});

const locationIconStyle = {
  width: rem(1),
  height: rem(1),
  marginRight: rem(1/4)
};

const MyLocation = glamorous.div(fieldStyle, (props, theme: Theme) => ({
  display: 'flex',
  alignItems: 'center',
  ...theme.typography.bold,
  cursor: 'default'
}));

const MyLocationIcon = glamorous(Icon)(locationIconStyle);

const MyLocationClearButton = glamorous(Button)({
  marginLeft: rem(1/2)
});

const HeaderMyLocation = props => {
  const {
    onClear,
    ...rest
  } = props;

  return (
    <MyLocation {...rest}>
      <MyLocationIcon iconTheme="dark" name="location" />
        My Location
      <MyLocationClearButton onClick={onClear}>⨉</MyLocationClearButton>
    </MyLocation>
  );
};

const LocationSubmitButton = glamorous(Button)({
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'content-box',
  position: 'absolute',
  top: percent(50),
  right: rem(1/4),
  width: rem(1),
  height: rem(1),
  marginTop: rem(-3/4),
  border: 0,
  padding: rem(1/4),
  background: 'transparent',

  [medium]: {
    width: rem(1.5),
    height: rem(1.5),
    right: rem(1/2),
    padding: 0
  }
});

const HeaderLocationSubmitButton = () => {
  return (
    <LocationSubmitButton>
      <Icon iconTheme="brand" name="circleChevronKnockout" />
    </LocationSubmitButton>
  );
};

const LocationFieldIcon = glamorous(Icon)(locationIconStyle, {
  position: 'absolute',
  top: percent(50),
  left: rem(1/2),
  marginTop: rem(-1/2),

  [medium]: {
    width: rem(1.5),
    height: rem(1.5),
    marginTop: rem(-3/4)
  }
});

const HeaderLocationFieldIcon = () => {
  return (
    <LocationFieldIcon name="location" />
  );
};

const LocationInput = glamorous(TextInput)(fieldStyle, {
  width: percent(100),
  height: rem(2),
  padding: rem(1/2, 2),

  [medium]: {
    height: rem(2.5),
    paddingLeft: rem(2.5),
  },
});

const LocationField = glamorous.div({
  position: 'relative',
  flex: 1,
  marginRight: rem(1)
});

const HeaderLocationField = () => {
  return (
    <LocationField>
      <HeaderLocationFieldIcon />
      <LocationInput autoFocus={true} />
      <HeaderLocationSubmitButton />
    </LocationField>
  );
};

const BaseHeaderLocation = ({ cancelDetection, location }) => {
  if (location.isDetected) {
    return (
      <div>
        <HeaderMyLocation onClear={cancelDetection} />
      </div>
    );
  }

  return (
    <HeaderLocationField />
  );
};

type StateProps = {
  location: State
};

const mapStateToProps = ({ location }: StateProps): StateProps => ({ location });

type DispatchProps = {
  cancelDetection: () => void
};

const mapDispatchToProps = (dispatch): DispatchProps => {
  return {
    cancelDetection: () => {
      dispatch({ type: actions.CANCEL_DETECTION });
    }
  };
};

const HeaderLocation = connect(mapStateToProps, mapDispatchToProps)(BaseHeaderLocation);

export default HeaderLocation;
