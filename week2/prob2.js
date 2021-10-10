const fs = require('fs')

const textbook = {
    title: 'LECTURE NOTES ON CALCULUS AT POSTECH -for students who learned some Calculus before-',
    author: 'Kang-Tae Kim',
    subject: ['Calculus1', 'Calculus2']
}

const textbookJSON = JSON.stringify(textbook)
fs.writeFileSync('textbook.json', textbookJSON)