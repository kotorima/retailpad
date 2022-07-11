# Как использовать store

В проекте для его реализации используются эти инструменты:
React Redux: https://react-redux.js.org/
Redux Toolkit: https://redux-toolkit.js.org/

За основу взят этот пример https://github.com/reduxjs/cra-template-redux/tree/master/template

Структура проекта с использованием хранилища

```bash
retailpad
└── src
    ├── components
    │   └── CityList
    │        └──CityList.jsx - передача значения в переменную из хранилища
    ├── pages
    │   └── OrderList.jsx - пример использования переменной из хранилица в несвязанном компоненте
    ├── store
    │   ├──slices
    │   │    └── cityList.js - создание и описание обработчика переменной
    │   ├── initialState.js - обьявляем переменные
    │   └── store.js - инициализация хранилица и подключение обработчика к переменной
    └── index.tsx - подключение хранилища к проекту
```
