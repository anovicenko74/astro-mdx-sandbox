---
datetime: 2022-10-17T08:20:00Z
title: "Cómo se calcula el daño #PokémonGO"
tags:
  - pokemon-go
ogImage: ""
---

## Índice

## Conocimientos previos
En este otro [post](/posts/pokemon-stat-mechanics.html) pudimos ver cómo se calculan las estadísticas de nuestros Pokémon, en el post actual vamos a ver como se calcula el daño de un ataque a partir de esos valores.

## Fórmula

$$floor(\frac{1}{2} \ \cdot \ Poder \ \cdot \ \frac{Atk}{Def} \ \cdot \ Mult)+1$$

## Explicación
 - `floor()` se queda la parte entera del resultado.
 - `Poder` es el número que podemos ver al lado de cada movimiento, por ejemplo **90** para *Onda Mental*. (El mismo movimiento puede tener un valor distinto para PvP y PvE)
 - `Atk` y `Def` son el ataque del Pokémon que utiliza el movimiento, y la defensa de quien lo recibe, respectivamente.
 - `Mult` es un multiplicador, que depende de varios factores:
   - *STAB*(Same Type Attack Bonus): Usar un movimiento del mismo tipo que el Pokémon aumenta un 20% su daño (x1.2)
   - Clima: Si usamos un movimiento potenciado por el tiempo atmósferico, también se aumenta en 20% su daño
   - Bonus oscuro: Los Pokémon oscuros tienen un bono de 20% daño (a costa de aguantar menos)
   - Amistad: Obtenemos un aumento de 3%-5%-7%-10% dependiendo del nivel de amistad con otros entrenadores
     - Solo aplica en incursiones
     - No se acumula: Se aplica el mayor valor entre todos los amigos
   - Efectividad: Según los tipos, el daño puede ser mutliplicado x1.6(eficaz) o x0.625(resistido)
     - En Pokémon GO las 'inmunidades' cuentan como doble resistencia

    <br />

   - **Si hay que aplicar varios efectos, estos se multiplican entre sí** 
 - Al final se suma 1, de forma que cualquier ataque (incluso si lo bloqueas en PvP) hace mínimo 1 de daño

## Breakpoints/Bulkpoints
Como acabamos de ver, los ataques siempre hacen una cantidad de daño entera. Por tanto, hay situaciones en las que tener un poco más de ataque pueden hacer que este cálculo (debido a los redondeos internos) realice uno de daño adicional, esto es lo que se conoce como ***breakpoint***.

Los breakpoint pueden ser cruciales en PvP, ya que conseguir uno de daño adicional por cada ataque básico puede cambiar totalmente un enfrentamiento.
 - Por ejemplo, en liga Máster, un Dialga 100% nivel 41 (mejor compañero) gana por bastante a otro Dialga 100% que sea nivel 40 ya que dragoaliento pasa de 4 a 5 de daño (aumento del 25%).

Esto también es aplicable a raids, con [esta calculadora](https://gamepress.gg/pokemongo/breakpoint-calculator) se puede ver el daño que va a hacer nuestro Pokémon en incursiones, de forma que podemos ahorrar algo de polvo si el daño no va a aumentar más, o conseguir mayor daño subiendo, por ejemplom un 15-10-15 en vez de un 14-15-15

<br />

Esta misma mecánica la podemos analizar desde el otro lado, un aumento en defensa que nos reduce el daño recibido, y es lo que se conoce como ***bulkpoint***