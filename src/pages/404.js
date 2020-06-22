import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";

import notFoundPageImage from './404-error.gif';

function NotFoundPage() {
    return (
        <Layout>
            <SEO/>
            <Section>
                <div>
                    <img src={notFoundPageImage} width="100%"/>
                </div>
            </Section>
        </Layout>
    );
}

export default NotFoundPage;
