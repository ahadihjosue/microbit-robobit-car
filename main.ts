input.onButtonPressed(Button.A, function () {
    robobit.select_model(RBModel.Mk3)
    robobit.rbEnableBluetooth(RBBluetooth.btEnable)
    robobit.go(RBDirection.Forward, 60)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    robobit.select_model(RBModel.Mk3)
    robobit.rbEnableBluetooth(RBBluetooth.btEnable)
    robobit.rotate(RBRobotDirection.Right, 60)
})
input.onButtonPressed(Button.AB, function () {
    robobit.stop(RBStopMode.Brake)
})
input.onButtonPressed(Button.B, function () {
    robobit.select_model(RBModel.Mk3)
    robobit.rbEnableBluetooth(RBBluetooth.btEnable)
    robobit.go(RBDirection.Reverse, 60)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    robobit.select_model(RBModel.Mk3)
    robobit.rbEnableBluetooth(RBBluetooth.btEnable)
    robobit.rotate(RBRobotDirection.Left, 60)
})
