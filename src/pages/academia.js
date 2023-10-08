import React from "react";
import {
    Page,
    Seo,
} from "gatsby-theme-portfolio-minimal";

import AcademiaSection from '../customComponents/academia/AcademiaSection'

export default function AcademiaPage() {
    return (
        <>
            <Seo title="Academia" useTitleTemplate={true} noIndex={true} />
            <Page>
                <AcademiaSection />
            </Page>
        </>
    );
}
