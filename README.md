## Tap Room

#### Website for a bar to keep track of kegs on tap in AngularJS | March 23, 2016

#### By Anna Becker & Matt Rosanio

## Description
An Angular app that a bar could use to keep track of their kegs.

The user can:
* Fill out a form when they tap a new keg which is then displayed in a list.
* See what kegs are available. For each keg, the user can see its name, brand, price and alcohol content.
* See a display of how many pints are left in a keg. The user can enter the quantity of pints sold, which are then deducted from the total.
* The user can see all the kegs that have less than 10 pints left.
* The user can edit a keg's properties after entering them.
* The kegs are color coded to show at a glance if they are cheap or expensive.
* The alcohol content property of the beer is used to display stronger beers differently than weaker beers - multiples of beer icons correlate to the beer's alcohol contet.
* The site includes a bar side where the user can order kegs and keep track of revenue.

## Setup/Installation Requirements

Clone this repository. Open terminal and:

```
$ cd ~/Desktop
$ git clone https://github.com/annarbecker/js_tap-room.git
$ cd js_tap-room
```

Install Node tools
```
$ npm init
$ npm install
```
Install Bower tools
```
$ bower init
$ bower install
```

Install globals if needed (gulp, bower, sass, typescript, typescript packages.)
```
$ npm install gulp -g
$ npm install bower -g
$ gem install sass
$ npm install typescript -g
$ apm install atom-typescript
```

To view in browser
```
$ gulp build
$ gulp serve
```

## Technologies Used

Angular2 Javascript, Gulp, Bower, TypeScript

### License

This software is licensed under the MIT license.

Copyright (c) 2016 Anna Becker & Matt Rosanio

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
