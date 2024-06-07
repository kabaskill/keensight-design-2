"use client";
import Accordion from "./utils/accordion";

import { faq } from "./utils/siteData";

export default function Faq() {
  return (
    <section className="relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6  mb-24">
        <h3 className="text-5xl font-extrabold h3 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 text-center">
          {faq.header}
        </h3>

        <ul>
          {faq.questions.map((item) => {
            return (
              <Accordion key={item.question} title={item.question}>
                {item.answer}
              </Accordion>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
