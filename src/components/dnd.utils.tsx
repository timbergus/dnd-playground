import { CardComponentProps } from './CardComponent/CardComponent'

export const areEqual = (
  prevProps: CardComponentProps,
  nextProps: CardComponentProps
): boolean => prevProps.item.id === nextProps.item.id
