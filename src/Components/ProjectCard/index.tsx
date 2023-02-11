import { Box, Image, Heading, Text, Card } from "theme-ui";
import "./projectCard.css";

const ProjectCard = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          variant: "styles.main",
          margin: 10,
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
          {/* <Image
            sx={{
              width: "175px",
              height: "175px",
              objectFit: "cover",
              marginBottom: "20px",
              borderRadius: "50%",
              zIndex: 2,
              variant: "styles.main",
            }}
          /> */}
          <Heading
            sx={{
              variant: "styles.main",
            }}
          >
            Project Card
          </Heading>
          <Text
            sx={{
              variant: "styles.main",
              fontSize: "1.1rem",
            }}
          >
            Info Here
          </Text>
        </Card>
      </Box>

    </>
  );
};

export default ProjectCard;
