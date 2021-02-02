
//Бургер
let gamburger = document.querySelector(".header_burger");
let gamburger_menu = document.querySelector(".header_menu");
let _body = document.querySelector("body");

gamburger.onclick = function (event) {
  gamburger.classList.toggle("active");
  gamburger_menu.classList.toggle("active");
  _body.classList.toggle("lock");
};
//Бургер


//Слайдер1

"use strict"; //строгий режим
var multiItemSlider = (function () {
  return function (selector, config) {
    var _mainElement = document.querySelector(selector), // основный элемент блока
      _sliderWrapper = _mainElement.querySelector(".slider__wrapper"), // обертка для .slider-item
      _sliderItems = _mainElement.querySelectorAll(".slider__item"), // элементы (.slider-item)
      _sliderControls = _mainElement.querySelectorAll(".slider__control"), // элементы управления
      _sliderControlLeft = _mainElement.querySelector(".slider__control_left"), // кнопка "LEFT"
      _sliderControlRight = _mainElement.querySelector(
        ".slider__control_right"
      ), // кнопка "RIGHT"
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
      _positionLeftItem = 0, // позиция левого активного элемента
      _transform = 0, // значение транфсофрмации .slider_wrapper
      _step = (_itemWidth / _wrapperWidth) * 100, // величина шага (для трансформации)
      _items = []; // массив элементов
    // наполнение массива _items
    _sliderItems.forEach(function (item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });

    var position = {
      getMin: 0,
      getMax: _items.length - 1,
    };

    var _transformItem = function (direction) {
      if (direction === "right") {
        if (
          _positionLeftItem + _wrapperWidth / _itemWidth - 1 >=
          position.getMax
        ) {
          return;
        }
        if (!_sliderControlLeft.classList.contains("slider__control_show")) {
          _sliderControlLeft.classList.add("slider__control_show");
        }
        if (
          _sliderControlRight.classList.contains("slider__control_show") &&
          _positionLeftItem + _wrapperWidth / _itemWidth >= position.getMax
        ) {
          _sliderControlRight.classList.remove("slider__control_show");
        }
        _positionLeftItem++;
        _transform -= _step;
      }
      if (direction === "left") {
        if (_positionLeftItem <= position.getMin) {
          return;
        }
        if (!_sliderControlRight.classList.contains("slider__control_show")) {
          _sliderControlRight.classList.add("slider__control_show");
        }
        if (
          _sliderControlLeft.classList.contains("slider__control_show") &&
          _positionLeftItem - 1 <= position.getMin
        ) {
          _sliderControlLeft.classList.remove("slider__control_show");
        }
        _positionLeftItem--;
        _transform += _step;
      }
      _sliderWrapper.style.transform = "translateX(" + _transform + "%)";
    };

    // обработчик события click для кнопок "назад" и "вперед"
    var _controlClick = function (e) {
      if (e.target.classList.contains("slider__control")) {
        e.preventDefault();
        var direction = e.target.classList.contains("slider__control_right")
          ? "right"
          : "left";
        _transformItem(direction);
      }
    };

    var _setUpListeners = function () {
      // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
      _sliderControls.forEach(function (item) {
        item.addEventListener("click", _controlClick);
      });
    };

    // инициализация
    _setUpListeners();

    return {
      right: function () {
        // метод right
        _transformItem("right");
      },
      left: function () {
        // метод left
        _transformItem("left");
      },
    };
  };
})();

var slider = multiItemSlider(".slider");
//Слайдер1.................................................................

//Слайдер2

"use strict"; //строгий режим
var multiItemSlider_2 = (function () {
  return function (selector, config) {
    var _mainElement = document.querySelector(selector), // основный элемент блока
      _sliderWrapper_2 = _mainElement.querySelector(".slider__wrapper_2"), // обертка для .slider-item
      _sliderItems_2 = _mainElement.querySelectorAll(".slider__item_2"), // элементы (.slider-item)
      _sliderControls_2 = _mainElement.querySelectorAll(".slider__control_2"), // элементы управления
      _sliderControlLeft_2 = _mainElement.querySelector(".slider__control_left_2"), // кнопка "LEFT"
      _sliderControlRight_2 = _mainElement.querySelector(
        ".slider__control_right_2"
      ), // кнопка "RIGHT"
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper_2).width), // ширина обёртки
      _itemWidth = parseFloat(getComputedStyle(_sliderItems_2[0]).width), // ширина одного элемента
      _positionLeftItem = 0, // позиция левого активного элемента
      _transform = 0, // значение транфсофрмации .slider_wrapper
      _step = (_itemWidth / _wrapperWidth) * 100, // величина шага (для трансформации)
      _items = []; // массив элементов
    // наполнение массива _items
    _sliderItems_2.forEach(function (item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });

    var position = {
      getMin: 0,
      getMax: _items.length - 1,
    };

    var _transformItem = function (direction) {
      if (direction === "right") {
        if (
          _positionLeftItem + _wrapperWidth / _itemWidth - 1 >=
          position.getMax
        ) {
          return;
        }
        if (!_sliderControlLeft_2.classList.contains("slider__control_show_2")) {
          _sliderControlLeft_2.classList.add("slider__control_show_2");
        }
        if (
          _sliderControlRight_2.classList.contains("slider__control_show_2") &&
          _positionLeftItem + _wrapperWidth / _itemWidth >= position.getMax
        ) {
          _sliderControlRight_2.classList.remove("slider__control_show_2");
        }
        _positionLeftItem++;
        _transform -= _step;
      }
      if (direction === "left") {
        if (_positionLeftItem <= position.getMin) {
          return;
        }
        if (!_sliderControlRight_2.classList.contains("slider__control_show_2")) {
          _sliderControlRight_2.classList.add("slider__control_show_2");
        }
        if (
          _sliderControlLeft_2.classList.contains("slider__control_show_2") &&
          _positionLeftItem - 1 <= position.getMin
        ) {
          _sliderControlLeft_2.classList.remove("slider__control_show_2");
        }
        _positionLeftItem--;
        _transform += _step;
      }
      _sliderWrapper_2.style.transform = "translateX(" + _transform + "%)";
    };

    // обработчик события click для кнопок "назад" и "вперед"
    var _controlClick = function (e) {
      if (e.target.classList.contains("slider__control_2")) {
        e.preventDefault();
        var direction = e.target.classList.contains("slider__control_right_2")
          ? "right"
          : "left";
        _transformItem(direction);
      }
    };

    var _setUpListeners = function () {
      // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
      _sliderControls_2.forEach(function (item) {
        item.addEventListener("click", _controlClick);
      });
    };

    // инициализация
    _setUpListeners();

    return {
      right: function () {
        // метод right
        _transformItem("right");
      },
      left: function () {
        // метод left
        _transformItem("left");
      },
    };
  };
})();

var slider = multiItemSlider_2(".slider_2");

//Слайдер2..........................................................
    