ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.73, 37.75],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),
        whiteCollection = new ymaps.GeoObjectCollection(null, {
            preset: 'islands#yellowIcon'
        }),
        blackCollection = new ymaps.GeoObjectCollection(null, {
            preset: 'islands#blueIcon'
        }),
        whiteCoords = [[55.73, 37.75], [55.81, 37.75]],
        blackCoords = [[55.73, 37.65], [55.81, 37.65]];

    for (var i = 0, l = whiteCoords.length; i < l; i++) {
        whiteCollection.add(new ymaps.Placemark(whiteCoords[i], {
            hintContent: 'Собственный значок белой метки',
            balloonContent: 'Это белая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/icon-marker-white.png',
            // Размеры метки.
            iconImageSize: [43, 53],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -53]
        }));
    }

    for (var i = 0, l = blackCoords.length; i < l; i++) {
        blackCollection.add(new ymaps.Placemark(blackCoords[i], {
            hintContent: 'Собственный значок черной метки',
            balloonContent: 'Это черная метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/icon-marker-black.png',
            // Размеры метки.
            iconImageSize: [43, 53],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -53]
        }));
    }

    myMap.geoObjects.add(whiteCollection).add(blackCollection);

    // Через коллекции можно подписываться на события дочерних элементов.
    whiteCollection.events.add('click', function () { alert('Кликнули по белой метке') });
    blackCollection.events.add('click', function () { alert('Кликнули по черной метке') });

    // Через коллекции можно задавать опции дочерним элементам.
    blackCollection.options.set('preset', 'islands#blueDotIcon');
}
