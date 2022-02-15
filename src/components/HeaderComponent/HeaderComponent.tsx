import styled from 'styled-components'
import { FC, memo, useContext } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { DnDContext } from '../dnd.context'
import { Item } from '../dnd.types'
import { Handler } from '../dnd.ui'
import { areEqual } from '../dnd.utils'

type ContainerProps = {
  $index: number
}

const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: green;
  box-sizing: border-box;
`

type HeaderComponentProps = {
  item: Item
  isDragOverlay?: boolean
}

export const HeaderComponent: FC<HeaderComponentProps> = ({
  item,
  isDragOverlay,
}) => {
  const { selectedId } = useContext(DnDContext)
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id })

  const isBeingDragged = item.id === selectedId

  const dragStyle = {
    transform: transform
      ? CSS.Transform.toString({
          ...transform,
          scaleX: 1,
          scaleY: 1,
        })
      : undefined,
    transition,
    // Custom styles for dragging.
    opacity: isBeingDragged && !isDragOverlay ? 0.2 : 1,
    borderColor: isBeingDragged ? 'red' : undefined,
    boxShadow: isBeingDragged ? '0px 2px 38px rgba(0, 0, 0, 0.3)' : undefined,
  }

  return (
    <Container
      ref={setNodeRef}
      style={{ ...dragStyle }}
      $index={Number(item.id)}
    >
      <Handler
        style={{ cursor: isBeingDragged ? 'grabbing' : 'grab' }}
        {...listeners}
        {...attributes}
      />
      {item.title}
    </Container>
  )
}

export const MemoizedHeaderComponent = memo(HeaderComponent, areEqual)
