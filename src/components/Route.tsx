import * as React from 'react';
import { connect } from 'react-redux';
import { Route as LibRoute } from 'react-router-dom';

import { Route as RouteConfig } from '../config';
import { actions } from '../reducers/title';


type DispatchProps = {
  setTitle: (title: string) => void
};

type Props = DispatchProps & RouteConfig;

const setDocumentTitle = (title: string): void => {
  if (title !== 'Democratizr') {
    title = `${title} – Democratizr`;
  }
  document.title = title;
};

class BaseRoute extends React.Component<Props, {}> {
  setTitle() {
    const {
      setTitle,
      title,
    } = this.props;
    setTitle(title);
    setDocumentTitle(title);
  }

  componentWillMount() { this.setTitle(); }
  componentWillReceiveProps() { this.setTitle(); }

  render() {
    const {
      setTitle,
      title,
      ...props,
    } = this.props;

    return (
      <LibRoute {...props} />
    );
  }
}

const mapDispatchToProps = (dispatch): DispatchProps => {
  return {
    setTitle: (title) => {
      dispatch({ type: actions.SET_TITLE, title: title });
    }
  };
};

const Route = connect<void, DispatchProps, RouteConfig>(null, mapDispatchToProps)(BaseRoute);

export default Route;
