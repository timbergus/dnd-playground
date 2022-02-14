import { render, screen } from '@testing-library/react'

import { Cell } from '../Cell'

describe('Cell should', () => {
  test('be in the document.', () => {
    render(<Cell columnIndex={3} rowIndex={5} style={{}} data={null} />)
    expect(screen.getByText('R: 5 C: 3')).toBeInTheDocument()
  })
})
