import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/MiniCenteredFooter.js";


export default () => {
  return (<>
    <AnimationRevealPage>
      <Hero />
      {/* <Features /> */}
      <Pricing />
      <Testimonial />
      <FAQ />
      <Footer />
    </AnimationRevealPage>
    </>
  );
}
