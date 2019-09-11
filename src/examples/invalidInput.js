() => {
    const [password, setPassword] = React.useState("")
    const [passwordConfirmation, setPasswordConfirmation] = React.useState("")
    const [isConfirmationEqual, setConfirmationEqual] = React.useState(undefined)

    return (
        <form onSubmit={ev => {
            ev.preventDefault();
            setConfirmationEqual(password === passwordConfirmation);
        }}>
            <label>
                Escolha uma senha:
                <input
                    required
                    type="password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                />
            </label>
            
            <label className={isConfirmationEqual === false ? "invalid" : undefined}>
                Confirme a sua senha:
                <input
                    required
                    type="password"
                    value={passwordConfirmation}
                    onChange={ev => setPasswordConfirmation(ev.target.value)}
                />

                {isConfirmationEqual === false && (
                    <div className="field-status">
                        A senha e a confirmação estão diferentes
                    </div>
                )}
            </label>

            <button>Mudar senha</button>
        </form>
    )
}