const tileDisplay = document.querySelector('.tile-container');
const keyboard = document.querySelector('.key-container');
// array of keys
const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«'
]
const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

guessRows.forEach(guessRow => {
    const rowElement = document.createElement('div');
})

const handleClick = () => {
    console.log('clicked');
}
// for each key create a button element in the keyboard
keys.forEach(key => {
    var buttonElement = document.createElement('button');
    buttonElement.textContent = key;
    buttonElement.setAttribute('id', key);
    buttonElement.addEventListener('click', handleClick)
    keyboard.append(buttonElement);
})
