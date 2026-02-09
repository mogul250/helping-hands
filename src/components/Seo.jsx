const Seo = ({
  title = "Helping Hands | Bringing Hope to the Hopeless",
  description = "Helping Hands is a non-profit organization dedicated to providing essential support, education, and care to families in need. Join us in building a happy community.",
  canonicalUrl = "https://www.helpinghands.example.com" // Replace with your actual domain
}) => {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Helping Hands",
    "url": canonicalUrl,
    // "logo": `${canonicalUrl}/logo.png`, // TODO: Replace with your actual logo URL
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+82-010-21-328-995",
        "contactType": "customer service",
        "areaServed": "KR", // South Korea
        "availableLanguage": ["en"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+250-788-245-476",
        "contactType": "customer service",
        "areaServed": "RW", // Rwanda
        "availableLanguage": ["en", "rw"] // Example
      }
    ],
    "email": "ahchantal95@gmail.com",
    "description": description,
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={`${canonicalUrl}/og-image.jpg`} /> */}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {/* <meta property="twitter:image" content={`${canonicalUrl}/twitter-image.jpg`} /> */}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
};

export default Seo;
