### StringBuilder和Stringbuffer
对字符串进行修改的时候，需要使用StringBuffer和StringBuilder类。  
StringBuffer和StringBuilder类的对象能够被多次的修改，并且不产生新的未使用对象。  
##### StringBuilder类
Java 5中被提出，它和**StringBuffer**之间的最大不同在于StringBuilder的方法**不是线程安全的**（线程安全就是多线程访问时，采用了加锁机制，当一个线程访问该类的某个数据时，进行保护，其他线程不能进行访问直到该线程读取完，其他线程才可使用,不会出现数据不一致或者数据污染。线程不安全就是不提供数据访问保护，有可能出现多个线程先后更改数据造成所得到的数据是脏数据）。  
**StringBuilder相较于StringBuffer有速度优势**，所以多数情况下建议使用StringBuilder类。然而在应用程序**要求线程安全**的情况下，则必须**使用StringBuffer类**。
#### Stringbuffer方法（其他方法同string类似)
![image](https://note.youdao.com/yws/api/personal/file/C02988A99B7B4653BE999456CA2204CD?method=download&shareKey=0d6fb7832fdcb5660ca2cc0b62a4834b)
