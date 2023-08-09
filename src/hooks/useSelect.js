import { useState } from "react";

function useSelect(initialInput, data, onSetData) {
    const [inputData, setInputData] = useState(initialInput)

    function selectType(type) {
        onSetData({
            ...data,
            type: type ? type.value : ""
        })
        setInputData({
            ...inputData,
            selectedType: type
        })
    }

    function selectColors(colors) {
        onSetData({
            ...data,
            colors: colors.map(color => color.value)
        })
        setInputData({
            ...inputData,
            selectedColors: colors
        })
    }

    function selectTransforms(e) {
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

    return { inputData, selectType, selectColors, selectTransforms, resetInputData }
}

export default useSelect