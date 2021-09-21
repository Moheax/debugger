let teller = 0
let teller_y = 0
basic.forever(function () {
    led.plot(teller, teller_y)
    teller = teller + 1
    basic.pause(100)
    basic.clearScreen()
    if (teller == 5) {
        teller = 0
        teller_y = teller_y + 1
    }
})
