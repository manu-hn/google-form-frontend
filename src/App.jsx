
import Container from '@components/Container';

import './App.css'
import { Provider } from 'react-redux';
import appStore from "@/store/store.js";


function App() {

  return (
    <Provider store={appStore}>
      
      <Container />
     
    </Provider>
  )
}

export default App
