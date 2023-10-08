import React from "react";
import {
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function ImprintPage() {
  return (
    <>
      <Seo title="Projects" useTitleTemplate={false} noIndex={true} />
      <Page>
        <ProjectsSection sectionId="projects" heading="Projects" />
      </Page>
    </>
  );
}
