// import { Link } from 'theme-ui'
/** @jsxImportSource theme-ui */

const Footer = () => {
  return (
    <footer
      className="flex flex-wrap items-center justify-center bottom-0 fixed inset-x-0 h-16 mt-auto py-2 px-3 text-center text-lg shadow-lg"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
    >
      <div
        className="mx-auto drop-shadow-lg"
        style={{ fontSize: ".85rem" }}
      >
        © 2023 Dustin Apodaca
      </div>
    </footer>
  );
};

export default Footer;
