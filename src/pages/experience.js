import React from "react";
import {
    Page,
    Seo,
} from "gatsby-theme-portfolio-minimal";
import ExperienceSection from '../customComponents/experience/ExperienceSection'

export default function ExperiencePage() {
    return (
        <>
            <Seo title="Experience" useTitleTemplate={true} noIndex={true} />
            <Page>
                <ExperienceSection />
            </Page>
        </>
    );
}
