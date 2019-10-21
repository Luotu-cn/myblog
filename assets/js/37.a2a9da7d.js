(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{236:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"重写与重载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重写与重载","aria-hidden":"true"}},[t._v("#")]),t._v(" 重写与重载")]),t._v(" "),s("h4",{attrs:{id:"重写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重写","aria-hidden":"true"}},[t._v("#")]),t._v(" 重写")]),t._v(" "),s("p",[t._v("重写是子类对父类的允许访问的方法的实现过程进行重新编写！"),s("strong",[t._v("返回值和形参")]),t._v("都不能改变。"),s("strong",[t._v("访问权限可变")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Animal 对象")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dog 对象")]),t._v("\n      a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行 Animal 类的方法")]),t._v("\n      b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//执行 Dog 类的方法")]),t._v("\n")])])]),s("p",[t._v("b属于Animal类型，但是它运行的是Dog类的move方法。"),s("br"),t._v("\n==在编译阶段，只是检查参数的引用类型。然而在运行时，Java虚拟机(JVM)指定对象的类型并且运行该对象的方法。==")]),t._v(" "),s("p",[s("strong",[t._v("tim")]),t._v(":也就是编译的时候检查b的引用Animal,这时候之所以编译成功是因为Animal类中存在move()方法。而如果b调用的是子类特有的方法则将编译不通过。而运行时，运行的是特定对象的方法。")]),t._v(" "),s("h5",{attrs:{id:"方法重写的规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法重写的规则","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法重写的规则")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("参数列表")]),t._v("必须完全与被重写方法的相同")]),t._v(" "),s("li",[s("strong",[t._v("返回类型")]),t._v("必须完全与被重写方法的返回类型相同")]),t._v(" "),s("li",[s("strong",[t._v("子类方法的访问权限必须大于或等于父类方法的访问权限")]),t._v("。例如：如果父类的一个方法被声明为public，那么在子类中重写该方法就不能声明为protected")]),t._v(" "),s("li",[t._v("父类的成员方法只能被它的子类重写")]),t._v(" "),s("li",[t._v("声明为"),s("strong",[t._v("final的方法不能被重写")])]),t._v(" "),s("li",[t._v("声明为"),s("strong",[t._v("static的方法不能被重写")]),t._v("，但是能够被再次声明")]),t._v(" "),s("li",[s("strong",[t._v("构造方法不能被重写")])]),t._v(" "),s("li",[t._v("如果一个方法"),s("strong",[t._v("不能被继承")]),t._v("，那么该方法不能被重写")]),t._v(" "),s("li",[t._v("子类和父类在"),s("strong",[t._v("同一个包")]),t._v("中，那么子类可以重写父类所有方法，除了声明为private和final的方法")]),t._v(" "),s("li",[t._v("子类和父类"),s("strong",[t._v("不在同一个包")]),t._v("中，那么子类只能够重写父类的声明为public和protected的非final方法")]),t._v(" "),s("li",[t._v("重写的方法能够抛出任何非强制异常，无论被重写的方法是否抛出异常。但是，"),s("strong",[t._v("重写的方法不能抛出新的强制性异常，或者比被重写方法声明的更广泛的强制性异常")]),t._v("，反之则可以")])]),t._v(" "),s("h5",{attrs:{id:"super关键字的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#super关键字的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" super关键字的使用")]),t._v(" "),s("p",[t._v("当需要在子类中调用父类的被重写方法时，要使用super关键字。"),s("br"),t._v(" "),s("strong",[t._v("tim")]),t._v(":因为当你在子类写出了父类的方法的时候，你已经是在重写它了。那么你想原封不动地使用父类的方法的话，应该使用super关键字对父类的方法进行引用。但当你在一个被重写的方法内super调用父类的方法时，这个重写方法"),s("strong",[t._v("不但会执行super方法也会执行自身的方法")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"重载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重载","aria-hidden":"true"}},[t._v("#")]),t._v(" 重载")]),t._v(" "),s("blockquote",[s("p",[t._v("重载(overloading) 是在一个类里面，方法名字相同，而参数不同。返回类型呢？可以相同也可以不同。\n每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。")])]),t._v(" "),s("h5",{attrs:{id:"重载规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重载规则","aria-hidden":"true"}},[t._v("#")]),t._v(" 重载规则")]),t._v(" "),s("ul",[s("li",[t._v("被重载的方法"),s("strong",[t._v("必须改变参数列表")])]),t._v(" "),s("li",[t._v("被重载的方法"),s("strong",[t._v("可以改变返回类型")])]),t._v(" "),s("li",[t._v("被重载的方法"),s("strong",[t._v("可以改变访问修饰符")])]),t._v(" "),s("li",[t._v("被重载的方法"),s("strong",[t._v("可以声明新的或更广的检查异常")])]),t._v(" "),s("li",[t._v("方法能够在"),s("strong",[t._v("同一个类")]),t._v("中或者在一个"),s("strong",[t._v("子类")]),t._v("中被重载")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("区别点")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("重载方法")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("重写方法")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("参数列表")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("必须修改")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("一定不能修改")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("返回类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以修改")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("一定不能修改")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("访问权限")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以修改")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("一定不能做更严格的限制（可以降低限制）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("异常")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以修改")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以减少或删除，一定不能抛出新的或者更广的异常")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);