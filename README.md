# Portfolio website

Primary focus of this project is to showcase intresting projects that I`ve built along with css/design skills.

Some of the interesting problems that were solved: 
- fixing FOUC
- optimizing the fonts and avoiding a round trip to google server.


## Technologies

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Styled Components](https://styled-components.com/)
- **Deployment**: [Vercel](https://vercel.com)
- **Design**: Figma

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
