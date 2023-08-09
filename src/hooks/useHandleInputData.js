import { useState } from "react";

function useHandleInputData(initialInput, data, onSetData) {
    const [inputData, setInputData] = useState(initialInput)

    function handleChange(e) {
        const key = e.target.id
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        onSetData({
            ...data,
            [key]: value
        })
    }

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

    function resetData() {
        setInputData({
            selectedColors: [],
            selectedType: null,
            transforms: false
        })
        onSetData({
            name: "",
            image: "",
            transformed: "",
            type: "",
            colors: [],
            main: false
        })
    }

    return { inputData, handleChange, selectType, selectColors, selectTransforms, resetData }
}

export default useHandleInputData