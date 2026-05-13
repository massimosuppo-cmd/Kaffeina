import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Guide from '../components/Guide';
import Plan from '../components/Plan';
import Services from '../components/Services';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import Success from '../components/Success';
import Freebie from '../components/Freebie';
import FinalCTA from '../components/FinalCTA';
import FeaturedBlog from '../components/FeaturedBlog';
import FeaturedShop from '../components/FeaturedShop';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Guide />
      <Plan />
      <Services />
      <SocialProof />
      <FeaturedShop />
      <Success />
      <FeaturedBlog />
      <FAQ />
      <FinalCTA />
      <Freebie />
    </>
  );
}
