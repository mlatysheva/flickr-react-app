import { Routes, Route } from 'react-router-dom';
import { store } from './store';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import './App.css';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import { FormPage } from './components/FormPage';
import { ApiPage } from './components/ApiPage';
import { ThemeProvider } from './components/Theme';
import ApiPhoto from './components/ApiPhoto';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Provider store={store}>
          <ThemeProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="form" element={<FormPage />} />
              <Route path="api" element={<ApiPage />} />
              <Route path="api/photo" element={<ApiPhoto />} />
              <Route path="error" element={<Error />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </ThemeProvider>
        </Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
