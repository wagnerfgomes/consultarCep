import './App.css';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Mapa from './components/Mapa';

function App() {
    const apiKey = process.env.REACT_APP_API_KEY_GOOGLE;
    const [cep, setCep] = useState('04180112');
    const [endereco, setEndereco] = useState(null);
    const [geoLoc, setGeoLoc] = useState(null);

    function aoSubmeter(evento) {
        evento.preventDefault();
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setEndereco(data);
                const formater = encodeURI(
                    data.logradouro +
                        data.bairro +
                        data.localidade +
                        data.estado
                );
                console.log(endereco)
                fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=${formater}&key=${apiKey}`
                )
                    .then((res) => res.json())
                    .then((data) => {
                        const loc = data.results[0].geometry.location;
                        setGeoLoc(loc);
                        console.log(geoLoc)
                    });
            });
    }

    const aoAlterado = (evento) => setCep(evento.target.value);

    return (
        <div
            className="bg-secondary w-100 h-100 d-flex flex-column gap-4 align-items-center justify-content-center p-5"
            data-bs-theme="dark"
        >
            <Formulario
                aoSubmeter={aoSubmeter}
                valor={cep}
                aoAlterado={aoAlterado}
            />
            {endereco !== null ? (
                <Mapa geoLoc={geoLoc} dados={endereco} apiKey={apiKey} />
            ) : (
                ''
            )}
        </div>
    );
}

export default App;
