class Matrix {
    constructor(numRows, NumCols) {
        this.matrix = this.generateMatrix(numRows, NumCols)
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push('.')
            }
        }
        return matrix
    }

    get (rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }
    
    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i].join("\t"))
        }
    }

    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }

    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++)
        console.log(this.matrix[rowNum][i])
    }

    alter(rowNum, rowCol, value) {
        this.matrix[rowNum][rowCol] = value
    }

    findCoordinate(value) {
        let y = this.matrix.findIndex(r => r.includes(value))
        let x = this.matrix[y].findIndex(c => c === value)
        return {x, y}
    }
}