import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { describe, it, expect } from 'vitest';

/**
 * Teste unitário para o componente Header.
 * Garante que a navegação essencial está sendo renderizada corretamente.
 */
describe('Componente Header', () => {
  it('deve renderizar os links de navegação principais', () => {
    render(<Header />);
    
    // Verifica se os links principais que estavam no seu HTML antigo aparecem aqui
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Projetos/i)).toBeInTheDocument();
    expect(screen.getByText(/Contato/i)).toBeInTheDocument();
  });
});