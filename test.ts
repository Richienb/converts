import {temperature} from "./source"
import test, {Assertions} from "ava"

test("main", (t: Assertions) => {
	t.is(temperature.celsius.kelvin(22), 295.15)
})
