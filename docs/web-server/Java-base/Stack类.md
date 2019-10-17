### Stack类

栈是Vector的一个子类，它实现了一个标准的后进先出的栈。
堆栈只定义了默认构造函数，用来创建一个空栈。

>除了有Vector定义的所有方法，自己也定义了一些方法
方法|方法描述
:-:|:-:
boolean empty()|测试堆栈是否为空
Object peek()|查看堆栈顶部的对象，但不从堆栈中移除它
Object pop()|移除堆栈顶部的对象，并作为此函数的值返回该对象
Object push(Object element)|把项压入堆栈顶部
int search(Object element)|返回对象在堆栈中的位置，以 1 为基数