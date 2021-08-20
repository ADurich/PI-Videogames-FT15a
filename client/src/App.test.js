import { render, screen } from '@testing-library/react';
import App from './App';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './components/Home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

configure({adapter: new Adapter()});

describe('Estructura', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Home />);
    })

    it('Home tiene que renderizar 3 <select>', () => {
      expect(wrapper.find('select')).toHaveLength(3)
    })
  })