export default function LocalBusinessSchema() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    name: "RJC Transportes",
                    url: "https://rjc-transportes.com",
                    logo: "https://rjc-transportes.com/Logo.png",
                    image: "https://rjc-transportes.com/og-image.jpg",
                    telephone: "+54 9 261 551-7599",
                    description:
                        "Servicio de transporte especializado para niños y jóvenes con discapacidad en Mendoza.",
                    founder: {
                        "@type": "Person",
                        name: "Rodolfo J. Carletti",
                    },
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Mendoza",
                        addressCountry: "AR",
                    },
                    areaServed: {
                        "@type": "AdministrativeArea",
                        name: "Mendoza, Argentina",
                    },
                    serviceType:
                        "Transporte especial para niños y jóvenes con discapacidad",
                }),
            }}
        />
    );
}
