const insumoService = require('../services/insumoService');

const getAllInsumos = (req, res) => {
    const allInsumos = insumoService.getAllInsumos();
    res.send({ status: 'OK', data: allInsumos});
};

const getOneInsumo = (req,res) => {

const {
    params: {insumoId},

} = req;

if(!insumoId){
    return res.send({status: 'No existe o ID incorrecta', data: insumo});;
}

const insumo = insumoService.getOneInsumo(insumoId);
res.send({status: 'OK', data: insumo});
};



const createNewInsumo = (req,res) => {
const {body} = req;
if(!body.titulo || !body.precio || !body.categoria || !body.imagen || !body.descripcion){
    return;
}

const newInsumo = {
    id: body.id,
    titulo: body.titulo,
    precio: body.precio,
    imagen: body.imagen,
    categoria: body.categoria,
    descripcion: body.descripcion,
}

const createdinsumo = insumoService.createNewInsumo(newInsumo);
res.status(201).send({status: 'Alta correcta', data: createNewInsumo});

}

const updateOneInsumo = (req,res) => {
    const {
        body,
        params: { insumoId },
    } = req;

    if(!insumoId){
        return
    }

    const updatedInsumo = insumoService.updateOneInsumo(insumoId, body);
    res.send({ status: 'Producto modificado correctamente', data: updatedInsumo});
}


const deleteOneInsumo = (req,res) => {
    const{
      params: {insumoId }
    } = req;

    if(!insumoId){
    return
    }

    insumoService.deleteOneInsumo(insumoId);
    res.send({status: 'Baja correcta'});
}

module.exports = {getAllInsumos, getOneInsumo, createNewInsumo, updateOneInsumo, deleteOneInsumo}