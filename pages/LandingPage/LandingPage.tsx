import React from "react";

import "./styles.css";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col p-4 bg-gray-100 font-visby">
      {/* Header */}
      <header className="w-full h-screen flex items-center justify-center opacity-0 animate-fadeIn mb-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-black mb-6 text-primary-blue">
            Welcome to Digitote
          </h1>
          <h2 className="text-3xl font-semibold mb-4 text-primary-pink">
            Empowering the influencer industry.
          </h2>
        </div>
      </header>

      {/* Mission and Vision */}
      <section className="container mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-avenir-heavy mb-4 text-primary-blue">
              Our Mission
            </h3>
            <p className="text-lg mb-6 text-gray-500">
              To provide transparent, automated, and user-friendly software that
              equips creators and talent managers to organize, track, and manage
              every detail of their brand partnerships.
            </p>
            <div className="h-64 bg-gray-300 mb-4">
              {" "}
              {/* Placeholder for Image */}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-avenir-heavy mb-4 text-primary-blue">
              Our Vision
            </h3>
            <p className="text-lg mb-6 text-gray-500">
              Empowering an industry with the tools needed to confidently and
              efficiently grow their business.
            </p>
            <div className="h-64 bg-gray-300">
              {" "}
              {/* Placeholder for Image */}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto mb-12 bg-primary-cyan p-6 rounded">
        <h3 className="text-3xl font-avenir-heavy mb-6 text-white">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              value: "Transparency",
              description:
                "An open and forthcoming approach to project management that ensures equal and easy access to detailed information.",
            },
            {
              value: "Technology",
              description:
                "Bringing the entire process online, using digital tools capable of unmatched accuracy, integration, and automation.",
            },
            {
              value: "Organization",
              description:
                "Everything you need, at your fingertips, to ensure efficient and effective project and client management.",
            },
            {
              value: "Efficiency",
              description:
                "Everything done effectively, using minimal effort, free from redundancy, and focused on maximized productivity.",
            },
          ].map((item) => (
            <div key={item.value}>
              <h4 className="text-xl font-avenir-black mb-4 text-white">
                {item.value}
              </h4>
              <p className="text-md font-avenir-heavy text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Voice */}
      <section className="container mx-auto mb-12">
        <h3 className="text-3xl font-avenir-heavy mb-6 text-primary-blue">
          Our Brand Voice
        </h3>
        <p className="text-lg mb-4 text-gray-500">
          How we talk about our brand is important. It&apos;s often the way we
          say something that breeds a certain feeling. Different from the copy
          itself, tone isn&apos;t what you say, but how you say it.
        </p>
        <p className="text-lg mb-4 text-gray-500">
          Tone encompasses the words you choose, their order, rhythm and pace.
          Digitote&apos;s tone will adopt an active voice to establish
          confidence and leadership. We will use simple language that focuses on
          clarity and education.
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2 text-gray-500">
            We aren&apos;t basic or complex; we are strategic and user-friendly.
          </li>
          <li className="mb-2 text-gray-500">
            We aren&apos;t lacking anything; we are focused, agile and
            purposeful in our offer.
          </li>
          <li className="mb-2 text-gray-500">
            We are confident and empowered; we aren&apos;t apologetic or
            insecure.
          </li>
          <li className="text-gray-500">
            We are leaders whose motives are above reproach; we are strong in
            our convictions and unapologetic.
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto text-center mb-12">
        <h3 className="text-3xl font-avenir-heavy mb-6 text-primary-pink">
          Ready to Experience Digitote?
        </h3>
        <button className="bg-primary-cyan hover:bg-primary-cyan-75 text-white font-semibold py-2 px-6 rounded shadow-md transform hover:scale-105 transition-transform duration-150">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full mt-auto p-6 bg-primary-blue text-white text-center shadow-inner">
        <p>&copy; {new Date().getFullYear()} Digitote. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
