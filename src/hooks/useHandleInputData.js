import { useState } from "react"

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

    function handleSelect(key, selected) {
        switch (key) {
            case "type":
                onSetData({
                    ...data,
                    type: selected ? selected.value : ""
                })
                break
            case "colors":
                onSetData({
                    ...data,
                    colors: selected.map(color => color.value)
                })
                break
            default:
                break
        }
        setInputData({
            ...inputData,
            [key]: key === "transforms" ? selected.target.checked : selected
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

    return { inputData, handleChange, handleSelect, resetData }
}

export default useHandleInputData