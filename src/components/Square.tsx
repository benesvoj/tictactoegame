import styled from 'styled-components'

interface SquareProps {
  index: number
  value: string
  onSquareClick(index: number): void
}

export const Square = (props: SquareProps) => {
  const { index, value, onSquareClick } = props

  return <SquareButton onClick={() => onSquareClick(index)}>{value}</SquareButton>
}

const SquareButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  padding: 0;
  text-align: center;
  width: 34px;
  margin: 1px;
`
