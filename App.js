import React from 'react';
import { StyleSheet } from 'react-native';

import {Provider} from './context/BlogContext'
import Navigation from './navigation/Navigation'

export default function App() {
  return (
    <Provider>
        <Navigation/>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
