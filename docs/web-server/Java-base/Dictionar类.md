### Dictionar类

Dictionary 类是一个抽象类，用来存储键/值对，作用和Map类相似。
给出键和值，你就可以将值存储在Dictionary对象中。一旦该值被存储，就可以通过它的键来获取它。所以和Map一样， Dictionary 也可以作为一个键/值对列表

方法|方法描述
:-:|:-:
Object get(Object key)|返回此 dictionary 中该键所映射到的值
Object put(Object key, Object value)|将指定key映射到此 dictionary中指定value
Object remove(Object key)|从此 dictionary中移除key（及其相应的value）。