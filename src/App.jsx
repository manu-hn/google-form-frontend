
import Container from '@components/Container';
import { PersistGate } from "redux-persist/integration/react";

import './App.css'
import { Provider } from 'react-redux';
import appStore, { persistor } from "@/store/store.js";


function App() {

  return (
    <Provider store={appStore}>
      <PersistGate persistor={persistor} loading={null}>

        <Container />
      </PersistGate>

    </Provider>
  )
}

export default App
