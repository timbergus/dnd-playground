import styled from 'styled-components'
import { FC } from 'react'
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

export const Row: FC<ListChildComponentProps> = ({ data, index, style }) => (
  <Container style={style} $index={index}>
    Index: {data[index]}
  </Container>
)
