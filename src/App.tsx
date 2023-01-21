/** @jsxImportSource theme-ui */
import { ThemeProvider } from '@theme-ui/core';
import { theme } from './Theme';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
