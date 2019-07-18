# monsterpedia.webdesserts.com

This is the repository for the ["Monsterpedia" encyclopedia][http site]. The site is a little side project of mine that I built for one of my favorite games [Dragon Warrior Monsters][]. Dragon Warrior Monsters is a monster collector based off the Dragon Quest series (origionaly titled Dragon Warrior) that features randomly generated dungeons with a huge roster of interesting and weird creatures within.

The most entertaining part of the game by far is the elaborate breeding system that you will need to master if you want to beat the game. Breeding two monsters allows you to inherit skills, improve stats, and create new and more powerful monsters. However, the parents will run away after breeding and not all breeding combinations will produce a better monster. Breed the wrong two monsters and you could end up throwing away your Boss tier monsters for an early game slime.

Because of this high risk system, I built Monsterpedia to help me plan out how to breed my favorite monsters with their best stats and skills. Monsterpedia contains a full listing of every monster in the game, with their stats, learnable skills, how to breed them, and what monsters they can breed into. The site is built with React, Typescript, and styled-components and is published via the [p2p web][].

## Getting Started

If you're wanting to build your own site based on this one, the easiest way to get started is to open the [p2p version of this website][p2p site] in [Beaker Browser][p2p web] and [fork it from there][fork website].

To get started, you'll first need to install [npm][] ([yarn][] works fine as well) and run the following:

```
npm install
```

You can then build the project by running the `start` script:

```
npm run start
```

This will watch for changes and rebuild the website when it detects an update. If you're using Beaker Browser, you can preview the site there, otherwise the `start` script also starts a dev server at `localhost:3000`.

[Dragon Warrior Monsters]: https://en.wikipedia.org/wiki/Dragon_Warrior_Monsters
[p2p web]: https://beakerbrowser.com
[http site]: https://monsterpedia.webdesserts.com
[p2p site]: dat://monsterpedia.webdesserts.com
[fork website]: https://beakerbrowser.com/docs/tour/#forking-or-copying-a-website
[npm]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[yarn]: https://yarnpkg.com/lang/en/docs/install