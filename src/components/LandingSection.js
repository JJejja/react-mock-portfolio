import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I'm Alexandra!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="#F7F8F3"
    id="landing-section"
  >
    <VStack spacing={6}>
      <VStack spacing={4}>
        <Avatar name="Alexandra" src="public/images/avatar.png" size="xl" />
        <Heading size="xl" fontSize="2xl">
          {greeting}
        </Heading>
      </VStack>
      <VStack>
        <Heading size="2xl" fontSize="5xl">
          {bio1}
        </Heading>
        <Heading size="2xl" fontSize="5xl">
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
