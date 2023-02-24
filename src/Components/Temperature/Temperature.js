import React from 'react'

const Temperature = () => {
  const [Temperature, setTemperature] = useState(10)
  const [Feel, setFeel] = useState("cold")

  const increaseTemperature = () => {
     const newTemperature = Temperature + 1
     setTemperature(newTemperature)
     if (newTemperature>=15) {
        setFeel("hot")
     } 
  }

  const decreaseTemperature = () => {
    const newTemperature = Temperature - 1
    setTemperature(newTemperature)
    if (newTemperature< 15) {
        setFeel("cold") 
    }
  }
  

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${ Feel }`}>{ Temperature }*C</div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
}

export default Temperature
