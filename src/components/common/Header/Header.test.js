import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'
import Icon from '../Icon'
import logo from '../../../icons/ig-logo.png'

test('Header renders', () => {
  const component = renderer.create(
    <Header
      option="Sign In"
      text="Instagram-Clone"
      icon={
        <Icon image={logo} alt="Instagram icon" className="iconContainer" />
      }
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
