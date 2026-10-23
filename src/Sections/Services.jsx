import necklaceImage from "../assets/service-necklace.png";
import craftsmanshipImage from "../assets/service-craftsmanship.png";
import qualityImage from "../assets/service-quality.png";
import collectionImage from "../assets/service-collection.png";

const services = [
  {
    number: "01",
    title: "Bespoke jewellery design",
    description: "Your inspiration, shaped into a one-of-a-kind piece.",
    image: necklaceImage,
    imageAlt: "Handcrafted gold necklace with gemstone details",
    overlayImage: collectionImage,
    overlayAlt: "Gold jewellery collection displayed on a light surface",
  },
  {
    number: "02",
    title: "Handcrafted manufacturing",
    description: "Experienced artisans bring every detail to life.",
    image: craftsmanshipImage,
    imageAlt: "Jeweller carefully crafting a gold ring at the workbench",
    overlayImage: qualityImage,
    overlayAlt: "Jewellery artisan examining a gemstone ring",
  },
  {
    number: "03",
    title: "Gemstone setting",
    description: "Careful stone selection, setting and finishing.",
    image: qualityImage,
    imageAlt: "Jeweller inspecting a diamond ring with a loupe",
    overlayImage: necklaceImage,
    overlayAlt: "Close-up of a finely set gold and diamond necklace",
  },
  {
    number: "04",
    title: "Quality & collections",
    description: "Consistent quality, from a single piece to a full range.",
    image: collectionImage,
    imageAlt: "Coordinated gold jewellery collection",
    overlayImage: craftsmanshipImage,
    overlayAlt: "Skilled hands working on a jewellery piece",
  },
];

const Services = () => {
  return (
    <section
      id="collections"
      aria-labelledby="services-heading"
      className="bg-[#f5f1e9] px-5 py-20 text-[#19283c] sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#9b7135]">
            From concept to creation
          </p>
          <h2
            id="services-heading"
            className="text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl"
          >
            Jewellery manufacturing,
            <span className="font-serif font-normal italic text-[#9b7135]">
              {" "}made personal.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#586677] sm:text-lg">
            From the first design idea to the final quality check, our team
            supports every step of your jewellery-making journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <a
              key={service.number}
              href="#contact"
              aria-label={`Enquire about ${service.title}`}
              className="group flex min-h-[350px] flex-col rounded-2xl border border-[#e8dece] bg-gradient-to-br from-[#fffdf9] to-[#f0e8dc] p-5 shadow-[0_8px_28px_rgba(75,55,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(75,55,30,0.12)] sm:min-h-[370px] sm:p-7"
            >
              <div className="relative mb-5 flex min-h-[220px] flex-1 items-center justify-center overflow-hidden rounded-xl bg-[#eee6da]">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="absolute w-40 rotate-[-7deg] rounded-lg border-4 border-white object-cover shadow-[0_12px_30px_rgba(37,30,20,0.18)] transition-all duration-500 ease-out group-hover:-translate-x-3 group-hover:-rotate-12 group-hover:scale-105 sm:w-44"
                />
                <img
                  src={service.overlayImage}
                  alt={service.overlayAlt}
                  loading="lazy"
                  className="absolute w-40 translate-x-8 translate-y-3 rotate-[5deg] rounded-lg border-4 border-white object-cover shadow-[0_14px_34px_rgba(37,30,20,0.22)] transition-all duration-500 ease-out group-hover:translate-x-11 group-hover:translate-y-1 group-hover:rotate-[9deg] group-hover:scale-105 sm:w-44"
                />
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#d8c7a8] bg-[#fffdf9]/90 text-[10px] font-semibold tracking-wider text-[#9b7135]">
                  {service.number}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#29394c] sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-[#6a6257]">
                    {service.description}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d8c7a8] text-[#9b7135] transition-colors group-hover:bg-[#9b7135] group-hover:text-white"
                >
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
