---
datetime: 2022-10-16T17:23:00Z
title: "Como funcionan las estadísticas #PokémonGO"
tags:
  - pokemon-go
ogImage: ""
---

## Índice

## Estadísticas base a partir de consola
Como la mayoría sabréis ya, en los juegos de consola, cada especie tiene 6 estadísticas:
 - Vida
 - Ataque
 - Defensa
 - Ataque especial
 - Defensa especial
 - Velocidad

Sin embargo, en Pokémon GO tan sólo hay 3
 - Vida
 - Ataque
 - Defensa

Para calcular las estadísticas en Pokémon GO a partir de las de consola, se utilizan las siguientes fórmulas:
### - Vida

$$floor(1.75 \cdot Vida \ + \ 50)$$

<br />

*Nota*: `floor()` significa 'recortar la parte entera'

<br />

### - Ataque

$$round(round(\frac{7}{4}Atk_{Alto} + \frac{1}{4}Atk_{Bajo}) \cdot (1+\frac{Vel \ - \ 75}{500}))$$

Como se puede ver, es debido a esta fórmula que los pokémon que tienen mucho ataque en uno de los 2 stats en consola, aqui terminan teniendo una gran estadística base. Ya que se hace una media ponderada donde la estadística más alta tiene un peso muy superior.

<br />

*Nota*: `round()` significa 'redondear al entero más cercano'

<br />

###  - Defensa

$$round(round(\frac{5}{4}Def_{Alta} + \frac{3}{4}Def_{Baja}) \cdot (1+\frac{Vel \ - \ 75}{500}))$$

De igual forma, el valor más alto tiene la mayor importancia, sin embargo, el calculo está más equilibrado.

## Cálculo de estadísticas 'reales'
Para calcular las estadísticas de un Pokémon debemos tener 3 factores en cuenta:
- Estadística base de la especie en cuestión
- IVs de nuestro Pokémon
- Nivel del Pokémon

La fórmula, para cada una de las 3 stats, es la siguiente (en el caso de la vida, se redondea este resultado)

$(Stat_{Base} \ + \ IV) \ * \ CPM$

Debido a que el IV (0-15) se sume a la stat base (en la mayoría de los casos, mucho mayor); para las stats finales apenas tiene importancia subir un Pokémon 0% o un 100%.

El ***CPM*** es un valor que depende del nivel y sigue la siguiente progresión:

<img style="border: none;" height="500px" src="/content-images/pokemon/CPM.png" />

<br />

*Nota*: En [este artículo](https://gamepress.gg/pokemongo/cp-multiplier) (en inglés) se puede encontrar más información sobre el CPM

## Cálculo del PC de un Pokémon
La fórmula es la siguiente:

$\frac{Atk \ \cdot \ {Def}^{\ 0.5} \ \cdot \ {Vida}^{\ 0.5} \ \cdot \ {CPM}^{\ 0.5}}{10}$
