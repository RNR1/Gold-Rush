class Renderer {
    constructor() {
        this.boardSource = $('#board-template')
        this.scoreSource = $('#score-template')
        this.board = $('#board')
        this.scoreBoard = $('#scores')
        this.winner = $('#winner')
    }

    renderBoard(matrix) {
        const source = this.boardSource.html()
        const template = Handlebars.compile(source)

        const board = template({matrix})
        this.board.html(board)
        this.renderIcons()
    }

    renderScoreBoard(scores) {
        const source = this.scoreSource.html()
        const template = Handlebars.compile(source)

        const scoreBoard = template(scores)
        this.scoreBoard.html(scoreBoard)
    }

    renderWinner(player) {
        if (player === undefined) { return this.winner.html("") } 
        if (player === "Tie") { return this.winner.html("It's a Tie!") }
        this.winner.html(`Player ${player} Wins!`)
    }

    renderIcons() {
        $(".c").html(`<i class="fab fa-bitcoin"></i>`)
        $(".1").html(`<i class="far fa-smile"></i>`)
        $(".2").html(`<i class="fas fa-smile"></i>`)
    }
}