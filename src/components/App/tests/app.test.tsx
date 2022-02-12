import { render } from '@testing-library/react'

import App from '../App'

describe('App should', () => {
  test('be in the document.', () => {
    const { container } = render(<App />)
    expect(container).toBeInTheDocument()
  })
})
