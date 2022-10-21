import React from "react";

interface ErrorBoundariesProps {
  children: any
}

interface ErrorBoundariesState {
  hasError: boolean
}

class ErrorBoundaries extends React.Component {

  readonly state: ErrorBoundariesState

  constructor(readonly props: ErrorBoundariesProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.log(error)
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state['hasError']) {
      return <p className="movies--empty-list">No movies found</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundaries;
