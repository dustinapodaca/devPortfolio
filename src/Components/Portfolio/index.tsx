import ProjectCard from '../ProjectCard';
import { Flex, Box } from 'theme-ui';

const Portfolio = () => {
  return (
    <>
      <Flex>
        <Box
          sx={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <ProjectCard />
          <ProjectCard />
        </Box>
      </Flex>
      {/* <Flex>
        <Box
          sx={{
            // display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            // justifyContent: "center",
            // alignItems: "center",
            // backgroundColor: "background",
          }}
        >
          <ProjectCard />
          <ProjectCard />
        </Box>
      </Flex> */}
    </>
  );
};

export default Portfolio;