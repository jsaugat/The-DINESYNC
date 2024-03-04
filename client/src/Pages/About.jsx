import { Container } from "../master";
import React from "react";

function AboutPage() {
  return (
    <Container>
      <section>
        <div className="flex justify-around items-center h-[84vh]">
          <h2 className="text-2xl">Who we are</h2>
          <h5 className="text-xl w-1/2 text-left">
            At DineSync, we've curated a unique blend of convenience and
            culinary delight. From hassle-free table reservations to effortless
            food ordering, our app ensures you savor every moment. Discover a
            world of flavors, enjoy personalized recommendations, and relish
            exclusive deals. Join us as we synchronize your love for food with
            unparalleled ease. Elevate your dining adventures with DineSync –
            where every bite is a celebration!
          </h5>
        </div>  
      </section>
    </Container>
  );
}

export default AboutPage;
