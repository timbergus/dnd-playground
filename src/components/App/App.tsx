import AutoSizer from 'react-virtualized-auto-sizer'
import { FC } from 'react'
import { FixedSizeList } from 'react-window'

import { Row } from '../Row/Row'

const App: FC = () => (
  <AutoSizer>
    {({ width, height }) => (
      <FixedSizeList
        width={width}
        height={height}
        itemCount={40000}
        itemSize={30}
      >
        {Row}
      </FixedSizeList>
    )}
  </AutoSizer>
)

export default App
