# 词云
![](wd.jpg)
[js实现](https://bl.ocks.org/jyucsiro/767539a876836e920e38bc80d2031ba7)
## 用python实现词云
`.generate_from_frequencies()`方法

```python
%config InlineBackend.figure_format='retina'
import matplotlib.pyplot as plt
from wordcloud import WordCloud

# 单词频率
dic = {'进取心': 213,
       '亲和动机': 225,
       '发掘客户需求': 177,
       '自信': 46,
       '关系建立': 152,
       '目标导向': 144,
       '权力动机': 93,
       '坚韧不拔': 48,
       '成本意识': 136,
       '精力旺盛': 50,
       '成就动机': 223,
       '积极主动': 107,
       '学习意识': 76,
       '善于沟通': 31,
       '关系维护': 61,
       '外向': 19,
       '灵活应变': 61}

# 引入中文字体路径
font_path = "/System/Library/fonts/PingFang.ttc"
pros_wordcloud = WordCloud(background_color="white", 
                         font_path=font_path,
                         min_font_size=10).generate_from_frequencies(pros_dic)
plt.imshow(pros_wordcloud)
plt.axis("off")
plt.show()
```
![](wd01.png)

#### tip: mac中的字体路径
1. /System/Library/Fonts
2. /Library/Fonts

## 用python实现词云
`.generate()`方法
```python
corpus = """心湖 雨又风 
        展容颜 相恋 伴浮萍 
        弱水 一瓢饮
        春风 绿湖心
        暮暮 年华远 
        姻缘浅
        期待 春风 绿湖心
        心湖 雨又风 
        春风 绿湖心
        心已静 """
font_path = "/System/Library/fonts/PingFang.ttc"
my_wordcloud = WordCloud(background_color="white", 
                         font_path=font_path).generate(corpus)
plt.imshow(my_wordcloud)
plt.axis("off")
plt.show()
```
![](wd02.png)