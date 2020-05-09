import React from 'react'
import { Toast } from './components';
import 'normalize.css'
import './App.scss'

const App: React.FC = (props: any) => {
  return (
    <div className="App">
      <Toast />
    </div>
  );
}
 
export default App;
