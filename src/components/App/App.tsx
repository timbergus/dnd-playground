import AutoSizer from 'react-virtualized-auto-sizer'
import { FC, useState } from 'react'
import { FixedSizeList } from 'react-window'

import { Row } from '../Row/Row'

const getInitialData = (): string[] =>
  Array(40000)
    .fill(false)
    .map((_, index) => index.toString())

const App: FC = () => {
  const [rows, setRows] = useState(getInitialData())

  return (
    <AutoSizer>
      {({ width, height }) => (
        <FixedSizeList
          width={width}
          height={height}
          itemCount={40000}
          itemSize={30}
          itemData={rows}
        >
          {Row}
        </FixedSizeList>
      )}
    </AutoSizer>
  )
}

export default App
