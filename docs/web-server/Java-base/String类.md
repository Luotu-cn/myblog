### String类
>String类是不可改变的，所以你一旦创建了String对象，那它的值就无法改变了。 如果需要对字符串做很多修改，那么应该选择使用StringBuffer & StringBuilder类。
##### 连接字符串
```java
string1.concat(string2);
spring1+".."//常用直接拼接
```
##### 创建格式化字符串
>输出格式化数字可以使用printf()和format()方法。String类使用静态方法format()返回一个String对象而不是PrintStream对象。
format()可复用：
```java
String fs;
fs = String.format("The value of the float variable is " +
                   "%f, while the value of the integer " +
                   "variable is %d, and the string " +
                   "is %s", floatVar, intVar, stringVar);
System.out.println(fs);
```
![image](https://note.youdao.com/yws/api/personal/file/AE3F067D984847B4B2786F82C3D31CB3?method=download&shareKey=3585fc17c5dda1d5fced07219868a9f7)
