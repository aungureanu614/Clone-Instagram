import React from 'react'
import renderer from 'react-test-renderer'
import RegisterForm from './RegisterForm'

test('RegisterContainer renders', () => {
  const component = renderer.create(<RegisterForm />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
