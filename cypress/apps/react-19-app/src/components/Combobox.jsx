
export const Combobox = () => {
  const inputHandler = (e) => {
   console.log(e.detail)
  }
    return (
      <sit-combo-box onsit-input={inputHandler} placeholder="Single select combo box with default filter">
      <sit-combo-box-option value="apple">Apple</sit-combo-box-option>
      <sit-combo-box-option value="banana">Banana</sit-combo-box-option>
      <sit-combo-box-option value="carrot">Carrot</sit-combo-box-option>
      <sit-combo-box-option value="durian">Durian</sit-combo-box-option>
      <sit-combo-box-option value="eggplant">Eggplant</sit-combo-box-option>
    </sit-combo-box>
    )
}