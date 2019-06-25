import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('Should render ExpenseDashboardPage', () => {
  const wrapper = shallow(<ExpenseDashboardPage expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});