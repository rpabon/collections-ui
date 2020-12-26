import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { CollectionTitle } from '../components/CollectionTitle/CollectionTitle';

test('Should update title correctly', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <CollectionTitle />
    </Provider>
  );

  const input = getByTestId('title-input');
  expect(input).toHaveValue('Title 1');

  fireEvent.change(input, { target: { value: 'New Title' } });
  fireEvent.blur(input);
  expect(input).toHaveValue('New Title');

  fireEvent.change(input, { target: { value: '' } });
  fireEvent.blur(input);
  expect(input).toHaveValue('New Title');
});
