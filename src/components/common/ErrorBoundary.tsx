import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('GaliPharm render exception:', error, errorInfo);
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 text-center font-sans">
          <div className="max-w-md p-8 rounded-2xl bg-slate-900 border border-emerald-500/30 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center font-bold text-xl">
              G
            </div>
            <h2 className="text-2xl font-bold text-white font-['Montserrat']">
              GaliPharm
            </h2>
            <p className="text-sm text-slate-300">
              Une interruption d’affichage a été évitée. Cliquez ci-dessous pour actualiser l’application.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                if (typeof window !== 'undefined') {
                  window.location.reload();
                }
              }}
              className="px-6 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md cursor-pointer"
            >
              Actualiser le site
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
