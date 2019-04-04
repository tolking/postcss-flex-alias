function checkValue0(decl, value) {
    switch (value) {
    case 'y':
        decl.cloneBefore({
            prop: 'flex-direction',
            value: 'column'
        });
        break;
    case 'w':
        decl.cloneBefore({
            prop: 'flex-wrap',
            value: 'wrap'
        });
        break;
    case 'm':
        decl.cloneBefore({
            prop: 'flex-direction',
            value: 'column'
        });
        decl.cloneBefore({
            prop: 'flex-wrap',
            value: 'wrap'
        });
        break;
    default:
        break;
    }
}
function checkValue1(decl, value) {
    switch (value) {
    case 's':
        decl.cloneBefore({
            prop: 'justify-content',
            value: 'flex-start'
        });
        break;
    case 'a':
        decl.cloneBefore({
            prop: 'justify-content',
            value: 'space-around'
        });
        break;
    case 'b':
        decl.cloneBefore({
            prop: 'justify-content',
            value: 'space-between'
        });
        break;
    case 'c':
        decl.cloneBefore({
            prop: 'justify-content',
            value: 'center'
        });
        break;
    case 'e':
        decl.cloneBefore({
            prop: 'justify-content',
            value: 'flex-end'
        });
        break;
    default:
        break;
    }
}
function checkValue2(decl, value) {
    switch (value) {
    case 's':
        decl.cloneBefore({
            prop: 'align-items',
            value: 'flex-start'
        });
        break;
    case 'b':
        decl.cloneBefore({
            prop: 'align-items',
            value: 'baseline'
        });
        break;
    case 'c':
        decl.cloneBefore({
            prop: 'align-items',
            value: 'center'
        });
        break;
    case 'e':
        decl.cloneBefore({
            prop: 'align-items',
            value: 'flex-end'
        });
        break;
    case 'h':
        decl.cloneBefore({
            prop: 'align-items',
            value: 'stretch'
        });
        break;
    default:
        break;
    }
}
function checkValue3(decl, value) {
    switch (value) {
    case 's':
        decl.cloneBefore({
            prop: 'align-content',
            value: 'flex-start'
        });
        break;
    case 'a':
        decl.cloneBefore({
            prop: 'align-content',
            value: 'space-around'
        });
        break;
    case 'b':
        decl.cloneBefore({
            prop: 'align-content',
            value: 'space-between'
        });
        break;
    case 'c':
        decl.cloneBefore({
            prop: 'align-content',
            value: 'center'
        });
        break;
    case 'e':
        decl.cloneBefore({
            prop: 'align-content',
            value: 'flex-end'
        });
        break;
    default:
        break;
    }
}

module.exports = function (decl) {
    const values = decl.value.split('-')[1].split('');
    decl.cloneBefore({
        prop: 'display',
        value: 'flex'
    });
    checkValue0(decl, values[0]);
    checkValue1(decl, values[1]);
    checkValue2(decl, values[2]);
    if (values[0] === 'w' || values[0] === 'm') {
        checkValue3(decl, values[3]);
    }
    decl.remove();
};
