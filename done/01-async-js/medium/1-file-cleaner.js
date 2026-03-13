// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

import fs from 'fs';

function cleanFile(filePath) {
   return new Promise((resolve,reject)=>{
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            reject(err);
            return;
        }else{
            const cleanedData = data.trim().replace(/\s+/g, ' ');
            fs.writeFile(filePath, cleanedData, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            })
        }
    })
})
}
cleanFile('./file.txt')
.then(() => {
    console.log("File cleaned successfully");
})