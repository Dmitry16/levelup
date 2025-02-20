import SampleComponent from "../lib/components/SampleComponent";
import { Container, Box } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Box mt={4}>
        <SampleComponent />
      </Box>
    </Container>
  );
};

export default Home;
