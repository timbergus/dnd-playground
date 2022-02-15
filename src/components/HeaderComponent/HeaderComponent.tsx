import styled from 'styled-components'
import { FC, useContext } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { DnDContext } from '../dnd.context'
import { Item } from '../dnd.types'

type ContainerProps = {
  $index: number
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  background-color: green;
  box-sizing: border-box;

  &:hover {
    cursor: grab;
  }
`

type HeaderComponentProps = {
  item: Item
}

export const HeaderComponent: FC<HeaderComponentProps> = ({ item }) => {
  const { selectedId } = useContext(DnDContext)
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id })

  const isBeingDragged = item.id === selectedId

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
      style={{ ...dragStyle }}
      {...attributes}
      {...listeners}
      $index={Number(item.id)}
    >
      {item.title}
    </Container>
  )
}