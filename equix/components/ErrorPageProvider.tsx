import React, { ReactNode } from "react";
import { ErrorPage } from "./ErrorPage";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public override state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public override render() {
    if (this.state.hasError || !this.props.children) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}
