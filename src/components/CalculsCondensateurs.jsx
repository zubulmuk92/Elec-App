import React, { useState } from 'react';

const CalculsCondensateurs = () => {
    const [capacitors, setCapacitors] = useState([{ value: 1, unit: '1' }]);
    const [selectedUnit, setSelectedUnit] = useState('1');

    const addCapacitor = () => {
        const newCapacitors = [...capacitors, { value: 1, unit: '1' }];
        setCapacitors(newCapacitors);
    };

    const removeCapacitor = (index) => {
        const newCapacitors = [...capacitors];
        newCapacitors.splice(index, 1);
        setCapacitors(newCapacitors);
    };

    const updateCapacitorValue = (index, value) => {
        const newCapacitors = [...capacitors];
        newCapacitors[index].value = value;
        setCapacitors(newCapacitors);
    };

    const updateCapacitorUnit = (index, unit) => {
        const newCapacitors = [...capacitors];
        newCapacitors[index].unit = unit;
        setCapacitors(newCapacitors);
    };

    const calculateSeriesCapacitance = () => {
        var totalCapacitance = capacitors.reduce((sum, capacitor) => sum + parseFloat(capacitor.value)*parseFloat(capacitor.unit), 0);

        if (totalCapacitance >= 1e-3 && totalCapacitance<0) {
            totalCapacitance = totalCapacitance * 1e3;
            return totalCapacitance.toFixed(2) + " mF";
        } else if (totalCapacitance >= 1e-6 && totalCapacitance<0) {
            totalCapacitance = totalCapacitance * 1e6;
            return totalCapacitance.toFixed(2) + " µF";
        } else if (totalCapacitance >= 1e-9 && totalCapacitance<0) {
            totalCapacitance = totalCapacitance * 1e9;
            return totalCapacitance.toFixed(2) + " nF";
        } else if (totalCapacitance >= 1e-12 && totalCapacitance<0) {
            totalCapacitance = totalCapacitance * 1e12;
            return totalCapacitance.toFixed(2) + " pF";
        } else {
            return totalCapacitance.toFixed(2) + " F";
        }
    };

    const calculateParallelCapacitance = () => {
        const inverseSum = capacitors.reduce((sum, capacitor) => sum + 1 / (parseFloat(capacitor.value)*parseFloat(capacitor.unit)), 0);
        var totalCapacitance = 1 / inverseSum;

        if (totalCapacitance >= 1e-3 && totalCapacitance<0) {
            totalCapacitance = totalCapacitance * 1e3;
            return totalCapacitance.toFixed(2) + " mF";
        } else if (totalCapacitance >= 1e-6 && totalCapacitance<0) {
            totalCapacitance = totalCapacitance * 1e6;
            return totalCapacitance.toFixed(2) + " µF";
        } else if (totalCapacitance >= 1e-9 && totalCapacitance<0) {
            totalCapacitance = totalCapacitance * 1e9;
            return totalCapacitance.toFixed(2) + " nF";
        } else if (totalCapacitance >= 1e-12 && totalCapacitance<0) {
            totalCapacitance = totalCapacitance * 1e12;
            return totalCapacitance.toFixed(2) + " pF";
        } else {
            return totalCapacitance.toFixed(2) + " F";
        }
    };

    return (
        <div className="bg-gray-800 p-4 md:rounded-lg mb-3">
        <h2 className="text-white text-2xl mb-4">Calculateur de condensateurs</h2>
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={addCapacitor}
        >
            Ajouter un condensateur
        </button>
        {capacitors.map((capacitor, index) => (
            <div key={index} className="flex items-center mb-4">
            <input
                type="number"
                value={capacitor.value}
                onChange={(e) => updateCapacitorValue(index, e.target.value)}
                className="bg-gray-900 text-white px-4 py-2 rounded mr-4 w-28 md:w-60"
            />
            <select
                value={capacitor.unit}
                onChange={(e) => updateCapacitorUnit(index, e.target.value)}
                className="bg-gray-900 text-white px-4 py-2 rounded"
            >
                <option value="1">F</option>
                <option value="0.001">mF</option>
                <option value="0.000001">uF</option>
                <option value="0.000000001">nF</option>
            </select>
            {index > 0 && (
                <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4"
                onClick={() => removeCapacitor(index)}
                >
                Supprimer
                </button>
            )}
            </div>
        ))}
        <p className="text-white mt-4">
            Capacitance équivalente en série : {calculateSeriesCapacitance()}
        </p>
        <p className="text-white mt-2">
            Capacitance équivalente en parallèle : {calculateParallelCapacitance()}
        </p>
        </div>
    );
};

export default CalculsCondensateurs;