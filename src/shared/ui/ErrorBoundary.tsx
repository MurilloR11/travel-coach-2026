import { Component } from 'react'
import type { ReactNode, ErrorInfo } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.error('[ErrorBoundary]', error, info.componentStack)
    }
    // TODO: send to monitoring service (Sentry, etc.) in production
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-brand-navy px-6 text-center">
          <p className="font-display text-[22px] font-semibold text-brand-off-white">
            Algo salió mal
          </p>
          <p className="text-[15px] text-brand-slate">
            Ocurrió un error inesperado. Por favor recarga la página.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 rounded-lg bg-brand-amber px-5 py-2.5 font-mono text-sm font-semibold text-brand-navy"
          >
            Recargar
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
