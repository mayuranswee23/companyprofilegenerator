const fs = require('fs');

const writeFile = responseData => {
    return new Promise((resolve, reject)=>{
        fs.writeFile('./dist/index.html', responseData, err =>{
            if (err){
                reject(err)
                return
            }
            resolve({
                ok: true, 
                message: 'File created'
            })
        })
    })
}

const copyFile = () => {
    return new Promise((resolve, reject)=>{
        fs.copyFile('./src/style.css', './dist/style.css', err=>{
            if (err){
                reject(err)
                return
            }
            resolve({
                ok: true, 
                message: 'Styles copied'
            });
        });
    });
};

module.export = {writeFile, copyFile}