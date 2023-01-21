// import { Link } from 'theme-ui'
/** @jsxImportSource theme-ui */

const Footer = () => {
  return (
    <>
      <footer
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          bottom: 0,
          position: "fixed",
          marginTop: "auto",
          marginBottom: 3,
          variant: "styles.footer",
          width: "100vw",
        }}
      >
        <div sx={{ mx: "0 auto" }} />
        <div sx={{ p: 2, fontWeight: 600 }}>© 2023 Dustin Apodaca</div>
      </footer>
    </>
  )
}

export default Footer
