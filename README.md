# Portfolio website

Designed in figma. Built with next js with a plan to add a blog section later on. Primary focus of this project is to showcase my css/design skills, responsive design and css animations. Also focused on optimizing the fonts and avoiding a round trip to google website. Another interesting problem i encountered was a FOUC, which was solved by changing opacity of root until the component mounts. Overall the design was quite challenging to implement and i think i\`ve managed to do almost everything that was planned.  

## Technologies

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Styled Components](https://styled-components.com/)
- **Deployment**: [Vercel](https://vercel.com)

## Run youself locally

```
git clone https://github.com/B0und/PersonalWebsite.git
cd PersonalWebsite
npm run dev
```

## Notes to self:

### Optimizing fonts

1. install fonttools package to limit used character range

```
pyftsubset inter-var.ttf --unicodes="U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
U+FEFF, U+FFFD,U+2192" --output-file="inter-var-latin.ttf"
```

2. Convert ttf to woff2

`npx ttf2woff inter-var-latin.ttf inter-var-latin.woff2`
