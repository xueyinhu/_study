## **Buffer**

---

### **>> 概念**

Buffer 是一个类似于数组的对象，用于表示固定长度的字节序列   
(本质是一段内存空间，专门处理二进制数据)

### **>> 特点**

1. Buffer 大小固定且无法调整   
2. Buffer 性能较好，可以直接对计算机内存进行操作  
3. 每个元素的大小为 1 字节

### **>> 使用**

1. 使用 alloc 创建，会对选中内存空间做清 0 操作  
```let buf = Buffer.alloc(n); ```
2. 使用 allocUnsafe 创建，会保留选中内存空间的数值  
```let buf = Buffer.allocUnsafe(n);```
3. 使用 from 创建，将字符串转换成 Buffer，utf-8 编码  
```let buf = Buffer.from(str);```  
若要将 buffer 转换为 string，使用 toString 方法，默认按照 utf-8 编码  
```let str = buf.toString();```

