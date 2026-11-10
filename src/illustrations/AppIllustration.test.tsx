import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AppIllustration, ILLUSTRATION_NAMES, type IllustrationName } from './AppIllustration';

// Una escena que falla al cargar, como un trozo que ya no existe tras un despliegue.
vi.mock('./scenes/IllustrationTroubleshooting', () => ({
  default: () => {
    throw new TypeError('Failed to fetch dynamically imported module: /assets/IllustrationTroubleshooting-viejo.js');
  },
}));

const TITLES: Record<Exclude<IllustrationName, 'troubleshooting'>, string> = {
  processing: 'Procesando',
  ok: 'Listo',
  'no-data': 'Sin datos',
  'search-empty': 'Sin resultados de búsqueda',
  'load-error': 'No se pudo cargar',
  'not-found': 'Página no encontrada',
};

describe('AppIllustration', () => {
  it('trae las siete, en el orden en que se documentan', () => {
    expect(ILLUSTRATION_NAMES).toEqual(['processing', 'ok', 'troubleshooting', 'no-data', 'search-empty', 'load-error', 'not-found']);
  });

  it.each(Object.entries(TITLES))('«%s» es una imagen con su título por defecto y carga su escena', async (name, title) => {
    render(<AppIllustration name={name as IllustrationName} />);
    const img = screen.getByRole('img', { name: title });
    await waitFor(() => expect(img.querySelector(`svg.cei-ill.cei-ill-s-${name}`)).not.toBeNull());
  });

  it('el título que pasa el producto sustituye al de por defecto', async () => {
    render(<AppIllustration name="ok" title="Validación sin errores" />);
    expect(screen.getByRole('img', { name: 'Validación sin errores' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Listo' })).not.toBeInTheDocument();
  });

  it('en pequeño mide 132 px de alto, para un diálogo o una tarjeta', async () => {
    render(<AppIllustration name="no-data" size="small" />);
    expect(screen.getByRole('img', { name: 'Sin datos' })).toHaveStyle({ height: '132px', maxWidth: '192px' });
  });

  it('si una escena falla al cargar, la página sigue sin ella', async () => {
    render(
      <div>
        <h1>Título de la página</h1>
        <AppIllustration name="troubleshooting" />
        <p>El resto de la página sigue visible</p>
      </div>,
    );
    expect(screen.getByRole('heading', { name: 'Título de la página' })).toBeInTheDocument();
    expect(screen.getByText('El resto de la página sigue visible')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByRole('img', { name: 'Error en el proceso' })).not.toBeInTheDocument());
  });

  it('después de un fallo, otra ilustración se muestra', async () => {
    const { rerender } = render(<AppIllustration name="troubleshooting" />);
    await waitFor(() => expect(screen.queryByRole('img', { name: 'Error en el proceso' })).not.toBeInTheDocument());
    rerender(<AppIllustration name="ok" title="Proceso terminado" />);
    expect(await screen.findByRole('img', { name: 'Proceso terminado' })).toBeInTheDocument();
  });
});
