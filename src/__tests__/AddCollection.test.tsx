import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { SideBar } from '../components/SideBar/SideBar';

const buttonId = 'add-collection-button';
const listId = 'collection-list';

test('Should add a collection when the button is clicked', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <SideBar />
    </Provider>
  );

  expect(getByTestId(listId).children).toHaveLength(1);
  expect(getByTestId(listId).children[0]).toHaveTextContent('Title 1');
  
  fireEvent.click(getByTestId(buttonId));
  expect(getByTestId(listId).children).toHaveLength(2);
  expect(getByTestId(listId).children[1]).toHaveTextContent('Title 2');
});
