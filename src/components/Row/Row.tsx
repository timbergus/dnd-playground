import styled from 'styled-components'
import { FC, useEffect } from 'react'
import { GridChildComponentProps } from 'react-window'

type ContainerProps = {
  $rowIndex: number
  $columnIndex: number
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $rowIndex, $columnIndex }) => {
    if ($columnIndex % 2) {
      return $rowIndex % 2 === 0 ? 'white' : 'lightgrey'
    } else {
      return $rowIndex % 2 ? 'white' : 'lightgrey'
    }
  }};
`

export const Row: FC<GridChildComponentProps> = ({
  columnIndex,
  rowIndex,
  style,
}) => {
  useEffect(() => {
    console.log('R:', rowIndex, 'C:', columnIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container style={style} $rowIndex={rowIndex} $columnIndex={columnIndex}>
      R: {rowIndex} C: {columnIndex}
    </Container>
  )
}
