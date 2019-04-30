import React from 'react'
import renderer from 'react-test-renderer'
import SignInForm from './SignInForm'

test('LoginContainer renders', () => {
  const component = renderer.create(<SignInForm />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
