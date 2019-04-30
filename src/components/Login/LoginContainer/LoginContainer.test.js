import React from 'react'
import renderer from 'react-test-renderer'
import LoginContainer from './LoginContainer'

test('LoginContainer renders', () => {
  const component = renderer.create(<LoginContainer />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
