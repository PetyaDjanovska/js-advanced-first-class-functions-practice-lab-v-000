// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(driver => {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(driver => {
    if (driver.hometown === hometown){
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers){
  return drivers.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0); )
}
