const renderer = new Renderer()
let board

const start = () => {
    let rowNum = parseInt($("#rows").val())
    let colNum = parseInt($("#columns").val())
    if (rowNum === NaN || colNum === NaN) { return }
    board = new GoldRush(rowNum, colNum)
    board.load(rowNum, colNum)

    renderer.renderBoard(board.matrix)
    renderer.renderScoreBoard(board.scores)
    renderer.renderWinner()
}

$(document).keypress(function (e) {
    if (!board) { return }
    if (e.which == 119) {board.movePlayer(1, "up")}
    if (e.which == 97) { board.movePlayer(1, "left")}
    if (e.which == 100) { board.movePlayer(1, "right")}
    if (e.which == 115) { board.movePlayer(1, "down")}
    if (e.which == 105) { board.movePlayer(2, "up")}
    if (e.which == 106) { board.movePlayer(2, "left")}
    if (e.which == 107) { board.movePlayer(2, "down")}
    if (e.which == 108) { board.movePlayer(2, "right")}
    if (e.which == 13) { return start() }
    renderer.renderBoard(board.matrix)
    renderer.renderScoreBoard(board.scores)
    if (board.noCoinsLeft()) {
        let winner = board.getWinner()
        renderer.renderWinner(winner)
    }
})