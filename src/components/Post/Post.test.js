import React from 'react'
import renderer from 'react-test-renderer'
import Post from './Post'

test('Post renders', () => {
  const component = renderer.create(
    <Post
      nickname="Post"
      avatar="http://placekitten.com/200/300"
      caption="this is a kitty"
      image="http://placekitten.com/200/300"
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
