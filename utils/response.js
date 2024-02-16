function responseSuccess(res, data){
    res.status(200).send(data)
}

function responseNotFound(res, id, data){
    res.status(404).send({
        status: 404,
        message: `id ${id} tidak ditemukan`
    });
}

module.exports = {responseSuccess, responseNotFound}