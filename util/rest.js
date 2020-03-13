const axios = require('axios');

const rest = {
    /**
     * @desc Realiza el llamado del servicio según la configuracion (options)
     * @param {json} options - JSON de configuracion de request
     * @return {json} Respuesta del servicio llamado
     */
    send: async function(options) {
        
        // Validar la existencia de configuración
        if(typeof options != 'undefined' && options) {

            // Definir request inicial con URL y Método
            let request = {
                url: options.url,
                method: options.method ? options.method.toLowerCase() : 'get'
            };

            // Validar y asignar body al request
            if(typeof options.body != 'undefined' && options.body) {
                request.data = options.body;
            }

            // Validar y asignar headers al request
            if(typeof options.headers != 'undefined' && options.headers) {
                request.headers = options.headers;
            }

            // Enviar request
            try {
            
                const response = await axios(request);

                return response;
    
            }
            catch(error) {
                console.log(Object.keys(error));
                console.log(error.toJSON());
                throw error;
            }
        } else {
            // throw error
        }
    }
};

module.exports = rest;