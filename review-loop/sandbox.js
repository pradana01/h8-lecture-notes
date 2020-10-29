/**
 * REVIEW ITERATION & LOOP
 * =====================================
 * 
 * Objectives:
 * 1. Iteration             [X]
 * 2. For loop              [X]
 * 3. While Loop            [X]
 * 4. Do While              [X]
 * 5. Demo dengan soal      []
 * 
 */

// For Loop
// note: For loop digunakan saat kita tahu sampai kapan dia akan dijalankan


var string = 'possible';
/**
 * Pseudocode FOR LOOP:
 * FOR i FROM 0 TO 9 INCREMENT BY 1
 *      FOR j FROM 0 TO 2 INCREMENT BY 1
 *          DISPLAY i AND j
 *      END FOR
 * END FOR
 */
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 3; j++) {
        console.log(i, j)
    }
}


// While Loop
// Note: Digunakan saat kita tidak tahu sampai kapan dia akan berjalan
/**
 * Pseudocode WHILE LOOP:
 * STORE i WITH 0
 * WHILE i LESS THAN 5
 *      DISPLAY 'Ini while loop'
 *      INCREMENT i BY 1
 * END WHILE
 * 
 */
var i = 0
while (i < 5) {
    console.log('Ini while loop')
    i++
}



var money = 1000000
var counter = 0
while (money >= 23000) {
    money -= 23000
    counter++
    console.log('Berhasil beli baju ke ' + counter + ' & sisa uangnya adalah ' + money)
}


// Do While
// Note: Bedanya dengan While Loop, adalah dia akan selalu melaksanakan statementnya terlebih dahulu, baru kemudian dia cek kondisi

console.log('Do While')
console.log('=================')

/**
 * Pseudocode DO WHILE:
 * STORE i WITH 0
 * DO
 *      DISPLAY 'Ini dari Do while loop'
 *      INCREMENT i BY 1
 * WHILE i LESS THAN 0
 */
var i = 0
do {
    console.log('Ini dari Do while loop')
    i++
} while (i < 0)



console.log('While Loop')
console.log('=================')
var j = 0
while (j < 0) {
    console.log('Ini dari while loop')
    j++
}
