module.exports = {
	repo: "Luotu-cn/myblog",
	navbar: true,
	editLinks: true,
	editLinkText: "在 GitHub 上编辑此页",
	lastUpdated: "更新于",
	nav: [
		{ text: "最新", link: "/lasted/" },
		{ text: "琐记", link: "/notes/" },
		{
		  text: "后端",
		  items: [
			{
			  text: "JAVA",
			  items: [
				{
				  text: "基础",
				  link: "/web-server/Java-base/类.md"
				},
				{
				  text: "概念集",
				  link: "/web-server/Java-toper/面向过程与面向对象.md"
				},
				//{ text: "其他", link: "/passages/2019-04-09-es6/" }
			  ]
			},
			{
			  text: "Node.js",
			  items: [
				{
				  text: "Node相关",
				  link: "/web-server/node/"
				},
				//{ text: "其他", link: "/passages/2019-05-04-jest-base/" },
			  ]
			},
		 ]
		},
		{
		  text: "前端",
		  items: [
			{ text: "JavaScript", link: "/web-front/JavaScript/" },
			//{
			//  text: "VueJs",
			//  link: "/passages/2019-05-17-why-i-stopped-using-sass/"
			//},
			//{ text: "KoaJs", link: "/passages/2019-07-16-font-animation/" },
		  ]
		},
		{
		  text: "齐民要术",
		  items: [
			{
			  text: "算法与数据结构",
			  items: [
				{
				  text: "算法",
				  link: "/passages/2019-06-23-algorithm-offer/"
				},
				{
				  text: "数据结构",
				  link: "/passages/2019-06-23-algorithm-offer/"
				}
			  ]
			},
			{
			  text: "设计模式",
			  items: [
				{
				  text: "创建型模式",
				  link: "/passages/2018-10-23-singleton-pattern/"
				},
				{
				  text: "结构型模式",
				  link: "/passages/2018-12-16-flyweight-pattern/"
				},
				{
				  text: "行为型模式",
				  link: "/passages/2018-11-25-command-pattern/"
				}
			  ]
			}
		  ]
		},
		{
		  text: "源码",
		  items: [
			{ text: "源码阅读", link: "/passages/2019-06-10-weekly-share/" },
			{ text: "其他", link: "/passages/2018-09-06-git-tag-and-version/" }
		  ]
		}
	],
	sidebar:{
		'/web-server/Java-base/':getJavaBasicSideBar('Java基础概念Ⅰ','Java基本概念Ⅱ','Java面向对象','Java数据结构'),
		'/lasted/':['lasted'],
		'/web-server/Java-toper/':getJavaToper()
	}
};
function getJavaToper(){
	return [
		'面向过程与面向对象',
		'面向对象的五大基本原则',
		'平台无关性',
		'编译和反编译',
		'Java的编译原理',
		'为什么说Java中只有值传递'
	]
}
function getJavaBasicSideBar(groupA,groupB,groupC,groupD){
	return [
		{
			title: groupA,
			collapsable: true,
			children: [
				'类',
				'变量',
				'方法',
				'运算符',
				'修饰符',
				'String类',
				'Character',
				'Scanner类',
				'Number类和Math类',
				'Java StringBuffer和StringBuilder类',
			]
		},
		{
			title: groupB,
			collapsable: true,
			children: [	
				'命令行',
				'转义序列',
				'日期时间',
				'异常处理',
				'流与文件和IO'
			]
		},
		{
			title: groupC,
			collapsable: true,
			children: [
				'包',	
				'接口',
				'继承',
				'多态',
				'重写与重载'
			]
		},
		{
			title: groupD,
			collapsable: true,
			children: [	
				'Stack类',
				'Vector类',
				'Dictionar类',
				'Hashtable接口',
				'Properties接口',
				'枚举'
			]
		}
	]
}