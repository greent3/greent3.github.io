import React from "react";
import {
  AboutSection,
  HeroSection,
  InterestsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

import { Box } from "@mui/material";

import FutureProjects from "../customComponents/about/futureProjects";

export default function IndexPage() {
  return (
    <>
      <Seo title="Travis Green Software Engineer Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <FutureProjects />
        </Box>
        <InterestsSection sectionId="hobbies" heading="Hobbies" />
      </Page>
    </>
  );
}
