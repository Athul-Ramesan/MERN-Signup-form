import { Provider } from 'react-redux';
import {  store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MultiStepForm from './pages/MultiStepForm';
import { ViewSavedData } from './pages/ViewSavedData';
import { SuccessPage } from './components/SuccessPage';

function App() {

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MultiStepForm />} />
        <Route path="/view/:userId" element={<ViewSavedData />} />
        <Route path="/success" element ={<SuccessPage/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
