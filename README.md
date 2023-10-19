# Seazon ![Logo](./src/logoSeazon.svg)


## Installation

```bash
npm install seazon
```
## How to use ?

Import theme from the library in your parent file

```bash
import theme from "seazon";
```

You inform your summer and winter seasons begining date in dd/MM format

```bash
theme.getThemeFromDate("20/06","18/12");
```

*The first date sets the start of the summer season and the second the end

Classes are automatically updated and can be declared in all project files.
Here are the possible classes :

|Class Name | season | Hex                                                                |
|-----------| ------ | ------------------------------------------------------------------ |
|seazon-main-color |winter| ![#ebf5ee](https://via.placeholder.com/10/ebf5ee?text=+) #ebf5ee |
|seazon-second-color |winter| ![#283044](https://via.placeholder.com/10/283044?text=+) #283044 |
|seazon-third-color |winter| ![#78A1BB](https://via.placeholder.com/10/78A1BB?text=+) #78A1BB |
|seazon-main-color |summer| ![#f0ead2](https://via.placeholder.com/10/f0ead2?text=+) #f0ead2 |
|seazon-second-color |summer| ![#adc178](https://via.placeholder.com/10/adc178?text=+) #adc178 |
|seazon-third-color |summer| ![#dde5b6](https://via.placeholder.com/10/dde5b6?text=+) #dde5b6 |



### Here is a list of functions included by the module :

- getThemeFromDate("date1","date2")


## Devs

[Arthur](https://github.com/Arthur-Lucas)

<img src="https://avatars.githubusercontent.com/u/90458016?v=4" width="100" height="100" style="border-radius: 100px">


[Matis](https://github.com/matdn)

<img src="https://avatars.githubusercontent.com/u/81028806?v=4" width="100" height="100" style="border-radius: 100px">


[Pierre](https://github.com/Pierrooooo)

<img src="https://avatars.githubusercontent.com/u/90714496?v=4" width="100" height="100" style="border-radius: 100px">
