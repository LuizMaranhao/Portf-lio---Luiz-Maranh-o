/* Comentário: Teste unitário para validar a renderização do portfólio */
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Home from '../app/page'; // Caminho para sua página principal

test('Verifica se o nome Luiz Maranhão aparece na tela', () => {
  render(<Home />);
  
  // Procura pelo seu nome no documento (ignorando maiúsculas/minúsculas)
  const nameElement = screen.getByText(/Luiz Maranhão/i);
  
  // O teste passa se o elemento for encontrado
  expect(nameElement).toBeDefined();
});

test('Verifica se o título profissional está correto', () => {
  render(<Home />);
  
  // Alterado para procurar "Desenvolvedor Full Stack" que é o que está no seu HTML
  const jobTitle = screen.getByText(/Desenvolvedor Full Stack/i);
  expect(jobTitle).toBeDefined();
});
