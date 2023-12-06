import { type ReactNode, Component, type ErrorInfo } from "react";
import { Page } from "lotti/components/Page";
import { logger } from "lotti/util/logger";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error("Uncaught error:", { error, errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Page>
          <div className="prose">
            <h1>Something went wrong.</h1>
            <p>Try reloading the page.</p>
          </div>
        </Page>
      );
    }

    return this.props.children;
  }
}
