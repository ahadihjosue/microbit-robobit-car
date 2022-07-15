def on_button_pressed_a():
    robobit.select_model(RBModel.MK3)
    robobit.rb_enable_bluetooth(RBBluetooth.BT_ENABLE)
    robobit.go(RBDirection.FORWARD, 60)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_tilt_left():
    robobit.select_model(RBModel.MK3)
    robobit.rb_enable_bluetooth(RBBluetooth.BT_ENABLE)
    robobit.rotate(RBRobotDirection.LEFT, 60)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_b():
    robobit.select_model(RBModel.MK3)
    robobit.rb_enable_bluetooth(RBBluetooth.BT_ENABLE)
    robobit.go(RBDirection.REVERSE, 60)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_tilt_right():
    robobit.select_model(RBModel.MK3)
    robobit.rb_enable_bluetooth(RBBluetooth.BT_ENABLE)
    robobit.rotate(RBRobotDirection.RIGHT, 60)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)
