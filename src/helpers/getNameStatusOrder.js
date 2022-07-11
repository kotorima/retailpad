const getNameStatusOrder = (id) => {
    let name = '';

    switch (id) {
        case 1:
            name = 'Новый';
            break;
        case 2:
            name = 'В обработке';
            break;
        case 3:
            name = 'Принят';
            break;
        case 4:
            name = 'Предзаказ';
            break;
        case 5:
            name = 'В производстве';
            break;
        case 6:
            name = 'Произведен';
            break;
        case 7:
            name = 'В пути';
            break;
        case 8:
            name = 'Выполнен';
            break;
        case 12:
            name = 'Контроль';
            break;
        default:
            name = '';
    };

    return name;
};

export default getNameStatusOrder;