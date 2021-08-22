# 三栏布局

圣杯布局和双飞翼布局是前端工程师需要掌握的布局方式。

## 圣杯布局

dom 结构如下：

```html
<div id="container">
  <div id="center" class="box"></div>
  <div id="left" class="box"></div>
  <div id="right" class="box"></div>
</div>
```

css 如下:

```css
* {
  padding: 0;
  margin: 0;
}
#container {
  padding: 0 200px;
  height: 200px;
}
.box {
  float: left;
  position: relative;
}
#center {
  width: 100%;
  height: 100%;
  background-color: red;
}
#left {
  width: 200px;
  height: 100%;

  left: -200px;
  margin-left: -100%;
  background-color: black;
}
#right {
  width: 200px;
  height: 100%;
  margin-right: -200px;
  background-color: blue;
}
```

## 双飞翼

dom 结构如下

```html
<div id="out">
  <div id="main" class="box">
    <div id="main-content"></div>
  </div>
  <div id="left" class="box"></div>
  <div id="right" class="box"></div>
</div>
```

css 结构如下：

```css
* {
  padding: 0;
  margin: 0;
}
#out {
  overflow: hidden;
  height: 200px;
}
.box {
  float: left;
}
#main {
  width: 100%;
  height: 100%;
  background-color: red;
}
#main-content {
  margin: 0 200px;
}
#left {
  width: 200px;
  height: 100%;
  background-color: black;
  margin-left: -100%;
}
#right {
  width: 200px;
  height: 100%;
  background-color: blue;
  margin-left: -200px;
}
```

总结：两种布局都是优先渲染`center`，左侧固定，其余自适应。
