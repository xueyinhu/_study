## **fs 模块**

---

### **A. 文件操作**
1. **导入**  
`const fs = require('fs');`
2. **写入**  
**1. writeFile 异步写入**  
`fs.writeFile(filePath, str, err => {if (err) {}});`  
**2. writeFileSync 同步写入**  
`fs.writeFileSync(filePath, str, err => {if (err) {}});`  
**3. appendFile / appendFileSync 追加写入**  
`fs.writeFile(filePath, str, {flag: 'a'}, err => {if (err) {}});`  
`fs.appendFile(filePath, str, err => {if (err) {}});`  
**4. createWriteStream 流式写入**  
`let ws = fs.createWriteStream(filePath);`  
`ws.write(str);`  
`ws.end();`  
3. **读取**  
**1. readFile / readFileSync**  
`fs.readFile(filePath, (err, data) => {});`
`let data = fs.readFileSync(filePath).toString();`
**2. createReadStream**  
`const rs = fs.createReadStream(filePath);`
`rs.on('data', chunk => {});`
`rs.on('end', () => {});`
4. **复制**  
**1. readFileSync / writeFileSync**  
`let data = fs.readFileSync(filePath);`  
`fs.writeFileSync(newFilePath, data)`  
**2. createReadStream / createWriteStream 所消耗的资源更少**  
`const rs = fs.createReadStream(filePath);`  
`const ws = fs.createWriteStream(newFilePath);`  
`rs.on('data', chunk => {ws.write(chunk)});`  
5. **重命名**
`fs.rename(oldFilepath, newFilePath, err => {});`
6. **删除**
`fs.unlink(filePath, err => {});`

### **B. 目录操作**
1. **创建**  
`fs.mkdir(dirPath, config, err => {});`  
2. **读取**  
`fs.readdir(dirPath, (err, data) => {});`  
3. **删除**  
`fs.rmdir(dirPath, config, err => {});`

### **C. 查看资源状态**
1. **stat / statSync**  
`fs.stat(dirPath, (err, data) => {});`  



