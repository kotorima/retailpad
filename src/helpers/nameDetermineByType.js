const nameDetermineByType = (type) => {
    let name = '';

    switch (type) {
        case "card":
            name = 'оплата картой';
            break;
        case "cash":
            name = 'наличный расчет';
            break;
        case "online":
            name = 'оплата онлайн';
            break;
        case "pickup":
            name = 'самовывоз';
            break;
        case "courier":
            name = 'доставка';
            break;
        default:
            name = '';
    };

    return name;
};

export default nameDetermineByType;