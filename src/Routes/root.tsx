/** @jsxImportSource theme-ui */
import { ThemeProvider } from "@theme-ui/core";
import { theme } from "../Theme";
import Header from "../Components/Header";
// import Main from "../Components/Main";
// import ProjectCard from "../Components/ProjectCard";
// import Portfolio from "../Components/Portfolio";
import LayoutNav from "../Components/LayoutNav";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Header /> */}
        {/* <Main /> */}
        {/* <Portfolio /> */}
        <LayoutNav />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Root;
