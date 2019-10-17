### Character类
在某些情况下，Java编译器会自动创建一个Character对象。  
例如，将一个char类型的参数传递给需要一个Character类型参数时，那么编译器会自动地将char类型参数转换为Character对象。 这种特征称为装箱，反过来称为拆箱。
实例：
```java
// Here following primitive char 'a'
// is boxed into the Character object ch
Character ch = 'a';

// Here primitive 'x' is boxed for method test,
// return is unboxed to char 'c'
char c = test('x');
```

#### Character 方法
![image](https://note.youdao.com/yws/api/personal/file/41B8945E88C84C9A91994E5904D7F76A?method=download&shareKey=b05943b49b62770ad448539db6fc437c)