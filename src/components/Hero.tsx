import heroImage from "@/assets/hero-mc-portfolio.png";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Michael Chandler Portfolio - Construction site leader"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};
