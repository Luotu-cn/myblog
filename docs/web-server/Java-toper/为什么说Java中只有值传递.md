### 为什么说Java中只有值传递

首先明确三大误解：  
1. 值传递和引用传递区分的条件是传递的内容，如果是个值，就是值传递。如果是个引用，就是引用传递。
2. Java是引用传递
3. 传递的参数如果是普通类型，那就是值传递，如果是对象，那就是引用传递。

---
自己的理解：  
常常这么理解：如果调用函数直接传递一个值或变量（该变量直接赋值）就为值传递。如果传递的变量需要经过更复杂的运算，则为引用传递。
---

程序语言是如何定义值传递和引用传递的：
> 值传递（pass by value）是指在调用函数时将实际参数复制一份传递到函数中，这样在函数中如果对参数进行修改，将不会影响到实际参数。

> 引用传递（pass by reference）是指在调用函数时将实际参数的地址直接传递到函数中，那么在函数中对参数所进行的修改，将影响到实际参数。

##### 如何使用代码判断是哪种传递方式？
思路：在函数内部处理参数，看参数的源值是否改变了

例1：使用简单的函数调用后发现，函数内处理不会改变参数的原值
--> Java方法传递是值传递？

##### 如果使用类实例进行传递，然后修改其属性呢？
思路：方法同上，仅将参数换成类实例

例2：测试后发现，方法内修改实例参数的属性值改变了参数原值

##### 难道，普通类型是值传递，对象是引用传递？
还有什么可以推翻，上述例论。String对象可以吗？各种包装类型呢？
例3：是的，使用String对象传参不会修改原值。
---

此上验证方式说有问题？
> 重申定义。值传递，将值复制一份传递；引用传递，直接传递地址

那么也就是，之前只分析了值有没有变，而应再看值的复制？
例1，值未改变，是复制？例2，值改变，是对象的地址？例3，未改变，就不是对象的引用？

有大师这样分析：将参数比成钥匙，而类传递的修改比成对门内的破坏

例4：此时真正的去改变对象，也就是方法内部去实例化一个新的类实例，此时不改变参数原值

![类实例在堆内存中，方法内部没有new新实例，则参数和原实例变量指向同一地址空间，实例化则指向不同](http://www.hollischuang.com/wp-content/uploads/2018/04/pass1.png)

大佬如是说：上面的参数其实是值传递，把实参对象引用的地址当做值传递给了形式参数。

大佬又说：值传递和引用传递的区别并不是传递的内容。而是实参到底有没有被复制一份给形参。

#### 重点来了！！！
> 在判断实参内容有没有受影响的时候，要看传的的是什么，如果你传递的是个地址，那么就看这个地址的变化会不会有影响，而不是看地址指向的对象的变化。就像钥匙和房子的关系。

![例三中实际new了一个新的String对象](http://www.hollischuang.com/wp-content/uploads/2018/04/pass3.png)
例三中实际new了一个新的String对象

所以说，Java中其实还是值传递的，只不过对于对象参数，值的内容是对象的引用。

#### 大佬总结
无论是值传递还是引用传递，其实都是一种求值策略(Evaluation strategy)。在求值策略中，还有一种叫做按共享传递(call by sharing)。其实Java中的参数传递严格意义上说应该是按共享传递。
> 按共享传递，是指在调用函数时，传递给函数的是实参的地址的拷贝（如果实参在栈中，则直接拷贝该值）。在函数内部对参数进行操作时，需要先拷贝的地址寻找到具体的值，再进行操作。如果该值在栈中，那么因为是直接拷贝的值，所以函数内部对参数进行操作不会对外部变量产生影响。如果原来拷贝的是原值在堆中的地址，那么需要先根据该地址找到堆中对应的位置，再进行操作。因为传递的是地址的拷贝所以函数内对值的操作对外部变量是可见的。

简单点说，Java中的传递，是值传递，而这个值，实际上是对象的引用。

而按共享传递其实只是按值传递的一个特例罢了。所以我们可以说Java的传递是按共享传递，或者说Java中的传递是值传递。