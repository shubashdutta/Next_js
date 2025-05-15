// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Subash - Web Developer Portfolio</title>
      <meta
        name="description"
        content="Portfolio of Subash, a modern web developer skilled in React, Next.js, Tailwind CSS, and Go."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta name="author" content="Subash" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.png" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Subash - Web Developer Portfolio" />
      <meta
        property="og:description"
        content="Portfolio of Subash, a modern web developer skilled in React, Next.js, Tailwind CSS, and Go."
      />
      <meta property="og:url" content="https://yourdomain.com" />
      <meta property="og:image" content="https://yourdomain.com/og-image.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Subash - Web Developer Portfolio" />
      <meta
        name="twitter:description"
        content="Portfolio of Subash, a modern web developer skilled in React, Next.js, Tailwind CSS, and Go."
      />
      <meta
        name="twitter:image"
        content="https://yourdomain.com/og-image.png"
      />
    </>
  );
}
