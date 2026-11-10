import { Box, type SxProps, type Theme } from '@mui/material';
import React, { Suspense, lazy } from 'react';

export type IllustrationName =
  | 'processing'
  | 'ok'
  | 'troubleshooting'
  | 'no-data'
  | 'search-empty'
  | 'load-error'
  | 'not-found'
  | 'forbidden'
  | 'restricted'
  | 'session-closed';

export type IllustrationSize = 'large' | 'small';

export interface AppIllustrationProps {
  name: IllustrationName;
  size?: IllustrationSize;
  title?: string;
  sx?: SxProps<Theme>;
}

// El nombre accesible si el producto no pasa uno. Son genéricos: cada pantalla pasa el suyo
// («Procesando el XTF», «Validación sin errores»).
const DEFAULT_TITLES: Record<IllustrationName, string> = {
  processing: 'Procesando',
  ok: 'Listo',
  troubleshooting: 'Error en el proceso',
  'no-data': 'Sin datos',
  'search-empty': 'Sin resultados de búsqueda',
  'load-error': 'No se pudo cargar',
  'not-found': 'Página no encontrada',
  forbidden: 'Sin permiso',
  restricted: 'Registro restringido',
  'session-closed': 'Sesión cerrada',
};

// Los nombres, en el orden en que se documentan: un proceso, los datos y el acceso.
export const ILLUSTRATION_NAMES = Object.keys(DEFAULT_TITLES) as IllustrationName[];

const LAZY_MAP: Record<IllustrationName, React.LazyExoticComponent<React.FC>> = {
  processing: lazy(() => import('./scenes/IllustrationProcessing')),
  ok: lazy(() => import('./scenes/IllustrationOk')),
  troubleshooting: lazy(() => import('./scenes/IllustrationTroubleshooting')),
  'no-data': lazy(() => import('./scenes/IllustrationNoData')),
  'search-empty': lazy(() => import('./scenes/IllustrationSearchEmpty')),
  'load-error': lazy(() => import('./scenes/IllustrationLoadError')),
  'not-found': lazy(() => import('./scenes/IllustrationNotFound')),
  forbidden: lazy(() => import('./scenes/IllustrationForbidden')),
  restricted: lazy(() => import('./scenes/IllustrationRestricted')),
  'session-closed': lazy(() => import('./scenes/IllustrationSessionClosed')),
};

interface IllustrationErrorBoundaryProps {
  children: React.ReactNode;
}

interface IllustrationErrorBoundaryState {
  hasError: boolean;
}

class IllustrationErrorBoundary extends React.Component<
  IllustrationErrorBoundaryProps,
  IllustrationErrorBoundaryState
> {
  constructor(props: IllustrationErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): IllustrationErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // Si falla el fragmento de la ilustración (p. ej. hash obsoleto tras un despliegue),
    // la página sigue sin ella y el error no se propaga al resto de la interfaz.
    console.warn(
      'No se pudo cargar la ilustración; la página continúa sin ella:',
      error instanceof Error ? error.message : error,
    );
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export const AppIllustration: React.FC<AppIllustrationProps> = ({
  name,
  size = 'large',
  title,
  sx,
}) => {
  const accessibleTitle = title ?? DEFAULT_TITLES[name] ?? 'Ilustración';
  const LazyComponent = LAZY_MAP[name];

  return (
    // Con otra ilustración el límite empieza de cero, aunque la anterior fallara.
    <IllustrationErrorBoundary key={name}>
      <Box
        component="div"
        role="img"
        aria-label={accessibleTitle}
        sx={[
          {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: 0,
            flexShrink: 0,
            boxSizing: 'border-box',
            '& svg': {
              display: 'block',
              width: '100%',
              height: 'auto',
            },
          },
          size === 'large'
            ? {
                width: '100%',
                maxWidth: { xs: 312, sm: 360, md: 384 },
                height: { xs: 216, sm: 240, md: 264 },
                minHeight: { xs: 216, sm: 240, md: 264 },
                maxHeight: { xs: 216, sm: 240, md: 264 },
                mx: 'auto',
                overflow: 'hidden',
                '& svg': {
                  width: 'auto',
                  maxWidth: '100%',
                  maxHeight: { xs: 216, sm: 240, md: 264 },
                },
              }
            : {
                width: '100%',
                maxWidth: 192,
                height: 132,
                minHeight: 132,
                maxHeight: 132,
                mx: 'auto',
                mb: 1,
                overflow: 'hidden',
                '& svg': {
                  width: 'auto',
                  maxWidth: '100%',
                  maxHeight: 132,
                },
              },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <Suspense fallback={<Box sx={{ width: '100%', height: '100%' }} />}>
          {LazyComponent ? <LazyComponent /> : null}
        </Suspense>
      </Box>
    </IllustrationErrorBoundary>
  );
};
