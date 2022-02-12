import styled from 'styled-components'
import { FC, useEffect } from 'react'
import { ListChildComponentProps } from 'react-window'

type ContainerProps = {
  $index: number
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $index }) =>
    $index % 2 === 0 ? 'white' : 'lightgrey'};
`

export const Row: FC<ListChildComponentProps> = ({ index, style }) => {
  useEffect(() => {
    console.log('Index:', index)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container style={style} $index={index}>
      Index: {index}
    </Container>
  )
}
