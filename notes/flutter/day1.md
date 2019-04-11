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

