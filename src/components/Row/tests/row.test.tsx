import { render, screen } from '@testing-library/react'

import { Row } from '../Row'

describe('Row should', () => {
  test('be in the document.', () => {
    render(<Row columnIndex={3} rowIndex={5} style={{}} data={null} />)
    expect(screen.getByText('R: 5 C: 3')).toBeInTheDocument()
  })
})
