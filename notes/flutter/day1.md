### 1.Text Widget

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context){

    return MaterialApp(
      title: 'welcome to flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('welcome to flutter'),
        ),
        body: Center(
          child: Text(
            'hello world',
            textAlign:TextAlign.center,//文字居中方式，left，center,right,start,end
            maxLines: 1,//文字显示几行，int类型
            overflow: TextOverflow.ellipsis,//文字超出显示省略号
            style: TextStyle(
              fontSize: 25.0,//字体大小，float类型
              color: Color.fromARGB(255, 255, 155, 125),//颜色，第一个值为透明度
              decoration: TextDecoration.underline,//显示下划线
              decorationStyle: TextDecorationStyle.solid,//下划线样式
              decorationColor: Color.fromARGB(255, 0, 0, 0),//下划线颜色
            ),
          ),
        ),
      ),
    );
  }

}

```



### 2.Container Widget(类似于div)

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context){

    return MaterialApp(
      title: 'welcome to flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('welcome to flutter'),
        ),
        body: Center(
          child:Container(//类型于div
            child: new Text('hello world',style: TextStyle(fontSize: 40.0),),
            alignment: Alignment.topLeft,//居中方式
            width: 500.0,//宽高都为float
            height: 400.0,
//            color: Colors.lightBlue,//设置背景颜色
            padding: const EdgeInsets.fromLTRB(10.0,100.0,0.0,0.0),//设置内边距
            margin: const EdgeInsets.all(10.0),//设置外边距
            decoration: new BoxDecoration( //设置时要将color注释掉，否则会报错
              gradient:const LinearGradient(//设置线性渐变
                 colors: [Colors.lightBlue,Colors.greenAccent,Colors.purple],
              ),
              border: Border.all(width: 2.0,color: Colors.red),//设置边框
            ),
          ),
        ),
      ),
    );
  }

}

```

