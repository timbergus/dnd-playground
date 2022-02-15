import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

import { Item } from './dnd.types'

const NUMBER_OF_ITEMS = 50

type DnDContextProps = {
  cards: Item[]
  setCards: Dispatch<SetStateAction<Item[]>>
  selectedId: string
  setSelectedId: Dispatch<SetStateAction<string>>
}

const DnDContext = createContext<DnDContextProps>({} as DnDContextProps)

type DnDContextProviderProps = {
  children: ReactNode
}

const getInitialCards = (items: number): Item[] =>
  Array(items)
    .fill({})
    .map((_, index) => ({
      id: index.toString(),
      value: index,
      type: index % 10 === 0 ? 'header' : 'card',
      title: index % 10 === 0 ? 'This is a Header. Behold!' : undefined,
    }))

const DnDContextProvider: FC<DnDContextProviderProps> = ({ children }) => {
  const [cards, setCards] = useState<Item[]>(getInitialCards(NUMBER_OF_ITEMS))
  const [selectedId, setSelectedId] = useState<string>('')

  return (
    <DnDContext.Provider
      value={{
        cards,
        setCards,
        selectedId,
        setSelectedId,
      }}
    >
      {children}
    </DnDContext.Provider>
  )
}

export { DnDContext, DnDContextProvider }
