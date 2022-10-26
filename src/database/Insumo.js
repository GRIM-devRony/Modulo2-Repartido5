const DB = require('./DB.json');
const { saveToDatabase } = require('./utils');

const getAllInsumos = () => {
    return DB.insumos;
};

const getOneInsumo = (insumoId) => {
    const insumo = DB.insumos.find((insumo) => insumo.id === insumoId);
    if(!insumo){
        return;
    }

    return insumo;
}

const createNewInsumo = (newInsumo) => {
    const isAlreadyAdded = 
DB.insumos.findIndex((insumo) => insumo.titulo === newInsumo.titulo) > -1;


if(isAlreadyAdded) {
    return;
}


DB.insumos.push(newInsumo);
saveToDatabase(DB);
return newInsumo;
}

const updateOneInsumo = (insumoId, changes) => {
const indexForUpdated = DB.insumos.findIndex((insumo) => insumo.id === insumoId);

if(indexForUpdated === -1){
    return
}

const updatedInsumo = {
    ...DB.insumos[indexForUpdated],
    ...changes
}

DB.insumos[indexForUpdated] = updatedInsumo;
saveToDatabase(DB);
return updatedInsumo;
};

const deleteOneInsumo = (insumoId) => {
    indexForDelete = DB.insumos.findIndex((insumo) => insumo.id === insumoId);

    DB.insumos.splice(indexForDelete, 1);
    saveToDatabase(DB);
}


module.exports = {getAllInsumos, getOneInsumo, createNewInsumo, updateOneInsumo, deleteOneInsumo};