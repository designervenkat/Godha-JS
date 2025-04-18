#### One Page Code

```html
<a href="#about">about</a>
<a href="#contact">contact</a>
<a href="#home">home</a>

<div class="section section-bg-zero" id="home"></div>
<div class="section section-bg-one" id="about"></div>
<div class="section section-bg-two" id="contact"></div>
```

```csss
* {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}
.section{
  width:100vw;
  height: 100vh;
}
.section-bg-zero{
  background-color: #f1f1f1;
}
.section-bg-one{
  background-color: #f00;
}

.section-bg-two{
  background-color: blue;
}

```
