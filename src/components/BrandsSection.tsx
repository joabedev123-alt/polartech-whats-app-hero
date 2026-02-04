export const BrandsSection = () => {
    const brands = [
        { name: "Electrolux", logo: "/imagenscarossel/electrolux_logo_1770228488501.jpg" },
        { name: "Brastemp", logo: "/imagenscarossel/brastemp_logo_1770228503051.jpg" },
        { name: "Consul", logo: "/imagenscarossel/consul_logo_1770228517154.jpg" },
        { name: "Samsung", logo: "/imagenscarossel/samsung_logo_1770228531104.jpg" },
        { name: "LG", logo: "/imagenscarossel/lg_logo_1770228543772.jpg" },
    ];

    return (
        <section className="py-12 md:py-16 bg-ice border-y border-border/30">
            <div className="container">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">
                        Atendemos todas as principais marcas
                    </h2>
                    <p className="text-muted-foreground">
                        Especialistas em refrigeração de todas as marcas
                    </p>
                </div>

                {/* Scrolling Brands Container */}
                <div className="relative overflow-hidden">
                    <div className="flex animate-scroll-brands space-x-12 md:space-x-16 items-center">
                        {/* First set of logos */}
                        {brands.map((brand, index) => (
                            <img
                                key={`first-${index}`}
                                alt={brand.name}
                                src={brand.logo}
                                className="h-16 md:h-24 w-auto opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                            />
                        ))}
                        {/* Second set for seamless loop */}
                        {brands.map((brand, index) => (
                            <img
                                key={`second-${index}`}
                                alt={brand.name}
                                src={brand.logo}
                                className="h-16 md:h-24 w-auto opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                            />
                        ))}
                        {/* Third set for extra smoothness */}
                        {brands.map((brand, index) => (
                            <img
                                key={`third-${index}`}
                                alt={brand.name}
                                src={brand.logo}
                                className="h-16 md:h-24 w-auto opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
