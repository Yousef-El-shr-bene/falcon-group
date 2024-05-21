const fsPromises = require('fs/promises')
const path = require('path')
//read

// fs.readFile(path.join(__dirname  , "data" , 'txt.txt'), (err,data)=>{
//     if (err) {
//         console.log(err);
//     } ;
//     console.log(err,data.toString());

// })
// console.log("line");
// process.on('uncaughtException',err => {
//     console.error("eroooooooooooooor");
//     process.exit(1)
// })

// //write

// fs.writeFile(path.join(__dirname  , "data" , 'txt2.txt'), 'eqweqweqwe', (err)=>{
//     if (err) {
//         console.log(err);
//     } ;
//     //
//     fs.appendFile(path.join(__dirname  , "data" , 'txt2.txt'), 'new file 1', (err)=>{
//         if (err) {
//             console.log(err);
//         } ;
//     })
// })

// //apdate - add

// fs.appendFile(path.join(__dirname  , "data" , 'txt.txt'), 'new file 1', (err)=>{
//     if (err) {
//         console.log(err);
//     } ;
// })

// async

// const fileTre = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, "data", 'txt.txt'), 'utf8');
//         console.log(data);
//         await fsPromises.writeFile(path.join(__dirname, "data", 'txt1.txt'),data)
//         // await fsPromises.appendFile(path.join(__dirname, "data", 'txt1.txt'),data)
//     } catch (errr) {
//         console.error(errr);
//     }
// }
// fileTre()

const gitdata = async (fileName, id) => {
  try {
    let pathName
    const allData = await fsPromises.readFile(
      path.join(__dirname, 'file', `all${fileName}.json`),
      'utf8'
    )
    const allDataJson = JSON.parse(allData)
    await allDataJson.data.map((e) => {
      if (e.id === id) {
        pathName = e.path
      }
    })
    const data = await fsPromises.readFile(path.join(__dirname, 'file', pathName), 'utf8')
    const dataJson = JSON.parse(data)
    return { data: dataJson, id }
    // await fsPromises.writeFile(path.join(__dirname, "data", 'txt1.txt'),data)
    // // await fsPromises.appendFile(path.join(__dirname, "data", 'txt1.txt'),data)
  } catch (errr) {
    console.error(errr)
  }
}

const gitAlldata = async (fileName) => {
  try {
    let pathNames = []
    const allData = await fsPromises.readFile(
      path.join(__dirname, 'file', `all${fileName}.json`),
      'utf8'
    )
    let allDataJson = JSON.parse(allData)
    for (let i = 0; i < allDataJson.data.length; i++) {
      pathNames.push(await gitdata(fileName, allDataJson.data[i].id))
    }
    return pathNames
  } catch (errr) {
    console.error(errr)
  }
}

const gitAlldataId = async (fileName, ids) => {
  try {
    let pathNames = []
    const allData = await fsPromises.readFile(
      path.join(__dirname, 'file', `all${fileName}.json`),
      'utf8'
    )
    let allDataJson = JSON.parse(allData)
    for (let i = 0; i < allDataJson.data.length; i++) {
      if (ids.includes(allDataJson.data[i].id)) {
        pathNames.push(await gitdata(fileName, allDataJson.data[i].id))
      }
    }
    return pathNames
  } catch (errr) {
    console.error(errr)
  }
}

const addData = async (fileName, data) => {
  try {
    const allData = await fsPromises.readFile(
      path.join(__dirname, 'file', `all${fileName}.json`),
      'utf8'
    )
    const allDataJson = JSON.parse(allData)
    const newData = { ...allDataJson, nextId: allDataJson.nextId + 1 }
    const newPath = `${fileName}-${allDataJson.nextId}.json`
    newData.data.push({ path: newPath, id: allDataJson.nextId })
    await fsPromises.writeFile(
      path.join(__dirname, 'file', `all${fileName}.json`),
      JSON.stringify(newData)
    )
    await fsPromises.writeFile(path.join(__dirname, 'file', newPath), JSON.stringify(data))
    // await console.log(newData);
    return { data: gitdata(fileName, allDataJson.nextId), id: allDataJson.nextId }
    // await fsPromises.writeFile(path.join(__dirname, "data", 'txt1.txt'),data)
    // // await fsPromises.appendFile(path.join(__dirname, "data", 'txt1.txt'),data)
  } catch (errr) {
    console.error(errr)
  }
}

const deleatData = async (fileName, id) => {
  try {
    let pathName
    const allData = await fsPromises.readFile(
      path.join(__dirname, 'file', `all${fileName}.json`),
      'utf8'
    )
    let allDataJson = JSON.parse(allData)
    await allDataJson.data.map((e, i) => {
      if (e.id === id) {
        pathName = e.path
      }
    })
    const data = await fsPromises.unlink(path.join(__dirname, 'file', pathName), 'utf8')
    await fsPromises.writeFile(
      path.join(__dirname, 'file', `all${fileName}.json`),
      JSON.stringify(allDataJson)
    )
    return allDataJson
  } catch (errr) {
    console.error(errr)
  }
}

// const gitservic = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, "data", 'serviceAt.json'), 'utf8');
//         const json  = JSON.parse(data)
//         return json.serviceAtList
//         // await fsPromises.writeFile(path.join(__dirname, "data", 'txt1.txt'),data)
//         // // await fsPromises.appendFile(path.join(__dirname, "data", 'txt1.txt'),data)
//     } catch (errr) {
//         console.error(errr);
//     }
// }

// const addUser = async (res) => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, "data", 'users.json'), 'utf8');
//         const json  = JSON.parse(data)
//         let newdata = json
//         const user = {name : res.name , serviceAt : res.serviceAt , yearsOfService : res.yearsOfService , entryMonth : [Number(res.entryMonth[0]) , Number(res.entryMonth[1]) ] , stattus : 4 , id : json.nextUserId,}
//         newdata.nextUserId = newdata.nextUserId + 1
//         newdata.users.push(user)
//         await fsPromises.writeFile(path.join(__dirname, "data", 'users.json'),JSON.stringify(newdata))
//         // await fsPromises.appendFile(path.join(__dirname, "data", 'txt1.txt'),data)
//         return "sucses"
//     } catch (errr) {
//         console.error(errr);
//     }
// }

// const editUser = async (res) => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, "data", 'users.json'), 'utf8');
//         const json  = JSON.parse(data)
//         let newdata =await json
//         let POVlength = 0
//         newdata.users.map((e)=>{
//             let go = false
//             if (e.id === res.id) {
//                 go = true
//             }else if (go === false){
//                 POVlength = POVlength + 1
//             }
//         })
//         // const user = {name : res.name , serviceAt : res.serviceAt , yearsOfService : res.yearsOfService , entryMonth : [Number(res.entryMonth[0]) , Number(res.entryMonth[1]) ] , stattus : 4 , id : json.nextUserId,}
//         newdata.users[await POVlength] = res
//         await fsPromises.writeFile(path.join(__dirname, "data", 'users.json'),JSON.stringify(newdata))
//         return "sucses"
//     } catch (errr) {
//         console.error(errr);
//     }
// }
module.exports = { gitdata, gitAlldata, addData, deleatData, gitAlldataId }
// gitdata("Product",0).then((e)=>{console.log(e);})
// console.log(gitdata("Product",1));
//   gitAlldata("Product").then((e)=>{console.log(e);})
// addData("Agent",{
//     name : "يوسف احمد",
// })
// deleatData("Product",0)
// gitAlldataId("Product",[0]).then((e)=>{console.log(e)})
