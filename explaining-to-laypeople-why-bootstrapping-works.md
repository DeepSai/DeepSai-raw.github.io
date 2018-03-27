# 对懒人解释拔靴法（bootstrapping）工作原理
## 正文

简单起见，我通常这么解释：

假设你想得到总体`population`的某个参数`parameter`但没办法直接获得，所以需要取一个样本来间接估计。现在，你有多少信心 样本的统计值`statistic`接近整体的参数值`parameter`，显然，这取决于总体的结构。一种你可以了解它的途径是不断地从总体中抽样，不断计算其统计值，最终得到这些统计值的分布（从分布中可以了解它的集中趋势和离散程度），也就是抽样分布`sampling distribution`。但这只是理论上的存在，实际中不可能如此获得，所以为了获得抽样分布，要么对其做一些假设，要么从样本中窥探一二。

如果你决定做出假设，比如，假设抽样分布服从正态分布，或者伯努利分布，或者一些其他的分布。从之前抽样分布的实现过程来看，样本的统计值有多接近总体的参数值取决于抽样分布的形状（“有多接近”转化为数学概念即“置信区间”）。从计算机模拟中我们知道，一些抽样分布确实服从正态分布，比如样本均值的抽样分布`sampling distribution of the mean`，样本均数差的抽样分布`sampling distribution of the difference between means`。

如果不想从以上假设入手获得抽样分布，另一方式就是对样本进行抽样模拟。这么做是因为样本也可以看作一个总体，只不过是一个小的不连续的总体而已。对这个样本进行有放回的抽样，就可以模拟出抽样分布的形状。

这么做是十分合理的，首先你获得的样本是最能体现总体信息的数据；其次如果样本是随机抽取的，必然能反映总体形状，这样一来，对**样本进行的抽样分布**也必然能反映**总体的抽样分布**。 

避免数学方法的思考，单从直观印象上理解拔靴法是很重要的。


## 后记
翻译自[StackExchange](https://stats.stackexchange.com/questions/26088/explaining-to-laypeople-why-bootstrapping-works)，既不是直译，也不是意译，是以那篇回答为蓝本，译出作者对bootstrapping的理解，算是**灵魂翻译**。

这之前一直有用拔靴法，也感受到了它的惊人之处，但始终不太明白，翻译完之后瞬间感觉清楚多了。


*附原回答：*
> fwiw the medium length version I usually give goes like this:

> You want to ask a question of a population but you can't. So you take a sample and ask the question of it instead. Now, how confident you should be that the sample answer is close to the population answer obviously depends on the structure of population. One way you might learn about this is to take samples from the population again and again, ask them the question, and see how variable the sample answers tended to be. Since this isn't possible you can either make some assumptions about the shape of the population, or you can use the information in the sample you actually have to learn about it.

> Imagine you decide to make assumptions, e.g. that it is Normal, or Bernoulli or some other convenient fiction. Following the previous strategy you could again learn about how much the answer to your question when asked of a sample might vary depending on which particular sample you happened to get by repeatedly generating samples of the same size as the one you have and asking them the same question. That would be straightforward to the extent that you chose computationally convenient assumptions. (Indeed particularly convenient assumptions plus non-trivial math may allow you to bypass the sampling part altogether, but we will deliberately ignore that here.)

> This seems like a good idea provided you are happy to make the assumptions. Imagine you are not. An alternative is to take the sample you have and sample from it instead. You can do this because the sample you have is also a population, just a very small discrete one; it looks like the histogram of your data. Sampling 'with replacement' is just a convenient way to treat the sample like it's a population and to sample from it in a way that reflects its shape.

> This is a reasonable thing to do because not only is the sample you have the best, indeed the only information you have about what the population actually looks like, but also because most samples will, if they're randomly chosen, look quite like the population they came from. Consequently it is likely that yours does too.

> For intuition it is important to think about how you could learn about variability by aggregating sampled information that is generated in various ways and on various assumptions. Completely ignoring the possibility of closed form mathematical solutions is important to get clear about this.


`灵魂译者：kate`
