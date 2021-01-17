import { navigate } from "@reach/router"

function Form({ formInputs, updateFormInputs }) {
    //handel the drop-down selection change
  const when_selection_change = (e) => {
    updateFormInputs({
      ...formInputs,
      select: e.target.value,
    })
  }

  //handel the input for id 
  const when_id_change = (e) => {
    updateFormInputs({
      ...formInputs,
      id: e.target.value,
    })
  }

  //handel the btn search 
  const btn_clicked = (e) => {
    //redirec to the specific api url path
    navigate(`/${formInputs.select}/${formInputs.id}`)
  }

  return (
    <div>
      <h2>Form</h2>
      <p>Search For</p>
      {/* catagory selection */}
      <select value={formInputs.select} onChange={when_selection_change}>
        <option value="people">people</option>
        <option value="planets">planets</option>
      </select>
      <p>ID:</p>
      {/* id input */}
      <input type="number" value={formInputs.id} onChange={when_id_change} />
      {/* search btn */}
      <button onClick={btn_clicked}>Search</button>
    </div>
  )
}

export default Form