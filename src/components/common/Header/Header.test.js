import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

import Header from './Header'

test('Header renders', () => {
  const component = renderer.create(
    <BrowserRouter>
      <Header option="Sign In" text="Instagram-Clone" icon="Icon" />
    </BrowserRouter>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
