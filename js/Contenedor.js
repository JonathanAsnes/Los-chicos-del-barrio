const fs = require('fs');

class Contenedor {
    constructor(nombredearchivo) {
        this.fileName = nombredearchivo;
        this.objetos = [];
    }
    
    //Genera ID
    async generateId() {
        try {
            this.objetos = await this.getAll() || [];
            console.log('this.arr', this.arr.length);
            let maxId = this.objetos.length;
            // console.log('maxId', maxId);
            this.objetos.map(el => {
                // console.log('el.id', el.id);
                // console.log('maxId', maxId);
                el.id > maxId ? maxId = el.id : maxId
            })
            // console.log('maxId', maxId + 1);
            return maxId + 1;
        } catch (err) {
            console.log(err);
        }
    }
    //Guarda un objeto
    async save(obj) {
        try {
            const leerarchivo = await this.getAll();
            // console.log('readFile', readFile);
            if (!leerarchivo) {
                obj.id = await this.generateId();
                // console.log('obj.id', obj.id);
                this.objetos.push(obj);
                // console.log('this.arr', this.arr);
                fs.promises.writeFile(this.fileName, JSON.stringify(this.objetos, null, 2));
                return obj.id;
            }
            this.objetos = leerarchivo;
            // console.log('this.arr', this.arr);
            obj.id = await this.generateId();
            // console.log('obj.id', obj.id);
            this.objetos.push(obj);
            // console.log('this.arr', this.arr);
            fs.promises.writeFile(this.fileName, JSON.stringify(this.objetos, null, 2));
            return obj.id;
        } catch (err) {
            console.log(err);
        }
    }
    //Devuelve el objeto con el ID buscado
    async getById(id) {
        try {
            this.objetos = await this.getAll();
            console.log('this.arr', this.arr);
            const obj = this.objetos.find(el => el.id === Number(id));
            console.log('obj', obj);
            return obj ? obj : null;
        } catch (err) {
            console.log(err);
        }
    }
    //Devuelve un array con los objetos presentes en el archivo
    async getAll() {
        try {
            const arr = await fs.promises.readFile(this.fileName, 'utf-8');
            console.log('arr', arr);
            const arrParsed = JSON.parse(arr);
            console.log('Todos los items:', arrParse);
            return arrParsed;
        } catch (err) {
            console.log(err);
        }
    }
    //Elimina del archivo el objeto con el ID buscado
    async deleteById(id) {
        try {
            this.objetos = await this.getAll();
            // console.log('this.arr', this.arr);
            this.objetos = this.objetos.filter(el => el.id != Number(id));
            // console.log('objDel', objDel);
            fs.promises.writeFile(this.fileName, JSON.stringify(this.objetos, null, 2));
        } catch (err) {
            console.log(err);
        }
    }
    //Elimina todos los objetos guardados en el archivo
    async deleteAll() {
        try {
            this.objetos = await this.getAll();
            console.log('this.objetos', this.objetos);
            this.objetos = [];
            fs.promises.writeFile(this.fileName, JSON.stringify(this.objetos, null, 2));
            console.log('this.objetos', this.objetos);
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = Contenedor;