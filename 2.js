const x = 5;


switch (typeof(x)) {
    case "number":
        console.log('x - число');
        break;
    case "string":
        console.log('x - строка');
        break;
    case "boolean":
        console.log('x - огический тип');
        break;
    default:
        console.log('Тип x не определён');
}

