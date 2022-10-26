
const Insumo = require('../database/Insumo');

const getAllInsumos= () => {
    const allInsumos = Insumo.getAllInsumos();
    return allInsumos
};

const getOneInsumo = (insumoId) => {
   const insumo = Insumo.getOneInsumo(insumoId);
   return insumo;
};


const createNewInsumo = (newInsumo) => {
    const insumoToInsert = {
        ...newInsumo,
    }
    const createdInsumo = Insumo.createNewInsumo(insumoToInsert);
    return createdInsumo
};

const updateOneInsumo = (insumoId, changes) => {
const updatedInsumo = Insumo.updateOneInsumo(insumoId, changes);
return updatedInsumo;
}; 

const deleteOneInsumo = (insumoId) => {
    Insumo.deleteOneInsumo(insumoId);
}

module.exports = {getAllInsumos, getOneInsumo, createNewInsumo, updateOneInsumo, deleteOneInsumo}