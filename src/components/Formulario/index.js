const Formulario = ({ aoSubmeter, valor, aoAlterado }) => {
    return (
        <form
            onSubmit={aoSubmeter}
            className="w-25 d-flex flex-column align-items-center justify-content-center gap-3"
        >
            <label className="h2 text-light">Digite seu CEP</label>
            <p className="p-2 text-light bg-danger">Sem hífen</p>
            <input
                className="form-control-lg"
                type="text"
                placeholder="00000000"
                maxLength={8}
                value={valor}
                onChange={aoAlterado}
            />
            <button className="btn btn-light">Pesquisar</button>
        </form>
    );
};

export default Formulario;
