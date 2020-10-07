energy = 0
clickPower = 1
nextPower = 2
clickPowerCost = 10
nextCost = 18
energyPerSecond = 0
function getEnergy() {
    energy += clickPower
    document.getElementsByClassName('energyscore')[0].innerHTML = `${energy} joules`
}
function increaseClickPower() {
    if (energy >= clickPowerCost) {
        energy -= clickPowerCost
        Math.round(clickPowerCost)
        Math.round(clickPower)
        clickPower = nextPower
        nextPower *= 1.4 // adjust as needed
        Math.round(nextPower)
        clickPowerCost = nextCost
        nextCost *= 1.9 // adjust as needed
        Math.round(nextCost)
        clickPower = Number(clickPower.toFixed(0))
        clickPowerCost = Number(clickPowerCost.toFixed(0))
        nextPower = Number(nextPower.toFixed(0))
        document.getElementsByClassName('increaseClickPower')[0].innerHTML = `Increase Click Power: ${clickPower} -> ${nextPower} for ${clickPowerCost} J`
    }
    document.getElementsByClassName('energyscore')[0].innerHTML = `${energy} joules`
}
function buy(n) {
    // to fill in
}