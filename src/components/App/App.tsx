import AutoSizer from 'react-virtualized-auto-sizer'
import { FC } from 'react'
import { FixedSizeGrid } from 'react-window'

import { Row } from '../Row/Row'

const App: FC = () => (
  <AutoSizer>
    {({ width, height }) => (
      <FixedSizeGrid
        width={width}
        height={height}
        columnCount={1000}
        columnWidth={200}
        rowCount={40000}
        rowHeight={32}
      >
        {Row}
      </FixedSizeGrid>
    )}
  </AutoSizer>
)

export default App
