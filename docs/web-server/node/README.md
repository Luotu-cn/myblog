## 常用模块方法记录

### fs模块
- fs.readdir(path)
- fs.readdirSync(path)
> 方法将返回一个包含“指定目录下所有文件名称”的数组对象。

- fs.stat
- fs.statSync

### path模块
- path.resolve
> 从最后一个参数开始判断，如果最后一个参数是.xx或xx拼接上前一个参数；如果是..xx，拼接上前一个参数，但不包含前一个参数的最后一层路径；如果是/xx不进行拼接，直接返回xx
