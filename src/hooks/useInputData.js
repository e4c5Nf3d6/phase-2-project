import { useState } from "react";

function useInputData(initialInput) {
    const [inputData, setInputData] = useState(initialInput)

    function setType(type) {
        setInputData({
            ...inputData,
            selectedType: type
        })
    }

    function setColors(colors) {
        setInputData({
            ...inputData,
            selectedColors: colors
        })
    }

    function setTransforms(e) {
        setInputData({
            ...inputData,
            transforms: e.target.checked
        })
    }

    function resetInputData() {
        setInputData({
            selectedColors: [],
            selectedType: null,
            transforms: false
        })
    }

    return { inputData, setType, setColors, setTransforms, resetInputData }
}

export default useInputData