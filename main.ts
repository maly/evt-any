input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_CLICK
    )
})
const onButtonB = () => {
    if (control.eventValue()==EventBusValue.MICROBIT_BUTTON_EVT_DOWN) {
        basic.showIcon(IconNames.No,0)
    }
    if (control.eventValue() == EventBusValue.MICROBIT_BUTTON_EVT_CLICK) {
        basic.showIcon(IconNames.Yes,0)
    }

    
}
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B,EventBusValue.MICROBIT_EVT_ANY,onButtonB,0x0020)
