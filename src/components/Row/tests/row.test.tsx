import { render, screen } from '@testing-library/react'

import { Row } from '../Row'

describe('Row should', () => {
  test('be in the document.', () => {
    render(<Row index={3} style={{}} data={null} />)
    expect(screen.getByText('Index: 3')).toBeInTheDocument()
  })
})
