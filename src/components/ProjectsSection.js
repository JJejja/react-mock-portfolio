import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
  {
    title: "Aurobay Car Rental",
    description:
      "A UX project of a car-rental app made in collaboration with Aurobay, enabling employees and guests to find and rent available cars.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Apartment Finder",
    description:
      "A UX Case study for an apartment finder app, designed to help users efficiently search for rental properties based on their preferences.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#F2F3EC"
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
