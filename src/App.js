import React, { Component } from 'react'

import { View, Text, Button } from 'react-native'
import posed from 'react-native-pose'

const Box = posed.View({
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
})

class App extends Component {
  state = {
    isVisible: true,
  }

  render() {
    return (
      <View>
        <Button
          title="toggle pose"
          onPress={() => this.setState({ isVisible: !this.state.isVisible })}
        />
        <View>
          <Text>Test Pose!</Text>
          <Box
            style={{ width: 50, height: 50, backgroundColor: 'red' }}
            pose={this.state.isVisible ? 'visible' : 'hidden'}
          />
        </View>
      </View>
    )
  }
}

export default App
