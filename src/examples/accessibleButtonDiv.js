() => (
    <div
        tabIndex={0}
        role="button"
        className='button'
        onClick={() => alert('Lista atualizada!')}
        onKeyPress={ev => {
            if (ev.key === 'Enter') {
                alert('Lista atualizada!')
            }
        }}
    >
        Atualizar lista
    </div>
)