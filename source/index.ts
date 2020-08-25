"use strict"

import Decimal from "decimal.js"
import createConverter from "create-converter"

const inverseDecimal = (amount: number) => new Decimal(1).dividedBy(amount)

export const area = createConverter({
	squareKilometre: 1,
	squareMetre: 1e6,
	squareMile: inverseDecimal(2.59),
	squareYard: 1.196e6,
	squareFoot: 1.076e7,
	squareInch: 1.55e9,
	hectare: 100,
	acre: 247
})

export const dataTransferRate = createConverter({
	bitPerSecond: 1,
	kilobitPerSecond: inverseDecimal(1000),
	kilobytePerSecond: inverseDecimal(8000),
	kibibitPerSecond: inverseDecimal(1024),
	megabitPerSecond: inverseDecimal(1e6),
	megabytePerSecond: inverseDecimal(8e6),
	mebibitPerSecond: inverseDecimal(1.049e+6),
	gigabitPerSecond: inverseDecimal(1e9),
	gigabytePerSecond: inverseDecimal(8e9),
	gibibitPerSecond: inverseDecimal(1.074e9),
	terabitPerSecond: inverseDecimal(1e12),
	terabytePerSecond: inverseDecimal(8e12),
	tebibitPerSecond: inverseDecimal(1.1e12)
})

export const digitalStorage = createConverter({
	bit: 1,
	kilobit: inverseDecimal(1000),
	kibibit: inverseDecimal(1024),
	megabit: inverseDecimal(1e+6),
	mebibit: inverseDecimal(1.049e6),
	gigabit: inverseDecimal(1e9),
	gibibit: inverseDecimal(1.074e9),
	terabit: inverseDecimal(1e+12),
	tebibit: inverseDecimal(1.1e12),
	petabit: inverseDecimal(1e15),
	pebibit: inverseDecimal(1.126e15),
	byte: inverseDecimal(8),
	kilobyte: inverseDecimal(8000),
	kibibyte: inverseDecimal(8192),
	megabyte: inverseDecimal(8e6),
	mebibyte: inverseDecimal(8.389e6),
	gigabyte: inverseDecimal(8e9),
	gibibyte: inverseDecimal(8.59e9),
	terabyte: inverseDecimal(8e12),
	tebibyte: inverseDecimal(8.796e12),
	petabyte: inverseDecimal(8e15),
	pebibyte: inverseDecimal(9.007e15)
})


export const temperature = createConverter({
	celsius: true,
	fahrenheit: {
		toBase: amount => amount.minus(32).times(5).dividedBy(9),
		fromBase: amount => amount.times(9).dividedBy(5).add(32)
	},
	kelvin: {
		toBase: amount => amount.minus(273.15),
		fromBase: amount => amount.add(273.15)
	}
})
