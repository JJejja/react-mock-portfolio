import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  HStack,
  VStack,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu
  const lastScrollPosition = useRef(0);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > lastScrollPosition.current) {
      setScrollingDown(true);
    } else {
      setScrollingDown(false);
    }
    lastScrollPosition.current = currentScrollPosition;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${scrollingDown ? "-200px" : "0"})`}
      transition="transform .3s ease-in-out"
      backgroundColor="#2d2d2d"
      zIndex={10}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={isMobile ? "row" : "row"}
        >
          <nav>
            <HStack spacing={6} justifyContent="flex-start">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    size={isMobile ? "xl" : "2x"}
                  />{" "}
                </a>
              ))}
            </HStack>
          </nav>

          {/* Hamburger Icon */}
          {isMobile && (
            <IconButton
              icon={<FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />}
              aria-label="Toggle Navigation"
              onClick={() => setMenuOpen(!menuOpen)}
              variant="link"
              color="white"
              fontSize="2xl"
              left={10}
            />
          )}

          {/* Navigation Links */}
          {(isMobile && menuOpen) || !isMobile ? (
            <nav>
              {isMobile ? (
                <VStack
                  spacing={2}
                  display={menuOpen ? "block" : "none"}
                  position={"absolute"}
                  top="100%"
                  width="50%"
                  right={0}
                  padding={2}
                  backgroundColor="#2d2d2d"
                  zIndex={11}
                >
                  <a
                    onClick={() => handleClick("landing")}
                    style={{
                      cursor: "pointer",
                      display: "block",
                      padding: "10px",
                    }}
                  >
                    Home
                  </a>
                  <a
                    onClick={() => handleClick("projects")}
                    style={{
                      cursor: "pointer",
                      display: "block",
                      padding: "10px",
                    }}
                  >
                    Projects
                  </a>
                  <a
                    onClick={() => handleClick("contactme")}
                    style={{
                      cursor: "pointer",
                      display: "block",
                      padding: "10px",
                    }}
                  >
                    Contact
                  </a>
                </VStack>
              ) : (
                <HStack spacing={10}>
                  <a
                    onClick={() => handleClick("landing")}
                    style={{ cursor: "pointer" }}
                  >
                    Home
                  </a>
                  <a
                    onClick={() => handleClick("projects")}
                    style={{ cursor: "pointer" }}
                  >
                    Projects
                  </a>
                  <a
                    onClick={() => handleClick("contactme")}
                    style={{ cursor: "pointer" }}
                  >
                    Contact Me
                  </a>
                </HStack>
              )}
            </nav>
          ) : null}
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
