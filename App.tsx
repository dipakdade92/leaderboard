import React from 'react';
import {SafeAreaView} from 'react-native';

import {Provider} from 'react-redux';
import MainScreen from './src/screen/MainScreen';
import {store} from './src/redux/store';
import {theme} from './src/styles/themes';
import styled, {ThemeProvider} from 'styled-components/native';
const MainContainer = styled(SafeAreaView)`
  flex: 1;
  display: flex;
  backgroundcolor: white;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
