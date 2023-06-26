## **fs 模块**

---

1. 导入  
```const fs = require('fs');```
2. 写入  
**writeFile 异步写入**  
```fs.writeFile(filePath, str, err => {if (err) {}})```  
**writeFileSync 同步写入**  
```fs.writeFileSync(filePath, str, err => {if (err) {}})```  
**appendFile / appendFileSync 追加写入**  
```3```  
**createWriteStream 流式写入**  
```4```  


