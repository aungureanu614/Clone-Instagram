import React from 'react'
import renderer from 'react-test-renderer'
import Image from './Image'
import image from '../../../images/ig-logo.png'

test('Image renders', () => {
  const component = renderer.create(
    <Image image={image} alt="Instagram Icon" className="Icon" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
