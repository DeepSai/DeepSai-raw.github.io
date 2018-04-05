## 大数法则，中心极限定理，抽样分布

### Law of Large Numbers
The larger the sample size, the closer the statistic gets to the parameters.

### Central Limit Theorem
With a large enough sample size the sampling distribution of the mean will be normally distributed.

Alternative definition: Given a population with a finite mean $\mu$ and a finite non-zero variance $\sigma^2$, the sampling distribution of the mean approaches a normal distribution with a mean of $\mu$ and a variance of $\frac{\sigma^2}{N} $as N, the sample size, increases.


### Sampling Distribution
#### sampling distribution of the mean 
If a population's mean is $\mu$, then the mean of the sampling distribution of the sample mean is also $\mu$. Denoted with symbol $\mu_M$.

mean: $$\mu_M = \mu$$

variance: $$\sigma_{M}^2 = \frac{\sigma^2}{N}$$ (N is the sample size)

standard error of the mean(standard deviation of the sampling distribution of the sample mean): $$ \sigma_M = \frac{\sigma}{\sqrt N} $$

#### sampling distribution of the difference between means
mean: $$\mu_{M_1 - M_2} = \mu_1 - \mu_2$$

variance:
$$ \sigma_{M_1 - M_2}^2 = \sigma_{M_1}^2 + \sigma_{M_2}^2 $$


$$ \sigma_{M_1 - M_2}^2 = \frac{\sigma_{1}^2}{N_1} + \frac{\sigma_{2}^2}{N_2} $$

standard error:
$$ \sigma_{M_1 - M_2} = \sqrt {\frac{\sigma_{1}^2}{N_1} + \frac{\sigma_{2}^2}{N_2}} $$

#### variance sum law
The variance of variable X plus or minus variable Y is equal to the variance of X plus the variance of Y:

$$ \sigma_{X\pm Y}^2 = \sigma_X^2 + \sigma_X^2 $$

> tip: only apply when the variables are independent.
