() => {
    const [showToast, setShowToast] = React.useState(false);
    const triggerToast = () => {
        if (!showToast) {
            setShowToast(true)
            setTimeout(() => setShowToast(false), 2000)
        }
    }

    return (<>
        <button onClick={triggerToast}>Adicionar tarefa</button>
        <div className="toast" hidden={!showToast}>Adicionando tarefa...</div>
    </>)
}