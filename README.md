[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/N2U_vT6F)

# Inlämning 1 - CI/CD

Detta projekt är en enkel webbapplikation byggd med Vite och JavaScript.

## Projektbeskrivning
Applikationen är en ränta-på-ränta-kalkylator där användaren kan fylla i:
- startbelopp
- månadssparande
- antal år
- årsränta

Därefter räknar appen ut ett slutvärde.

## Tester
Projektet innehåller enhetstester med Vitest.
Testerna körs automatiskt i GitHub Actions innan deployment.

## CI/CD-pipeline
Pipelinen är definierad som kod i en YAML-fil under `.github/workflows/deploy.yml`.

Vid varje push till `main` gör pipelinen följande:
1. installerar dependencies
2. kör enhetstester
3. bygger applikationen
4. deployar automatiskt till GitHub Pages

## Live-sida
https://theper10.github.io/inl-1-cicd/

## Tekniker
- JavaScript
- Vite
- Vitest
- GitHub Actions
- GitHub Pages