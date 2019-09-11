() => {
    const [showDropdown, setShowDropdown] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (<div className="dropdown">
        <label>
            Cidade
            <input
                value={value}
                onFocus={() => setShowDropdown(true)}
            />
        </label>
        
        {showDropdown && <ul onClick={ev => {
            setValue(ev.target.textContent)
            setShowDropdown(false)
        }}>
            <li>Salvador</li>
            <li>Feira de Santana</li>
            <li>Camaçari</li>
            <li>Palmeiras</li>
            <li>Lençóis</li>
        </ul>}
    </div>)
}