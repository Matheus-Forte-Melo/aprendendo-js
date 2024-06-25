export const tempoConversao = {
    "Segundos para Minuto": "s/m",
    "Segundos para Hora": 's/h',
    "Minutos para Segundo": 'm/s',
    "Minutos para Hora": 'm/h',
    "Hora para Segundos": 'h/s',
    "Hora para Minutos": 'h/m'
};

export const temperaturaConversao = {
    "Celsius para Fahrenheit": "C/F",
    "Celsius para Kelvin": "C/K",
    "Fahrenheit para Celsius": "F/C",
    "Fahrenheit para Kelvin": "F/K",
    "Kelvin para Celsius": "K/C",
    "Kelvin para Fahrenheit": "K/F"
};

export const distanciaConversao = {
    "Centímetros para Metros": "cm/m",
    "Centímetros para Quilômetros": "cm/km",
    "Metros para Centímetros": "m/cm",
    "Metros para Quilômetros": "m/km",
    "Quilômetros para Centímetros": "km/cm",
    "Quilômetros para Metros": "km/m"
};

export function converterTempo(tipo, valor) {
    switch (tipo) {
        case "s/m": return valor / 60;
        case "s/h": return valor / 3600;
        case "h/s": return valor * 3600;
        case "h/m": return valor * 60;
        case "m/s": return valor * 60;
        case "m/h": return valor / 60;
        default: return null;
    }
}

export function converterTemperatura(tipo, valor) {
    valor = parseFloat(valor);
    switch (tipo) {
        case "C/F": return (valor * 1.8) + 32;
        case "C/K": return valor + 273 ;
        case "F/C": return (valor - 32) / 1.8;
        case "F/K": return (valor - 32) * 5 / 9 + 273;
        case "K/C": return valor - 273;
        case "K/F": return (valor - 273) * 1.8 + 32;
        default: return null;
    }
}

export function converterDistancia(tipo, valor) {
    switch (tipo) {
        case "cm/m": return valor / 100;
        case "cm/km": return valor / 100000;
        case "m/cm": return valor * 100;
        case "m/km": return valor / 1000;
        case "km/m": return valor * 1000;
        case "km/cm": return valor * 100000;
        default: return null;
    }
}

export function pegarKey(obj, valor) {
    return Object.keys(obj).find(key => obj[key] === valor);
}

export function pegarObjPeloTipo(tipo) {
    switch (tipo) {
        case "medida": return distanciaConversao; 
        case "tempo": return tempoConversao; 
        case "temperatura": return temperaturaConversao;
        default: return null;
    }
}

export function pegarFuncaoConversao(tipo) {
    switch (tipo) {
        case "medida": return converterDistancia;
        case "tempo": return converterTempo;
        case "temperatura": return converterTemperatura;
        default: return null;
    }
}