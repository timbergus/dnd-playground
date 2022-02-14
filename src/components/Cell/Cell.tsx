import styled from 'styled-components'
import { FC, useContext } from 'react'
import { GridChildComponentProps } from 'react-window'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { COLUMN_COUNT } from '../App/App'
import { DnDContext } from '../contexts/dnd.context'

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
  box-sizing: border-box;
  background-color: ${({ $index }) =>
    $index % 2 === 0 ? 'white' : 'lightgrey'};

  &:hover {
    cursor: grab;
  }
`

export const Cell: FC<GridChildComponentProps> = ({
  columnIndex,
  rowIndex,
  style,
  data,
}) => {
  const { selectedIndex } = useContext(DnDContext)
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: data[getIndex(columnIndex, rowIndex)] })

  const isBeingDragged = getIndex(columnIndex, rowIndex) === selectedIndex

  const dragStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    // Custom styles for dragging.
    zIndex: isBeingDragged ? 10000 : undefined,
    borderColor: isBeingDragged ? 'red' : undefined,
    cursor: isBeingDragged ? 'grabbing' : 'grab',
    boxShadow: isBeingDragged ? '0px 2px 38px rgba(0, 0, 0, 0.3)' : undefined,
  }

  return (
    <Container
      ref={setNodeRef}
      style={{ ...style, ...dragStyle }}
      {...attributes}
      {...listeners}
      $index={data[getIndex(columnIndex, rowIndex)]}
    >
      {data[getIndex(columnIndex, rowIndex)]}
    </Container>
  )
}
