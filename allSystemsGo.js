let systems = {
    power: {
      batteries: true,
      solarCells: true,
      generator: true,
      fuelCells: true
    },
    telecoms: {
      antennas: {
        highGain: true,
        mediumGain: true,
        lowGain: true
      },
      transmitter: true,
      receiver: true
    },
    attitudeControl: {
      stabilization: {
        spin: true,
        threeAxis: true
      }
    },
    propulsion: {
      engines: {
        engine1: true,
        engine2: true,
        engine3: false
      },
      thrusters: true,
      propellant: true
    },
    environment: {
      cooling: true,
      heating: true,
      lifeSupport: true
    }
  };
  

  function allSystemsGo(obj,sys=[])
  {
    for(let key in obj)
    {
      if(typeof obj[key] !== 'boolean')
      {
        allSystemsGo(obj[key],sys);
      }
      else
      {
        sys.push(obj[key]);
      }
    }
    return sys.every(e => e === true); 
 }
 

  console.log(allSystemsGo(systems)); // => false