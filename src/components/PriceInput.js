function PriceInput ({ label, value, onChange }) {
  const handleChange = e => {
    onChange(e.target.value)
  }
  return (
    <>
      <label>{label}</label>
      <input value={value} onChange={handleChange} />
    </>
  )
}

export default PriceInput