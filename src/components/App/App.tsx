import AutoSizer from 'react-virtualized-auto-sizer'
import { FC, useState } from 'react'
import { FixedSizeGrid } from 'react-window'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'

import { Cell } from '../Row/Cell'

const ELEMENTS = 10000

export const COLUMN_COUNT = 5
const ROW_COUNT = ELEMENTS / COLUMN_COUNT

const getInitialState = (): string[] =>
  Array(COLUMN_COUNT * ROW_COUNT)
    .fill(false)
    .map((_, index) => index.toString())

const App: FC = () => {
  const [cells, setCells] = useState(getInitialState())

  const getIndex = (id?: string): number => (id ? cells.indexOf(id) : -1)

  const [activeIndex, setActiveIndex] = useState<number>(getIndex())

  const handleDragEnd = ({ active, over }: DragEndEvent): void => {
    console.log(activeIndex)

    if (over) {
      const overIndex = getIndex(over.id)
      if (activeIndex !== overIndex) {
        setCells((cells) => arrayMove(cells, activeIndex, overIndex))
      }
    }

    setActiveIndex(-1)
  }

  return (
    <DndContext
      onDragStart={({ active }) => {
        setActiveIndex(getIndex(active.id))
      }}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={cells}>
        <AutoSizer>
          {({ width, height }) => (
            <FixedSizeGrid
              width={width}
              height={height}
              columnCount={COLUMN_COUNT}
              columnWidth={200}
              rowCount={ROW_COUNT}
              rowHeight={200}
              itemData={cells}
            >
              {Cell}
            </FixedSizeGrid>
          )}
        </AutoSizer>
      </SortableContext>
    </DndContext>
  )
}

export default App
