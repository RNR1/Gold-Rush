class GoldRush extends Matrix {
    constructor(numRows, NumCols) {
        super(numRows, NumCols)
        this.scores = {player1: 0, player2: 0}       
    }

    generateCoins(coinAmount) {
        for (let i = 0; i < coinAmount; i++) {
            let coinLocation = {y: Math.floor(Math.random() * coinAmount), x: Math.floor(Math.random() * coinAmount)}
            if (this.isWall(coinLocation.y,coinLocation.x) || this.isPlayer(coinLocation.y,coinLocation.x) || this.isCoin(coinLocation.y, coinLocation.x)) { i-- }
            else { this.alter(coinLocation.y, coinLocation.x, 'c') }
        }
    }
    
    generateWalls(wallsAmount) {
        for (let i = 0; i < wallsAmount; i++) {
            let wallLocation = {y: Math.floor(Math.random() * wallsAmount), x: Math.floor(Math.random() * wallsAmount)}
            if (this.isPlayer(wallLocation.y, wallLocation.x)) { i-- }
            else {this.alter(wallLocation.y, wallLocation.x, 'w')}
        }
    }

    generatePlayers(rowNum, colNum) {
        this.alter(0, 0, 1)
        this.alter(rowNum - 1, colNum - 1, 2)
    }

    movePlayer(player, direction) {
        let currentLocation = this.findCoordinate(player)
        let newLocation = this.getNewLocation(currentLocation, direction)
        let validationMessage = this.validateMove(newLocation)
        if (validationMessage === "OK") {
            this.alter(currentLocation.y, currentLocation.x, '.')
            if (this.isCoin(newLocation.y, newLocation.x)) { this.collectCoin(player)}
            this.alter(newLocation.y, newLocation.x, player)
        }
        else { 
            return validationMessage
        }
    }

    getNewLocation(currentLocation, direction) {
        let newLocation    
        if (direction === "down") {
            newLocation = {x: currentLocation.x, y: currentLocation.y + 1}            
        }
        if (direction === "left") {
            newLocation = {x: currentLocation.x - 1, y: currentLocation.y}
        }
        if (direction === "up") {
            newLocation = {x: currentLocation.x, y: currentLocation.y - 1}
            
        }
        if (direction === "right") {
            newLocation = {x: currentLocation.x + 1, y: currentLocation.y}
        }
        return newLocation
    }

    collectCoin(player) {
        this.scores["player" + player] += 10
    }

    isPlayer(rowNum,colNum) {
        let place = this.get(rowNum, colNum)
        return place === 1 || place === 2
    }

    isCoin(rowNum, numCols) {
        return this.get(rowNum, numCols) === 'c'
    }

    isWall(rowNum, numCols) {
        return this.get(rowNum, numCols) === 'w'
    }
    isOutOfBounds(location) {
        let matrixY = this.matrix.length - 1
        let matrixX = this.matrix[matrixY].length - 1
        return location.x < 0 || location.y < 0 || location.x > matrixX || location.y > matrixY
    }

    validateMove(location) {
        try {
        if (this.isOutOfBounds(location)) { throw new Error("Can't move out of bounds")}
        if (this.isWall(location.y, location.x)) { throw new Error("Wrong Move")}
        if (this.isPlayer(location.y, location.x)) { throw new Error("Can't step on other players")}
        }
        catch(err) {
            return err.message
        }
        return "OK"
    }

    noCoinsLeft() {
        try {
        this.findCoordinate('c')
        } catch (err) {
            return true
        } 
        return false
    }

    getWinner() {
        if (this.scores.player1 === this.scores.player2) { return "Tie"}
        return this.scores.player1 > this.scores.player2 ? 1 : 2
    }

    load(rowNum, colNum) {
        this.generateCoins(Math.floor((rowNum + colNum) / 2))
        this.generateWalls(Math.floor((rowNum + colNum) / 2))
        this.generatePlayers(rowNum, colNum)
    }
}