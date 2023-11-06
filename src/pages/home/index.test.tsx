import routes from '@routes';
import {RouterProvider} from 'react-router-dom';
import {fireEvent, render} from '@testing-library/react';

it(`
    1. click increment btn, innterHTML is count is 1
    2. click reduce btn, innertTHML is count is 0
  `, function () {
  const {getByTestId} = render(<RouterProvider router={routes} />);

  const incBtn = getByTestId('inc_btn');
  const decBtn = getByTestId('dec_btn');

  fireEvent.click(incBtn);

  expect(getByTestId('title').innerHTML).toBe('count is 1');

  fireEvent.click(decBtn);

  expect(getByTestId('title').innerHTML).toBe('count is 0');
});
