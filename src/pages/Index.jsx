// Complete the Index page component here
// Use chakra-ui
import { VStack, Button } from "@chakra-ui/react";
import { FaBriefcase, FaSmile, FaHome, FaAngry, FaToilet } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={4}>
      <Button leftIcon={<FaBriefcase />} colorScheme="blue">
        ボスボタン
      </Button>
      <Button leftIcon={<FaSmile />} colorScheme="green">
        はげましボタン
      </Button>
      <Button leftIcon={<FaHome />} colorScheme="red">
        帰宅ボタン
      </Button>
      <Button leftIcon={<FaAngry />} colorScheme="orange">
        やにボタン
      </Button>
      <Button leftIcon={<FaToilet />} colorScheme="purple">
        トイレボタン
      </Button>
    </VStack>
  );
};

export default Index;
