import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'

test('Header renders', () => {
  const component = renderer.create(
    <Header option="Sign In" text="Instagram-Clone" icon="Icon" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
