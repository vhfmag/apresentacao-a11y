() => {
    const [showToast, setShowToast] = React.useState(false);
    const changePreference = () => {
        if (!showToast) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2000);
        }
    }

    return (<>
        <label>
            Ativar e-mail marketing{" "}
            <input onChange={changePreference} checked type='checkbox' />
        </label>

        <dialog open={showToast}>Não foi possível fazer essa mudança</dialog>
    </>)
}