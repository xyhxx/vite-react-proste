import PrivateRoutes from '@routes';
import {BrowserRouter as Router} from 'react-router-dom';
import {fireEvent, render, screen as sc} from '@testing-library/react';
import {test, expect} from 'vitest';

test(`
  1. click increment btn, innterHTML is count is 1
  2. click reduce btn, innertTHML is count is 0
`, () => {
  render(
    <Router>
      <PrivateRoutes />
    </Router>,
  );

  const incrementBtn = sc.getByTestId('increment');
  const reduceBtn = sc.getByTestId('reduce');
  const html = sc.getByTestId('title');

  fireEvent.click(incrementBtn);

  expect(html.innerHTML).toBe('count is 1');

  fireEvent.click(reduceBtn);

  expect(html.innerHTML).toBe('count is 0');
});
