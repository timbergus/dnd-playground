import styled from 'styled-components'
import { FC, useContext, useState } from 'react'
import { DndContext, DragEndEvent, pointerWithin } from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'

import { Item } from '../dnd.types'
import { DnDContext } from '../dnd.context'
import { MemoizedCardComponent } from '../CardComponent/CardComponent'
import { MemoizedHeaderComponent } from '../HeaderComponent/HeaderComponent'

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 100%;
`

const App: FC = () => {
  const { cards, selectedId, setSelectedId } = useContext(DnDContext)

  const itemsStructure: Record<string, Item> = {}

  cards.forEach((card) => (itemsStructure[card.id] = card))

  const [items, setItems] = useState<string[]>(cards.map((index) => index.id))

  const handleDragEnd = ({ over }: DragEndEvent): void => {
    if (over) {
      const overIndex = Number(items.indexOf(over.id))
      const selectedIndex = Number(items.indexOf(selectedId))

      if (selectedIndex !== overIndex) {
        setItems((cards) => arrayMove(cards, selectedIndex, overIndex))
      }
    }

    setSelectedId('')
  }

  return (
    <DndContext
      onDragStart={({ active }) => {
        setSelectedId(active.id)
      }}
      onDragEnd={handleDragEnd}
      collisionDetection={pointerWithin}
    >
      <SortableContext items={items}>
        <CardsContainer>
          {items.map((id) =>
            itemsStructure[id].type === 'header' ? (
              <MemoizedHeaderComponent key={id} item={itemsStructure[id]} />
            ) : (
              <MemoizedCardComponent key={id} item={itemsStructure[id]} />
            )
          )}
        </CardsContainer>
      </SortableContext>
    </DndContext>
  )
}

export default App
