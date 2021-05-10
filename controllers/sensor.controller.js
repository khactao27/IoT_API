const sensor = require('../models/sensor.model');

module.exports.getAllSensor = async(req, res)=>{
    try {
        const data = await sensor.findAll();
        res.set('Content-Type', 'application/json');
        res.send(JSON.stringify(data, null, 2));
        res.end();
    } catch (error) {
        console.error(error);
    }
}

module.exports.getSensor = async(req, res)=>{
    let id = parseInt(req.params.id);
    try{
        let data = await sensor.findByPk(id);
        if(data === null){
            res.send("Không có id này!");
            res.end();
        }else{
            res.set('Content-Type', 'application/json');
            res.send(JSON.stringify(data, null, 2));
            res.end();
        }
    }catch(error){
        console.error(error);
    }
}

module.exports.deleteSensor = async(req, res)=>{
    let id = parseInt(req.params.id);
    try {
        const results = sensor.findByPk(id);
        if(results !== null){
            await sensor.destroy({
                where:{
                    id:id
                }
            });
            const data = await sensor.findAll();
            res.set('Content-Type', 'application/json');
            res.send(data);
            res.end;
        }else{
            res.send("Không tồn tại đối tượng bạn muốn xóa");
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports.updateSensor = async(req, res)=>{
    let id = parseInt(req.params.id);
    let name = req.body.name;
    let value = parseInt(req.body.value);
    let receiveTime = new Date(req.body.receiveTime);
    try {
        let result = await sensor.findByPk(id);
        if(result !== null){
            await sensor.update({name: name, value: value, receiveTime: receiveTime}, {
                where:{
                    id: id
                }
            });     
            let results = await sensor.findAll();
            res.set('Content-Type', 'application/json');
            res.send(results);
            res.end();
        }
        else{
            res.send("Không tồn tại đối tượng này để chỉnh sửa ?????");
            res.end();
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports.addSensor = async(req, res)=>{
    let name = req.body.name;
    let value = parseInt(req.body.value);
    let receiveTime = new Date(req.body.receiveTime);

    try {
        const data = await sensor.create({name: name, value: value, receiveTime});
        const results = await sensor.findAll();
        res.set('Content-Type', 'application/json');
        res.send(results);
        res.end();
    } catch (error) {
        console.error(error);
    }
}
