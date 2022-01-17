import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
  height: 100vh;
`

export const EditorContainer = styled(Container)`
  background-color: #ffffff;
  height: 400px;
`
export const Heading = styled.h1`
  color: #000000;
  font-size: 20px;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const InputElement = styled.input`
  width: 80%;
  padding: 10px;
`

export const SaveButton = styled.button`
  background-color: #d946ef;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #ffffff;
  border-width: 0px;
`
