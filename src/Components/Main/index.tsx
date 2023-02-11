import {
  Box,
  Image,
  Heading,
  Text,
  Card,
} from 'theme-ui';
import './main.css'

import me from '../../assets/IMG_5163-2.jpg';

const Main = () => {
  return (
    <>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          variant: "styles.main",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: "center",
            variant: "styles.main",
          }}
        >
          <Card
            className="blurredCard"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              variant: "styles.main",
              py: 4,
              px: 4,
            }}
          >
            <Image
              src={me}
              sx={{
                width: "175px",
                height: "175px",
                objectFit: "cover",
                marginBottom: "20px",
                borderRadius: "50%",
                zIndex: 2,
                variant: "styles.main",
              }}
            />
            <Heading
              sx={{
                variant: "styles.main",
              }}
            >
              Dustin Apodaca
            </Heading>
            <Text
              sx={{
                variant: "styles.main",
                fontSize: "1.1rem",
              }}
            >
              Full-Stack Engineer
            </Text>
          </Card>
          {/* <Card
            className="blurredCard2"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              // flexDirection: "column",
              // alignItems: "center",
              justifyContent: "center",
              variant: "styles.main",
              py: 4,
              px: 4,
              marginTop: "20px",
            }}
          >
            <Heading
              sx={{
                variant: "styles.main",
                fontSize: "2rem",
              }}
            >
              Coming Soon!
            </Heading>

          </Card> */}
        </Box>
      </div>
    </>
  );
};

export default Main;