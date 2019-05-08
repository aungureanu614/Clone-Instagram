import React from 'react'
import renderer from 'react-test-renderer'
import Icon from './Icon'
import icon from '../../../images/ig-logo.png'

test('Icon renders', () => {
  const component = renderer.create(
    <Icon image={icon} alt="Instagram Icon" className="Icon" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
