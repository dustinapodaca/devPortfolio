import { Link, Heading } from 'theme-ui';
import { useState } from 'react';
/** @jsxImportSource theme-ui */

const Header = () => {
  const [triggerButton, setTriggerButton] = useState('portfolio');

  return (
    <>
      <header
        sx={{
          // display: "grid",
          // gridGap: 0,
          // gridTemplateColumns: "repeat(2, 1fr)",
          // display: "flex",
          // flexWrap: "wrap",
          // alignItems: "center",
          // justifyContent: "space-evenly",
          px: 3,
          py: 4,
          variant: "styles.header",
          marginBottom: "100px",
        }}
      >
        {triggerButton === "portfolio" ? (
          <div
            sx={{
              display: "fixed",
              marginLeft: "75px",
              marginTop: "25px",
            }}
          >
            <Heading sx={{ variant: "styles.header", fontSize: "2.3rem" }}>
              Portfolio
            </Heading>
          </div>
        ) : (
          <div
            sx={{
              display: "fixed",
              marginLeft: "75px",
              marginTop: "25px",
            }}
          >
            <Heading sx={{ variant: "styles.header", fontSize: "2.3rem" }}>
              Resume
            </Heading>
          </div>
        )}
        {/* <button
          title="Toggle Menu"
          sx={{
            appearance: "none",
            width: 32,
            height: 32,
            m: 0,
            p: 1,
            color: "inherit",
            bg: "transparent",
            border: 0,
            ":focus": {
              outline: "2px solid",
            },
            ":hover": {
              color: "primary",
            },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentcolor"
            viewBox="0 0 24 24"
            sx={{
              display: "block",
              margin: 0,
            }}
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button> */}
        {triggerButton === "portfolio" ? (
          <>
            <div
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                WebkitTapHighlightColor: "transparent",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <Link
                // href="/"
                sx={{
                  variant: "styles.navlink",
                  px: 4,
                  py: 2,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  border: "4px solid",
                  borderRadius: "5px",
                  color: "primary",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  cursor: "pointer",
                  WebkitTapHighlightColor: "transparent",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
                onClick={() => setTriggerButton("resume")}
              >
                Resume
              </Link>
            </div>
          </>
        ) : (
          <>
            <div
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                WebkitTapHighlightColor: "transparent",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <Link
                // href="/"
                sx={{
                  variant: "styles.navlink",
                  px: 4,
                  py: 2,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  border: "4px solid",
                  borderRadius: "5px",
                  color: "primary",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  cursor: "pointer",
                  WebkitTapHighlightColor: "transparent",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
                onClick={() => setTriggerButton("portfolio")}
              >
                Portfolio
              </Link>
            </div>
          </>
        )}
        {/* <div
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Link
            href="/about"
            sx={{
              variant: "styles.navlink",
              ml: 3,
              py: 3,
            }}
          >
            About
          </Link>
        </div> */}
      </header>
    </>
  );
};

export default Header;
