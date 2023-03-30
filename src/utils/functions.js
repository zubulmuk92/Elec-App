export function updatePourcentage(i) {
    let valAnn4=0;
    switch(i) {
        case 1:valAnn4=1; break;
        case 2:valAnn4=2; break;
        case 5:valAnn4=0.5; break;
        case 6:valAnn4=0.25; break;
        case 7:valAnn4=0.1; break;
        case 8:valAnn4=0.05; break;
    }

    return valAnn4;
}

export function updateMultiplier(i) {
    let valAnn3=0;
    switch(i) {
        case 0: valAnn3=1; break;
        case 1: valAnn3=10; break;
        case 2: valAnn3=100; break;
        case 3: valAnn3=1000; break;
        case 4: valAnn3=10000; break;
        case 5: valAnn3=100000; break;
        case 6: valAnn3=1000000; break;
        case 7: valAnn3=10000000; break;
        case 8: valAnn3=100000000; break;
        case 9: valAnn3=1000000000; break;
        case 10: valAnn3=0.1; break;
        case 11: valAnn3=0.01; break;
    }

    return valAnn3;
}