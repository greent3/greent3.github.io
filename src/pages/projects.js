import React from "react";
import {
    Page,
    ProjectsSection,
    Seo,
} from "gatsby-theme-portfolio-minimal";

export default function ProjectsPage() {
    return (
        <>
            <Seo title="Projects" useTitleTemplate={true} noIndex={true} />
            <Page>
                <ProjectsSection sectionId="projects" heading="Projects" />
            </Page>
        </>
    );
}
