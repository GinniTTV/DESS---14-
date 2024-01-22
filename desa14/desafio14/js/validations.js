// Nombre ...
const validateStringsName = (string) => {
    const regex = new RegExp("^[A-Za-zÑñáéíóúüÁÉÍÓÚÜ][a-zñáéíóúü]+$");
    return regex.test(string)
}

// Apellido ...
const validateStringsLastName = (string) => {
    const regex = new RegExp("^[a-zA-ZáéíóúñÁÉÍÓÚÑ'´‘’]+$");
    return regex.test(string)
}

// Dirección ...
// Núm de doc ...
const validateDirec = (string) => {
    const regexDirec = /^[\wáéíóúñÁÉÍÓÚÑâêîôûÂÊÎÔÛàèìòùÀÈÌÒÙçÇãõÃÕäëïöüÄËÏÖÜ\s0-9,\-.()'"°\/]+$/;
    return regexDirec.test(string);
}

// Longitud (mín y máx)
const validateStgLength = (stg, minLength, maxLength) => {
    if (stg.length < minLength) {
        return `El valor debe tener al menos ${minLength} caracteres.`
    } else if (stg.length > maxLength) {
        return `El valor debe tener no más de ${maxLength} caracteres.`
    } else {
        return true
    }
}


    





