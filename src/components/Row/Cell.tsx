import styled from 'styled-components'
import { FC } from 'react'
import { GridChildComponentProps } from 'react-window'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { COLUMN_COUNT } from '../App/App'

const getIndex = (columnIndex: number, rowIndex: number): number =>
  columnIndex + COLUMN_COUNT * rowIndex

type ContainerProps = {
  $index: number
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
  background-color: ${({ $index }) =>
    $index % 2 === 0 ? 'white' : 'lightgrey'};
`

export const Cell: FC<GridChildComponentProps> = ({
  columnIndex,
  rowIndex,
  style,
  data,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: data[getIndex(columnIndex, rowIndex)] })

  const dragStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Container
      ref={setNodeRef}
      style={{ ...style, ...dragStyle }}
      {...attributes}
      {...listeners}
      $index={data[getIndex(columnIndex, rowIndex)]}
    >
      Index: {data[getIndex(columnIndex, rowIndex)]}
    </Container>
  )
}
