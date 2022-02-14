import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

type DnDContextProps = {
  selectedIndex: number
  setSelectedIndex: Dispatch<SetStateAction<number>>
}

const DnDContext = createContext<DnDContextProps>({} as DnDContextProps)

type DnDContextProviderProps = {
  children: ReactNode
}

const DnDContextProvider: FC<DnDContextProviderProps> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)

  return (
    <DnDContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex,
      }}
    >
      {children}
    </DnDContext.Provider>
  )
}

export { DnDContext, DnDContextProvider }
