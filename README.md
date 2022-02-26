in development

## Optimizing fonts

1. install fonttools package

```
pyftsubset inter-var.ttf --unicodes="U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
U+FEFF, U+FFFD,U+2192" --output-file="inter-var-latin.ttf"
```

2. Convert to woff2

`npx ttf2woff inter-var-latin.ttf inter-var-latin.woff2`
