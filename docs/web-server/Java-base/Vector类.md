### Vector类

Vector类实现了一个动态数组。和ArrayList和相似，但是两者是不同的：
  - Vector是同步访问的。
  - Vector包含了许多传统的方法，这些方法不属于集合框架。

Vector(),Vector(int size),Vector(int size,int incr),Vector(Collection c)

方法|方法描述
:-:|:-:
void add(int index,Object element)|指定位置插入指定的元素
boolean add(Object o)|指定元素添加到此向量的末尾
boolean addAll(Collection c)|指定 Collection 中的所有元素添加到此向量的末尾，按照指定 collection 的迭代器所返回的顺序添加这些元素
boolean addAll(int index, Collection c)|指定位置将指定 Collection 中的所有元素插入到此向量中
void addElement(Object obj)|指定的组件添加到此向量的末尾，将其大小增加 1
int capacity()|返回此向量的当前容量
void clear()|从此向量中移除所有元素
Object clone()|返回向量的一个副本
boolean contains(Object elem)|如果此向量包含指定的元素，则返回 true
boolean containsAll(Collection c)|此向量包含指定 Collection 中的所有元素，则返回 true
void copyInto(Object[] anArray)|将此向量的组件复制到指定的数组中
Object elementAt(int index)|返回指定索引处的组件
Enumeration elements()|返回此向量的组件的枚举