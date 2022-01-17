import {Component} from 'react'

import {
  Container,
  EditorContainer,
  Heading,
  InputElement,
  SubContainer,
  SaveButton,
} from './StyledComponents'

class Editor extends Component {
  state = {UserText: ''}

  onChangeInputText = event => {
    this.setState({
      UserText: event.target.value,
    })
  }

  render() {
    const {UserText} = this.state
    return (
      <Container>
        <EditorContainer>
          <Heading>Editable Text Input</Heading>
          <SubContainer>
            <InputElement
              value={UserText}
              onChange={this.onChangeInputText}
              type="text"
            />
            <SaveButton>Save</SaveButton>
          </SubContainer>
        </EditorContainer>
      </Container>
    )
  }
}

export default Editor
