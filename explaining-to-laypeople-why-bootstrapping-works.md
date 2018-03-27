
fwiw the medium length version I usually give goes like this:
无论如何，我通常都这么解释：

You want to ask a question of a population but you can't. So you take a sample and ask the question of it instead. Now, how confident you should be that the sample answer is close to the population answer obviously depends on the structure of population. One way you might learn about this is to take samples from the population again and again, ask them the question, and see how variable the sample answers tended to be. Since this isn't possible you can either make some assumptions about the shape of the population, or you can use the information in the sample you actually have to learn about it.

你想得到总体（population）的某个参数（parameter）但是无法直接获得，所以需要取一个样本来间接估计。现在，你有多少信心样本的统计值（statistic）接近整体的参数值（parameter），显然，这个取决于总体的结构。一种你可以了解它的途径是不断地从总体中抽样，不断计算其统计值，最终得到这些统计值的分布（从分布中可以了解它的集中趋势和离散程度），也就是抽样分布（sampling distribution）。但这只是理论上的存在，实际中不可能如此获得，所以为了获得抽样分布，要么对其做一些假设，要么从获得的样本中窥探一二。


Imagine you decide to make assumptions, e.g. that it is Normal, or Bernoulli or some other convenient fiction. Following the previous strategy you could again learn about how much the answer to your question when asked of a sample might vary depending on which particular sample you happened to get by repeatedly generating samples of the same size as the one you have and asking them the same question. That would be straightforward to the extent that you chose computationally convenient assumptions. (Indeed particularly convenient assumptions plus non-trivial math may allow you to bypass the sampling part altogether, but we will deliberately ignore that here.)

如果你决定做出假设，比如，假设抽样分布服从正态分布，或者伯努利分布，或者一些其他的分布。从之前抽样分布的实现过程来看，样本的统计值有多接近总体的参数值（这是我们感兴趣的值）取决于抽样分布的形状（另外，“有多接近”转化为数学概念就是“置信区间”）。从计算机模拟中我们知道，一些抽样分布确实服从正态分布，比如样本均值的抽样分布（sampling distribution of the mean），样本均数差的抽样分布(sampling distribution of the difference between means)。


This seems like a good idea provided you are happy to make the assumptions. Imagine you are not. An alternative is to take the sample you have and sample from it instead. You can do this because the sample you have is also a population, just a very small discrete one; it looks like the histogram of your data. Sampling 'with replacement' is just a convenient way to treat the sample like it's a population and to sample from it in a way that reflects its shape.

如果你不想从以上假设入手来获得抽样分布，另一方式就是从获得的样本中进行抽样模拟。这么做的原因是样本也可以看作一个总体，只不过是一个小的不连续的总体而已。对这个样本进行有放回的抽样，就可以模拟出抽样分布的形状。


This is a reasonable thing to do because not only is the sample you have the best, indeed the only information you have about what the population actually looks like, but also because most samples will, if they're randomly chosen, look quite like the population they came from. Consequently it is likely that yours does too.
这么做是十分合理的，首先你获得的样本是最能体现总体信息的数据；其次如果样本是随机抽取的，必然能反映总体形状，这样对样本进行的抽样分布也同样能体现总体的抽样分布。  


For intuition it is important to think about how you could learn about variability by aggregating sampled information that is generated in various ways and on various assumptions. Completely ignoring the possibility of closed form mathematical solutions is important to get clear about this.



