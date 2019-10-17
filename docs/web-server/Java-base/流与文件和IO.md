### 流与文件和IO
控制台输入：System.in  
为了获得一个绑定到控制台的字符流:
```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));//将System.in包装进BufferReader对象来创建一个字符流
```
`c = (char) br.read();//返回int`  
`str = br.readLine();//返回string`

输入流和输出流：
![image](https://images0.cnblogs.com/i/459322/201403/141036482287251.jpg)
输入流（Input Stream）：
程序从输入流读取数据源。数据源包括外界(键盘、文件、网络…)，即是将数据源读入到程序的通信通道。
![image](https://images0.cnblogs.com/i/459322/201403/141050269398799.gif)
输出流：程序向输出流写入数据。将程序中的数据输出到外界（显示器、打印机、文件、网络…）的通信通道。
![image](https://images0.cnblogs.com/i/459322/201403/141050346545208.gif)
Input Stream不关心数据源来自何种设备（键盘，文件，网络）  
Output Stream不关心数据的目的是何种设备（键盘，文件，网络）

**数据流分类：**
1. 字节流：数据流中最小的数据单元是字节
2. 字符流：数据流中最小的数据单元是字符，Java中的字符是Unicode编码，一个字符占用两个字节。

![image](https://images0.cnblogs.com/i/459322/201403/141050519196967.gif)
![image](https://images0.cnblogs.com/i/459322/201403/141050572927292.gif)


##### FileInputStream
> 该流用于从文件读取数据，它的对象可以用关键字new来创建。
```java
InputStream f = new FileInputStream("C:/java/hello");
File f = new File("C:/java/hello");
InputStream f = new FileInputStream(f);
```
##### FileOutputStream
> 该类用来创建一个文件并向文件中写数据。

如果该流在打开文件进行输出前，目标文件不存在，那么该流会创建该文件。
```java
OutputStream f = new FileOutputStream("C:/java/hello");
File f = new File("C:/java/hello");
OutputStream f = new FileOutputStream(f);
```

==二进制写入，可能存在乱码==使用以下实例解决乱码问题：
```java
//文件名 :fileStreamTest2.java
import java.io.*;

public class fileStreamTest2{
	public static void main(String[] args) throws IOException {
		
		File f = new File("a.txt");
		FileOutputStream fop = new FileOutputStream(f);
		// 构建FileOutputStream对象,文件不存在会自动新建
		
		OutputStreamWriter writer = new OutputStreamWriter(fop, "UTF-8");
		// 构建OutputStreamWriter对象,参数可以指定编码,默认为操作系统默认编码,windows上是gbk
		
		writer.append("中文输入");
		// 写入到缓冲区
		
		writer.append("\r\n");
		//换行
		
		writer.append("English");
		// 刷新缓存冲,写入到文件,如果下面已经没有写入的内容了,直接close也会写入
		
		writer.close();
		//关闭写入流,同时会把缓冲区内容写入文件,所以上面的注释掉
		
		fop.close();
		// 关闭输出流,释放系统资源

		FileInputStream fip = new FileInputStream(f);
		// 构建FileInputStream对象
		
		InputStreamReader reader = new InputStreamReader(fip, "UTF-8");
		// 构建InputStreamReader对象,编码与写入相同

		StringBuffer sb = new StringBuffer();
		while (reader.ready()) {
			sb.append((char) reader.read());
			// 转成char加到StringBuffer对象中
		}
		System.out.println(sb.toString());
		reader.close();
		// 关闭读取流
		
		fip.close();
		// 关闭输入流,释放系统资源

	}
}
```

文件和I/O
File类中有两个方法可以用来创建文件夹：
- mkdir( )方法创建一个文件夹，成功则返回true，失败则返回false。失败表明File对象指定的路径已经存在，或者由于整个路径还不存在，该文件夹不能被创建。
- mkdirs()方法创建一个文件夹和它的所有父文件夹。
```java
String dirname = "/tmp/user/java/bin";
      File d = new File(dirname);
      // 现在创建目录
      d.mkdirs();
```

##### 读取目录
1. 一个目录其实就是一个File对象，它包含其他文件和文件夹。  
2. 如果创建一个File对象并且它是一个目录，那么调用isDirectory( )方法会返回true。  
3. 可以通过调用该对象上的list()方法，来提取它包含的文件和文件夹的列表。  
例子说明如何使用list()方法来检查一个文件夹中包含的内容：
```java
 String dirname = "/tmp";
      File f1 = new File(dirname);
      if (f1.isDirectory()) {
        System.out.println( "Directory of " + dirname);
        String s[] = f1.list();
        for (int i=0; i < s.length; i++) {         
            File f = new File(dirname + "/" + s[i]);             
            if (f.isDirectory()) {               
                System.out.println(s[i] + " is a directory");             
            } else {                
                System.out.println(s[i] + " is a file");             
            }         
        }       
      } else {          
        System.out.println(dirname + " is not a directory");     
      }
```