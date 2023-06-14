import React, { useState } from 'react';

const CalculsResistances = () => {
    const [resistances, setResistances] = useState([{ value: 1, unit: '1' }]);
    const [selectedUnit, setSelectedUnit] = useState('1');
  
    const addResistance = () => {
      const newResistances = [...resistances, { value: 1, unit: '1' }];
      setResistances(newResistances);
    };
  
    const removeResistance = (index) => {
      const newResistances = [...resistances];
      newResistances.splice(index, 1);
      setResistances(newResistances);
    };
  
    const updateResistanceValue = (index, value) => {
      const newResistances = [...resistances];
      newResistances[index].value = value;
      setResistances(newResistances);
    };
  
    const updateResistanceUnit = (index, unit) => {
      const newResistances = [...resistances];
      newResistances[index].unit = unit;
      setResistances(newResistances);
    };
  
    const calculateSeriesResistance = () => {
      let totalResistance = resistances.reduce((sum, resistance) => sum + parseFloat(resistance.value)*parseFloat(resistance.unit), 0);
      console.log(resistances);

      if (totalResistance<1e3) {
        return totalResistance.toFixed(2) + " Ohm";
      } else if (totalResistance>1e3 && totalResistance<1e6) {
        totalResistance=totalResistance/1e3;
        return totalResistance.toFixed(2) + " KOhm";
      } else if (totalResistance>1e6) {
        totalResistance=totalResistance/1e6;
        return totalResistance.toFixed(2) + " MOhm";
      }
      
    };
  
    const calculateParallelResistance = () => {
      const inverseSum = resistances.reduce((sum, resistance) => sum + 1 / (parseFloat(resistance.value)*parseFloat(resistance.unit)), 0);
      let totalResistance = 1 / inverseSum;
      
      if (totalResistance<1e3) {
        return totalResistance.toFixed(2) + " Ohm";
      } else if (totalResistance>1e3 && totalResistance<1e6) {
        totalResistance=totalResistance/1e3;
        return totalResistance.toFixed(2) + " KOhm";
      } else if (totalResistance>1e6) {
        totalResistance=totalResistance/1e6;
        return totalResistance.toFixed(2) + " MOhm";
      }
    };
  
    return (
        <>
        <div className="bg-gray-800 p-4 md:rounded-lg mb-3">
            <h2 className="text-white text-2xl mb-4">Calculateur de résistances</h2>
            <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={addResistance}
            >
            Ajouter une résistance
            </button>
            {resistances.map((resistance, index) => (
            <div key={index} className="flex items-center mb-4">
                <input
                type="number"
                value={resistance.value}
                onChange={(e) => updateResistanceValue(index, e.target.value)}
                className="bg-gray-900 text-white px-4 py-2 rounded mr-4"
                />
                <select
                value={resistance.unit}
                onChange={(e) => updateResistanceUnit(index, e.target.value)}
                className="bg-gray-900 text-white px-4 py-2 rounded"
                >
                <option value="1">Ohm</option>
                <option value="1000">KOhm</option>
                <option value="1000000">MOhm</option>
                </select>
                {index > 0 && (
                <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4"
                    onClick={() => removeResistance(index)}
                >
                    Supprimer
                </button>
                )}
            </div>
            ))}
            <p className="text-white mt-4">
            Résistance équivalente en série : {calculateSeriesResistance()}
            </p>
            <p className="text-white mt-2">
            Résistance équivalente en parallèle : {calculateParallelResistance()}
            </p>
        </div>
      </>
    );
};

export default CalculsResistances;