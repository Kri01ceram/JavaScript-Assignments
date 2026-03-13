// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

import fs from 'fs';

fs.writeFile('./file.txt', 'blah blah blah', (err) => {
    if(err){
        console.log("ganfmara")
    }else{
        console.log("file written successfully")
    }
})