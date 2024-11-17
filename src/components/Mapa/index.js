import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'


export default function Mapa({ dados, apiKey, geoLoc}) {
    const endereco = [
        dados.logradouro,
        dados.bairro,
        dados.localidade,
        dados.estado
    ];

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    const center = geoLoc

    return (
        <div className='d-flex align-items-center flex-column justify-content-center w-75 h-75'>
            <h2 className='text-light'>Endereço:</h2>
            <p className='text-light'>{`${dados.logradouro}, ${dados.bairro}, ${dados.localidade}, ${dados.estado}`}</p>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{width: "500px", height: "500px"}}
                    center={center}
                    zoom={18}
                >
                <Marker position={center} />
                </GoogleMap>
            ) : (
                <></>
            )}
        </div>
    );
}
