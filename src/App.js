/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import theme from './utils/theme'
import { ThemeProvider } from 'styled-components/native'
import Navigator from './screens/Navigator'

const App = () => (
  <ThemeProvider theme={theme}>
    <Navigator />
  </ThemeProvider>
)

export default App
