input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    P1 = 0
    P2 = 0
    rounds = 0
    Ties = 0
    basic.showString("Shall we play a game?")
    basic.pause(200)
    OLED.clear()
    OLED.writeStringNewLine("player 1 score" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("player 2 score" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + rounds)
    OLED.newLine()
}
let Ties = 0
let rounds = 0
let P2 = 0
let P1 = 0
Reset()
basic.forever(function () {
	
})
