import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

beforeEach(() => {
  global.fetch = jest.fn((url) =>
    Promise.resolve({
      json: () =>
        Promise.resolve(
          url.includes('services')
            ? [{ id: 1, nom: 'Repas équilibrés', description: 'x', icone: '🍎' }]
            : { nom: 'Ma Garderie', description: 'd', adresse: 'a', telephone: 't', horaires: 'h' }
        )
    })
  );
});

test("affiche le titre « Ma Garderie »", async () => {
  render(<Home />);
  expect(screen.getByText('Ma Garderie')).toBeInTheDocument();
  expect(await screen.findByText('Repas équilibrés')).toBeInTheDocument();
});
