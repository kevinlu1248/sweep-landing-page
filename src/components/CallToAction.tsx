import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
// @ts-ignore
import { Terminal } from "react-window-ui";
import { FaDiscord } from "react-icons/fa";
const demo = require("../assets/demo.mov");

export default function CallToAction() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 28 }}
        style={{ paddingTop: "0 !important" }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Sweep:{" "}
          <Text as={"span"} color={"purple.400"}>
            <del>Develop</del>
            <ArrowForwardIcon /> Review Code
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Spend time reviewing code generated by AI, not writing it
        </Text>
        <HStack spacing={6} direction={"row"} mb="2rem !important">
          <Button
            rounded={"full"}
            color="white"
            px={6}
            colorScheme={"purple"}
            bg={"purple.400"}
            _hover={{ bg: "purple.600" }}
            onClick={() => window.open("https://github.com/apps/sweep-ai")}
          >
            Install now
          </Button>
          <Button
            rounded={"full"}
            color="white"
            px={6}
            colorScheme={"grey"}
            bg={"#7289da"}
            _hover={{ bg: "#5b6eab" }}
            onClick={() => window.open("https://discord.gg/j8XxQmpHEF")}
          >
            <FaDiscord />&nbsp;&nbsp;Join the Community
          </Button>
        </HStack>
        <Flex w={"full"}>
          <Terminal 
            padding="2rem 0 0 0" 
            topbarColor="#0e1018" 
            divider="none"
            boxShadow="0 0 40px #444"
          >
            <video src={demo} autoPlay muted loop>
              Your browser does not support the video tag.
            </video>
          </Terminal>
        </Flex>
      </Stack>
    </Container>
  );
}
