import{_ as n,c as s}from"./app.6b480602.js";const a={},t=s(`<h5 id="\u76EE\u5F55\u7ED3\u6784\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784\u8BF4\u660E" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784\u8BF4\u660E</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u9879\u76EE\u6839\u76EE\u5F55
|\u2014\u2014 docs \u9879\u76EE\u6587\u6863\u76EE\u5F55
|	|\u2014\u2014 README.md \u6587\u6863\u9996\u9875\u5185\u5BB9
|	|\u2014\u2014 .vuepress vuepress\u914D\u7F6E\u76EE\u5F55
|	|	|\u2014\u2014 config.js \u4E3B\u914D\u7F6E\u6587\u4EF6
|	|	|\u2014\u2014 nav.js \u5BFC\u822A\u680F\u914D\u7F6E\u6587\u4EF6
|	|	|\u2014\u2014 sidebar.js \u5DE6\u4FA7\u680F\u914D\u7F6E\u6587\u4EF6
|	|	|\u2014\u2014 public \u9759\u6001\u6587\u4EF6\u76EE\u5F55
|	|	|	|\u2014\u2014 img \u5B58\u653E\u56FE\u7247
|	|	|	|	|\u2014\u2014 logo.jpg logo\u56FE\u7247
|	|	|	|\u2014\u2014 js \u5B58\u653Ejs\u6587\u4EF6
|	|	|	|	|\u2014\u2014 main.js  \u81EA\u5B9A\u4E49\u7684js
|	|	|	|\u2014\u2014 css \u5B58\u653Ecss\u6587\u4EF6
|	|	|	|	|\u2014\u2014 style.css \u81EA\u5B9A\u4E49\u7684css
|	|\u2014\u2014 guide
|	|	|\u2014\u2014 README.md \u5B50\u6A21\u5757guide\u7684\u4E3B\u9875\u5185\u5BB9
|	|	|\u2014\u2014 sidebar.js \u5B50\u6A21\u5757guide\u7684\u5DE6\u4FA7\u680F\u914D\u7F6E\u6587\u4EF6
|	|	|\u2014\u2014 notes \u5B50\u6A21\u5757guide\u7684\u6587\u4EF6\u5B58\u653E\u76EE\u5F55
|	|	|	|\u2014\u2014 one.md \u6587\u6863\u4E00
|	|	|	|\u2014\u2014 two.md \u6587\u6863\u4E8C
|	|\u2014\u2014 help
|	|	|\u2014\u2014 user
|	|	|	|\u2014\u2014 README.md
|	|	|	|\u2014\u2014 sidebar.js
|	|	|	|\u2014\u2014 basic
|	|	|	|	|\u2014\u2014 one.md
|	|	|	|	|\u2014\u2014 two.md
|	|	|	|	|\u2014\u2014 three.md
|	|	|	|\u2014\u2014 senior
|	|	|	|	|\u2014\u2014 one.md
|	|	|	|	|\u2014\u2014 two.md
|	|	|	|	|\u2014\u2014 three.md
|	|	|\u2014\u2014 manager
|	|	|	|\u2014\u2014 README.md
|	|	|	|\u2014\u2014 sidebar.js
|	|	|	|\u2014\u2014 daily
|	|	|	|	|\u2014\u2014 one.md
|	|	|	|	|\u2014\u2014 two.md
|	|	|	|\u2014\u2014 regular
|	|	|	|	|\u2014\u2014 one.md
|	|	|	|	|\u2014\u2014 two.md
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><hr><h3 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A</p><p>\u63D0\u793A\u7B2C\u4E8C\u884C</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u8B66\u544A</p></div><details class="custom-container details"><p>\u8FD9\u662F\u4E00\u4E2A details \u6807\u7B7E</p><p>\u7EC6\u8282\u5C55\u793A</p></details>`,8);function e(r,l){return t}var i=n(a,[["render",e],["__file","index.html.vue"]]);export{i as default};
