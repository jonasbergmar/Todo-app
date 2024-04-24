import Hero from "../Components/Hero";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <Hero
          title="Your New Checklist"
          subeheading="Welcome to a new way of doing checklists, no signup required"
        />
      </div>
    </>
  );
};

export default LandingPage;
