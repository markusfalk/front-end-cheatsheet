# Front End Cheat Sheet

* Legend: `<>` required, `[]` optional

## Node

### Search the registry for package

```bash
$ npm search <term>
```

### Install package (-g: global)

```bash
$ npm install [-g] <package-name>
```

### List packages

```bash
$ npm ls [package-name]
```

### Go to documentation page of package

```bash
$ npm docs [package-name]
```

### Go to issue page of package

```bash
$ npm bugs [package-name]
```

### List outdated packages

```bash
$ npm outdated
```

### Update packages

```bash
$ npm update [package-name]
```

### Remove packages

```bash
$ npm rm <package-name>
```

## Yeoman


### Install a generator

```bash
$ npm install -g <generator-name>
```

### Use a generator

```bash
$ yo
$ yo <generator-name> [--flags]
```

### use a sub-generator

```bash
$ yo <generator-name>:<sub-generator-name> [arguments]
```

## Bower

### Search for a package

```bash
$ bower search <package-name>
```

### Install package and save to bower.json

```bash
$ bower install <package-name> [--save]
```

### Go to homepage of package

```bash
$ bower home <package-name>
```


### List packages

```bash
$ bower ls
```

### Update a package

```bash
$ bower update <package-name>
```

### Remove a package and save to bower.json

```bash
$ bower uninstall <package-name> [--save]
```

## Grunt

## Semver

## Sources

* http://yeoman.io/learning/index.html
* http://gruntjs.com/getting-started
* http://bower.io/docs/api/
* https://www.npmjs.org/doc/

## About

* Creator: [@markus_falk](https://twitter.com/markus_falk)
* License: [MIT](https://tldrlegal.com/license/mit-license)
* Disclaimer: [I Have No Idea What I'm Doing](http://i.minus.com/ibxEw6l6IvBlwd.jpg)
