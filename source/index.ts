"use strict"

import Decimal from "decimal.js"
import createConverter from "create-converter"

const dividedBy = (amount: number) => new Decimal(1).dividedBy(amount)

const pi = Decimal.acos(-1)

export const area = createConverter({
	squareKilometre: 1,
	squareMetre: 1e6,
	squareMile: dividedBy(2.59),
	squareYard: 1.196e6,
	squareFoot: 1.076e7,
	squareInch: 1.55e9,
	hectare: 100,
	acre: 247
})

export const dataTransferRate = createConverter({
	bitPerSecond: 8e12,
	kilobitPerSecond: 8e9,
	kilobytePerSecond: 1e9,
	kibibitPerSecond: 7.812e9,
	megabitPerSecond: 8e6,
	megabytePerSecond: 1e6,
	mebibitPerSecond: 7.629e6,
	gigabitPerSecond: 8000,
	gigabytePerSecond: 1000,
	gibibitPerSecond: 7451,
	terabitPerSecond: 8,
	terabytePerSecond: 1,
	tebibitPerSecond: 7.276
})

export const digitalStorage = createConverter({
	bit: 18e15,
	kilobit: 8e12,
	kibibit: 7.812e12,
	megabit: 8e9,
	mebibit: 7.629e9,
	gigabit: 8e6,
	gibibit: 7.451e6,
	terabit: 8000,
	tebibit: 7276,
	petabit: 8,
	pebibit: 7.105,
	byte: 1e15,
	kilobyte: 1e12,
	kibibyte: 9.766e11,
	megabyte: 1e9,
	mebibyte: 9.537e8,
	gigabyte: 1e6,
	gibibyte: 931323,
	terabyte: 1000,
	tebibyte: 909,
	petabyte: 1,
	pebibyte: dividedBy(1.126)
})

export const energy = createConverter({
	joule: 3.6e6,
	kilojoule: 3600,
	gramCalorie: 860421,
	kilocalorie: 860,
	wattHour: 1000,
	kilowattHour: 1,
	electronvolt: dividedBy(9.223e18),
	britishThermalUnit: dividedBy(3412),
	usTherm: dividedBy(29.3),
	footPound: 2.655e6
})

export const frequency = createConverter({
	hertz: 1e9,
	kilohertz: 1e6,
	megahertz: 1000,
	gigahertz: 1
})

export const fuelEconomy = createConverter({
	milePerUSGallon: {
		toBase: amount => amount.dividedBy(2.352),
		fromBase: amount => amount.times(2.352)
	},
	milePerGallon: {
		toBase: amount => amount.dividedBy(2.825),
		fromBase: amount => amount.times(2.825)
	},
	kilometrePerLitre: true,
	litrePer100Kilometres: {
		toBase: amount => new Decimal(100).dividedBy(amount),
		fromBase: amount => new Decimal(100).dividedBy(amount)
	}
})

export const length = createConverter({
	kilometre: 1,
	metre: 1000,
	centimeter: 100000,
	millimetre: 1e6,
	micrometre: 1e9,
	nanometre: 1e12,
	mile: dividedBy(1.609),
	yard: 1094,
	foot: 3281,
	inch: 39370,
	nauticalMile: dividedBy(1.852)
})

export const mass = createConverter({
	tonne: 1,
	kilogram: 1000,
	gram: 1e6,
	milligram: 1e9,
	microgram: 1e12,
	imperialTon: dividedBy(1.016),
	usTon: 1.102,
	stone: 157,
	pound: 2205,
	ounce: 35274
})

export const planeAngle = createConverter({
	degree: 1,
	gradian: new Decimal(200).dividedBy(180),
	milliradian: pi.times(1000).dividedBy(180),
	minuteOfArc: 60,
	radian: pi.dividedBy(180),
	secondOfArc: 3600
})

export const pressure = createConverter({
	bar: 1,
	pascal: 1000000,
	poundForcePerSquareInch: 14.504,
	standardAtmosphere: dividedBy(1.013),
	torr: 750
})

export const speed = createConverter({
	milesPerHour: 2.237,
	footPerSecond: 3.281,
	metrePerSecond: 1,
	kilometrePerHour: 3.6,
	knot: 1.944
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
