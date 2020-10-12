energy = 0
clickPower = 1
nextPower = 2
clickPowerCost = 10
nextCost = 18
energyPerSecond = 0
plants = [0, 0, 0, 0, 0]
costs = [100, 1000, 10000, 100000, 1000000] // These three lines (costs, cps, upgCosts) are not final, adjust as needed
cps = [1, 10, 100, 1000, 10000]
upgCosts = [2000, 20000, 200000, 2000000, 20000000]
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
        nextPower *= 1.4 // adjust as needed, needs to be at least 1.25
        Math.round(nextPower)
        clickPowerCost = nextCost
        nextCost *= 1.9 // adjust as needed, the higher nextCost - nextPower, the less effective clicking upgrades are, but this works for now
        Math.round(nextCost)
        clickPower = Number(clickPower.toFixed(0))
        clickPowerCost = Number(clickPowerCost.toFixed(0))
        nextPower = Number(nextPower.toFixed(0))
        document.getElementsByClassName('increaseClickPower')[0].innerHTML = `Increase Click Power: ${clickPower} -> ${nextPower} for ${clickPowerCost} J`
    }
    document.getElementsByClassName('energyscore')[0].innerHTML = `${energy} joules`
}
function buy(n) {
    if (energy >= costs[n]) {
        energy -= costs[n]
        plants[n] += 1
        editCPS()
    }
}
function upg(n) {
    // to fill in
}
function editCPS() {
    energyPerSecond = 0
    for (i = 0; i < plants.length; i++) {
        energyPerSecond += (plants[i] * cps[i])
    }
    document.getElementsByClassName('energypersecond')[0].innerHTML = `${energyPerSecond} joules/second`
    document.getElementsByClassName('energyscore')[0].innerHTML = `${energy} joules`
}