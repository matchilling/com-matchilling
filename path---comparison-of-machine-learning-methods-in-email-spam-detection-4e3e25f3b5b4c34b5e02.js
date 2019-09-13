webpackJsonp([0xb48a6c052664],{346:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Mathias Schilling - Just another paper cut survivor and software engineer",author:"Mathias Schilling"}},markdownRemark:{id:"/Users/matchilling/dev/com.matchilling.www/src/pages/article/2018-02-11-comparison-of-machine-learning-methods-in-email-spam-detection/index.md absPath of file >>> MarkdownRemark",html:'<p>Unsolicited bulk emails, also known as Spam, make up for approximately 60% of the global email traffic. Despite the fact that technology has advanced in the field of Spam detection since the first unsolicited bulk email was sent in 1978 spamming remains a time consuming and expensive problem.</p>\n<p>This report compares the performance of three machine learning techniques for spam detection including <strong><a href="https://www.stat.berkeley.edu/~breiman/RandomForests/cc_home.htm">Random Forest</a> (RF)</strong>, <strong><a href="https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm">k-Nearest Neighbours</a> (kNN)</strong> and <strong><a href="https://en.wikipedia.org/wiki/Support_vector_machine">Support Vector Machines</a> (SVM)</strong>.</p>\n<h2>Introduction</h2>\n<p>Despite the rising popularity of instant messaging technologies in recent years, email continues to be the dominant medium for digital communications for both consumer and business use. Following industry estimations (Symantec Corporation, 2016, pp 31 <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>), approximately 200 billion emails were sent each day in 2015. On average, business users sent and received around 42 emails per day. Given those facts, it is no wonder that email is still the weapon of choice for cybercriminals who want to target the broadest possible audience electronically.</p>\n<p>According to Nucleus Research (Nucleus Research, 2007 <sup id="fnref-2"><a href="#fn-2" class="footnote-ref">2</a></sup>), spam costs US businesses an average of $712 per employee every year due to diminished productivity, lost customers, spent bandwidth and increasing the cost of maintenance.</p>\n<p>Estimates (Statista, 2017 <sup id="fnref-3"><a href="#fn-3" class="footnote-ref">3</a></sup>) are that slightly less than 60 percent of the incoming business email traffic is unsolicited bulk email (known as spam) which was the lowest level since 2003. However, even though the global percentage of spam/ non-spam ratio is decreasing, the competition between spammers and spam filtering techniques continuous. It is fair to say that the problem is not going away, and the need for reliable anti-spam filters remains high.</p>\n<p>The idea of automatically classifying spam and non-spam emails by applying machine learning methods has been pretty popular in academia and has been a topic of interest for many researchers.</p>\n<p>Knowledge engineering and machine learning are the two main approaches scientists have been applied to overcome the spam-filtering problem. The first solution focuses on creating a knowledge-based system in which pre-defined rules dictate if an incoming message is legitimate or not. The primary disadvantage of this method is that those rules need to be maintained and updated continuously by the user or a 3rd party like for example a software vendor.</p>\n<p>The machine learning approach, in contrast, does not require pre-defined rules, but instead messages which have been successfully pre-classified. Those messages make the training dataset which is being used to fit the learning algorithm to the model. One could say the algorithm defers the classification rules from the test data.</p>\n<p>This study compares three algorithms which are suitable for classification problems. In particular, we included the following methods:</p>\n<ul>\n<li>Random Forest</li>\n<li>k-Nearest Neighbours</li>\n<li>Support Vector Machines with Linear Kernel</li>\n</ul>\n<p>For the experiment, we use <a href="https://archive.ics.uci.edu/ml/datasets/spambase">Hewlett Packard’s <em>Spambase</em></a> dataset which is publicly available and downloadable from the <a href="https://archive.ics.uci.edu/ml/index.php">UCI Machine Learning Repository</a>.</p>\n<h2>Methods</h2>\n<p>The following part provides a brief introduction to the three methods used for the experiment and compares general advantages and disadvantages.</p>\n<h3>Random Forest</h3>\n<p>Tin Kam Ho first introduced the general method of random decision forests at AT&#x26;T <a href="https://www.bell-labs.com/">Bell Labs</a> in 1995 (Tin Kam Ho, 1995 <sup id="fnref-4"><a href="#fn-4" class="footnote-ref">4</a></sup>). The thought is, that</p>\n<blockquote>\n<p>If one tree is good, then many trees (a forest) should be better.</p>\n<p><cite>Stephen Marsland, 2014, p. 275 <sup id="fnref-5"><a href="#fn-5" class="footnote-ref">5</a></sup></cite></p>\n</blockquote>\n<p>The algorithm deducts the classification label for new documents from a set of decision trees where for each tree, a sample is selected from the training data, and a decision tree is created by choosing a random subset of all features (hence “Random”). The algorithm is suitable for complex classification tasks in small datasets (Breiman, 2001 <sup id="fnref-6"><a href="#fn-6" class="footnote-ref">6</a></sup>). By averaging multiple trees, random-forest-based models have a significantly lower risk of <em>overfitting</em> and include less <em>variance</em> compared to decision trees. The major drawback is performance as a large number of trees may make the method slow for real-time prediction.</p>\n<h3>k-Nearest Neighbours</h3>\n<p>The k-nearest neighbour (kNN) classifier is a straightforward method and works well for simple recognition problems. It is considered as an example-based classifier because the training data is used for comparison and not for explicit category representation. In literature, the term <em>lazy-learner</em> is also often related to kNN.</p>\n<p>When a new document needs to be categorised, kNN tries to find the k nearest neighbours (most similar documents) in the training dataset. Given that, enough neighbours are found and have been categorised, kNN uses their profile to assign the new document to the same category. This comparison is a real-time process, and therefore the main drawback of this approach is that the kNN algorithm must compute the distance and sort all the training data for each prediction, which can be slow if given a large training dataset (James, Witten, Hastie, &#x26; Tibshirani, 2013, pp. 39–42 <sup id="fnref-7"><a href="#fn-7" class="footnote-ref">7</a></sup>).</p>\n<h3>Support Vector Machines</h3>\n<p>The original Support Vector Machines algorithm was designed by Vladimir N. Vapnik and Alexey Ya. Chervonenkis in 1963 (Vapnik &#x26; Chervonenkis, 1964 <sup id="fnref-8"><a href="#fn-8" class="footnote-ref">8</a></sup>). SVM has its foundation in the broad concept of decision planes which define the decision boundaries. Decision planes separate distinct objects by finding the optimal hyperplane with the maximum margin between two separate classes.\nSVM provides high accuracy on small and clean datasets but tends to perform less efficient on noisier datasets with overlapping classes (James et al., 2013, pp. 349–359 <sup id="fnref-7"><a href="#fn-7" class="footnote-ref">7</a></sup>).</p>\n<h2>Procedure</h2>\n<p>The following part describes the experiment procedure including exploratory data analysis, model fitting, evaluation and prediction.</p>\n<h3> Exploratory Data Analysis</h3>\n<p>The <em>Spambase</em> dataset was composed by Mark Hopkins, Erik Reeber, George Forman, and Jaap Suermondt at Hewlett-Packard Labs. The set includes a total of 4601 observations from Mr Foreman’s personal email account, 2788 messages are classified as <em>Non-Spam</em> and 1813 were effectively <em>Spam</em> (cf. figure 1).</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 67.06372840976772%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACXUlEQVQ4y2NgQAW8QKwGxCpALAnEclAM4ssDsSCUVgdiGSCWAGItIJZioCdgxCfJwswMVlMY6MdwtLeT+WhvB8vC4nywnv8HdyEU8nNzsf8/sIv5////jO2JcWAxkCZkwMSIsKshJgLF4jcrF8P5fJxsbNxAmhtZQUdXB1PTooXoDhRmZmKSBtLiIPaBrrbQJ0sXpCxrqhcCSX5atoCRgY2FBRS4PKmebkoXp02ccm5y34Srk3oEYCbE5WQju5Axz9+XFcR+tHhe+/+92/7/37v9/5dVS64cLiuE6BHg5gbFJsPkzFST//u2//+1ee3/Hb2dxlKmZgppOVnCIDlLR0cGSVlZhv//f4L1tGSk8v7csOrl/y3r/j/Zsv7b+/07/x9fNC8OFnZgAydmpBj+ABr2Z/3Khxu3bp66+cK5j2uPHp4Dkjvy8D7j4t27GBYU58Nd+3TNsvO3r176v+/B/f/779/9v/zQQWtIwuPkBKUrzqbYKMv/e7b+/7dh5fPte3evvfbz+/+t58/uBqm59PE90+qjh8Hq1x46wASip61aabLp0oVT2y+efzJj3ZpWoBC7oIgwH4OWnCwHSEFXcoLelw2rXv1Ys+zMxu1bp269fPHH+hPHwLFy8vlTxmX79jCc7GkHG7r51Al4jEpISXIBKVC48jExMfHCxFn9Lc3ZOpLildI9XDVc3FzlaydOkG2dMR2UMxhis7MY2DnA9jL4JyWC6Q0b1zEBkxjBRM0KzX68xOSAwqZGhuzqKkhuYETLD6Zqqij8LRfPM2ro6YKyBQsoxSBhRqgYVgAAjN/YqxKCjRUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Figure 1. Non-Spam vs. Spam"\n        title="Figure 1. Non-Spam vs. Spam"\n        src="/static/figure-1-non-spam-vs-spam-b237ee64842fd629a145c0ff70acd0a6-ea913.png"\n        srcset="/static/figure-1-non-spam-vs-spam-b237ee64842fd629a145c0ff70acd0a6-086ab.png 200w,\n/static/figure-1-non-spam-vs-spam-b237ee64842fd629a145c0ff70acd0a6-b16c6.png 400w,\n/static/figure-1-non-spam-vs-spam-b237ee64842fd629a145c0ff70acd0a6-ea913.png 800w,\n/static/figure-1-non-spam-vs-spam-b237ee64842fd629a145c0ff70acd0a6-a134b.png 1200w,\n/static/figure-1-non-spam-vs-spam-b237ee64842fd629a145c0ff70acd0a6-6e947.png 1600w,\n/static/figure-1-non-spam-vs-spam-b237ee64842fd629a145c0ff70acd0a6-4cb02.png 1679w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<p>58 different attributes were computed of which 57 are continuous and one is a nominal class label. Typically, documents are represented as vectors of word frequencies. The dataset includes measurements for 6 character frequencies and 48 different word frequencies such as “Internet”, “George” (Mr Foreman’s first name), “Credit”. Furthermore, three data points were collected which represent the average, the maximum and the total length of character sequences in uppercase (cf. figure 2).</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 82.4771287825475%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACaUlEQVQ4y2NgwA7EgNgCiC2B2AyITYDYHEpbA7EUA7GAhZkZhf///39GIGYCYhAbLs7KwkLYMGYmJgZ+bi4w+/yUfmZsai5OmwgX9zEzIc6VIFeB6PlFecL3F8xKe75sQdv9BbMzV1eXiYHl9+1gAtP3bzA0x0Vj6Ac5iRuIOYCY3URVBcRmuDx9ktPHtctf/N+z7T/QgP8g+tPa5W+vzpjsCTZs+0YmqOUYBkoAsSyI5uHgkAHS4lURoTqf1614/3/v9v+/t6z79QuKwYauW/H9QE+bCkjjhroqJqK8+mzp/Pr/+3eCDPv5a/Pa//+2rPv3f+u6/383r/35/8Cu/y+WLGjH5To4kBQSZPh/5Sw4wN+uWrIUpPHn5rW//21d9+/xqqX/rixf/O/ZhmV/vu5b///mipmbQOrU5aT5oMElBMS8KAY66OkwAL0ETgsvly+cAnIh0HW/gK77/2L9qn+bjx37v/f4md/XL1z7v2vjpiVAZfx8vLzaIHOBWAeIlaDpFwFuzJoKDpMLUyfYAwP9/5+t6//9BIXdxtV/Lu7b9Xv73dt/Dt+89X/1pt2uIHXKqmp80Mhkg2I+BkSaMmXY2ljL8P/sMXA4Plw0pxkcw8CI+b976/+/Ozf/P3nj2v/Fh/ZPBEoL8PMLSDAwMoK8KgqNWBDNiBGWS8uKEC6ePTXg9YpFW9+tXnbl9fKFO3YtnBvKAAkwDhY2Vl6k5MYPxDxAjBrrQK+C6Rm5mfAYx5ISGEgCMA0WGuoMt+ZOZ/65aS3T/2vnGb+sWca0dtliZt2QUEieZ2VlGFDAioZZkGKSBSqGFQAAmfEnIucAVV8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Figure 2. Attribute Information Spambase"\n        title="Figure 2. Attribute Information Spambase"\n        src="/static/figure-2-attribute-information-spambase-949c699f92637fd7bd8eecaaf4c4c6b9-ea913.png"\n        srcset="/static/figure-2-attribute-information-spambase-949c699f92637fd7bd8eecaaf4c4c6b9-086ab.png 200w,\n/static/figure-2-attribute-information-spambase-949c699f92637fd7bd8eecaaf4c4c6b9-b16c6.png 400w,\n/static/figure-2-attribute-information-spambase-949c699f92637fd7bd8eecaaf4c4c6b9-ea913.png 800w,\n/static/figure-2-attribute-information-spambase-949c699f92637fd7bd8eecaaf4c4c6b9-a134b.png 1200w,\n/static/figure-2-attribute-information-spambase-949c699f92637fd7bd8eecaaf4c4c6b9-a1ad7.png 1421w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<h3>Feature Selection</h3>\n<p>A widely used algorithm for automatic feature selection is Recursive Feature Elimination or RFE. It is based on the idea of repeatedly constructing models and select either the worst- or best-performing feature. RFE than removes the feature from the stack and repeats the process with the remaining features in the set.</p>\n<p>Figure 3 illustrates RFE applied with a Random Forest algorithm to the <em>Spambase</em> dataset. All 57 attributes have been selected in the example, although the plot shows that selecting just 44 attributes provide similar accuracy.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 69.74330966684872%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABoUlEQVQ4y41T23LiMAzN//8aoTzxCFvSGdoBQi6OHV9in5VkzLJT6NQzimRLPjm6uEop4dlalgV1vcZqVWO73ZJeYb1+w2azwaqu8WpVDMgyzzO01qLVNImWlSJ9WNJNyyFmo+HtLNrOGs7m+5W4CdDQhlnFSJdiIJwFvQn47B0+uoA/rceBpCG7uZJ9DdhfI/kWvLcBXyoKiUophdPpBKUm+bcNCR9DluOY0JkE5YiRT5hcFu3yGce6kLUnHtZaVLvdDpGYTVMGHC0Fk/glPaSZXgv3IOVSWOdQ7fd72czGIND5ReMezLExZV1qXUr0zHYMeDgccLm0mNSInvrA6SSqY4w5kGta9E+2kOIaNk0jzTDULe0Lo39SLv6a4fF4vKEbzIEBv1/4CeQbIDfl0rbU5RGGOhmW+DSlX6c8jqOkrKkpdsF9cO/Wi5f0bHnv82BHGuKB5nCkQQ7BiyOE8J9+JY9x8lIKA0MMmS07h2GQuWS7pXLwwLL0fS9n/Bg4hkG6rpNYrh9jVI8plVrcn+AtDd6fz2dwA0vNGKz4SyyvvwBaSBJmcudoAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Figure 3 . Feature selection using RFE algorithm"\n        title="Figure 3 . Feature selection using RFE algorithm"\n        src="/static/figure-3-feature-selection-using-rfe-algorithm-115035722b8bca6569a73bf674cb1042-ea913.png"\n        srcset="/static/figure-3-feature-selection-using-rfe-algorithm-115035722b8bca6569a73bf674cb1042-086ab.png 200w,\n/static/figure-3-feature-selection-using-rfe-algorithm-115035722b8bca6569a73bf674cb1042-b16c6.png 400w,\n/static/figure-3-feature-selection-using-rfe-algorithm-115035722b8bca6569a73bf674cb1042-ea913.png 800w,\n/static/figure-3-feature-selection-using-rfe-algorithm-115035722b8bca6569a73bf674cb1042-a134b.png 1200w,\n/static/figure-3-feature-selection-using-rfe-algorithm-115035722b8bca6569a73bf674cb1042-6e947.png 1600w,\n/static/figure-3-feature-selection-using-rfe-algorithm-115035722b8bca6569a73bf674cb1042-a2347.png 1831w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<h3> Classification tree</h3>\n<p>Another handy technique in data mining is recursive partitioning. This method helps to visualise the decision rules for a particular prediction. Figure 4 shows an example of a classification tree on the <em>Spambase</em> dataset.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.012756909992916%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABAUlEQVQoz5WSYU/CQAyGb2wyENxNZBtTyTARA8EPCt/g//8v31ueJSVhAk2e5K7rtW+7OtdvkdiJX3ESe/EjvsXW3WEhUSJi7hPhxVTknB0xCfH/WipGYijGYiYqUYtCvOBPiRn1Jcp5tCLB/ErhUKgUjXjlfGZPJH0WGWc7Bmtj4j3xnnugVRKyf9LOu1FaE9zNs8TX8K4yLQ+siMwojE1Fz+AHzKzCN6flDBERbR8cFRZ8KPmr3b0gWad4aeIyCuzoKie+nccGZ+BRvPGwIaHHn5q//GBWKL20e30W2juKNUo3qP1i0dcov9liVDn2zqEuofUpI7rbwow+UNf0Bf0BnekLcxFgCNUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Figure 4. Classification Tree Spambase"\n        title="Figure 4. Classification Tree Spambase"\n        src="/static/figure-4-classification-tree-spambase-7e33c073cb6800f3b01fcc95aab3356f-ea913.png"\n        srcset="/static/figure-4-classification-tree-spambase-7e33c073cb6800f3b01fcc95aab3356f-086ab.png 200w,\n/static/figure-4-classification-tree-spambase-7e33c073cb6800f3b01fcc95aab3356f-b16c6.png 400w,\n/static/figure-4-classification-tree-spambase-7e33c073cb6800f3b01fcc95aab3356f-ea913.png 800w,\n/static/figure-4-classification-tree-spambase-7e33c073cb6800f3b01fcc95aab3356f-a134b.png 1200w,\n/static/figure-4-classification-tree-spambase-7e33c073cb6800f3b01fcc95aab3356f-e35d2.png 1411w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<h3> Training</h3>\n<p>After we have completed our initial data exploration analysis, we now prepare the data and train our models using the three describe methods. The data preparation involves the following steps:</p>\n<ul>\n<li>Set human readable column names on the data frame</li>\n<li>Replace the class data with descriptive label where zero represents “Non-Spam” and a one marks a record as “Spam”</li>\n<li>Cast the class column to data type factor as the caret package complains if labels are 0 or 1</li>\n<li>Take samples from 1000 and split those into test and training sets randomly with a training/ test ratio of 70%</li>\n</ul>\n<h2>Prediction and evaluation</h2>\n<p>Finally, after we have completed the training step for all three models let us have a look how they compare to each other regarding performance. We compare the performance of all three approaches by evaluating the most commonly used indicators: spam precision (SP), spam recall (SR) and accuracy (A). All three indicators originate from the confusion matrix of each model (cf. figure 5).</p>\n<ul>\n<li><strong>Spam precision</strong> is the percentage of correct results divided by the number of all returned results</li>\n<li><strong>Spam recall</strong> is the percentage of all Spam emails which are correctly classified as Spam</li>\n<li><strong>The accuracy</strong> is the percentage of all emails that are correctly categorised</li>\n</ul>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 61.63588390501319%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAACbklEQVQoz2NggABJIFYBYgUglmJAAB4glgdiGSBWhaphR5LnB2JlIFYEYmYGfICTmwunHL+gIFZxZmagmR1zZjEC2UxQMVZuXl5OmIKU4iImJJs5mFlYOGByFV2dTHDLOThAtrPC+KwqmppaVT3dnX5hofpAvhAPP5/AxtMnQRaxGZibGZV3tNeoamqAvC7KysbG9/T/f5Ach1tggGNJa0s5KzOzKCcXlwgLKysvg5yykta6E8euHHpw73/N0iVK4ICDuJLD2tnJYMOpE4+2X7n0i4GVHRwGvHx83CC52KxMpy3nz/7YcObUI5QwLW5pqt91/er/A5cu/F81oXeCbXg4R3hKMihi2JumTunef+/O/8MXzv7f3Nk607m8gss/MgIUgTyTli9ddvjRg/97Dx/4v6O9uY5hwTJWLS0tOQYbRwftxGnTRJe0NVdv3rn9/46rl7/3LlywEKQpMDZGPbu6SnHn1Ik7dx8/8n/z+bO/avp6q4By3BG5OSo1ZSU626dPvrjv/Jn/60+d+JJUkJ8GcqYozL1Ar73cd+vG/8KmRh+QC7m4ucDR2Tx1isQBoEvXnzz+2jssTAcoxMfEyAjyOkPnvDnmFz99+L/q8MHzIuLiigzcvDx8IBt1jQzF2mfNnAR0kS8oMvoWL2ICxjgonXF5hobKNU+bOsEnItwQyGcpam5kAiYdIVBYRqan6bfNmtGroaerBE+jjExMbEAbBWBJ5NSLZ4wwV3NwcXFAEzAYzNmyCZ5cePn5QRHFC+OXtrUyMti4uqAkzv///6PQ2ED/0sUMhADIZaxAl7LAXAlMbyhyUMyMTR+yHAATL76o8YRrPwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Figure 5. Confusion Matrix"\n        title="Figure 5. Confusion Matrix"\n        src="/static/figure-5-confusion-matrix-84bf109c5c2548fcc622e80ec78aa39e-ea913.png"\n        srcset="/static/figure-5-confusion-matrix-84bf109c5c2548fcc622e80ec78aa39e-086ab.png 200w,\n/static/figure-5-confusion-matrix-84bf109c5c2548fcc622e80ec78aa39e-b16c6.png 400w,\n/static/figure-5-confusion-matrix-84bf109c5c2548fcc622e80ec78aa39e-ea913.png 800w,\n/static/figure-5-confusion-matrix-84bf109c5c2548fcc622e80ec78aa39e-a134b.png 1200w,\n/static/figure-5-confusion-matrix-84bf109c5c2548fcc622e80ec78aa39e-6e947.png 1600w,\n/static/figure-5-confusion-matrix-84bf109c5c2548fcc622e80ec78aa39e-6c36e.png 1895w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<p>The table below summarises the performance result of all three machine learning methods. We determine from the results that <em>k-Nearest Neighbours (kNN)</em> and <em>Support Vector Machine (SVM)</em> perform similar weak regarding accuracy and <em>Random Forest (RF)</em> outperforms both. We see that <em>RF</em> and <em>SVM</em> have the same relatively high percentage of spam recall while <em>kNN</em> performs significantly worse in that category. Finally, we learn that <em>RF</em> has the highest percentage of spam precision and <em>SVM</em> almost 10 points less than <em>RF</em>.</p>\n<table>\n<thead>\n<tr>\n<th>Algorithm</th>\n<th>Spam Precision (SP)</th>\n<th>Spam Recall (SR)</th>\n<th>Accuracy (A)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Random Forest</td>\n<td>92.66</td>\n<td>87.07</td>\n<td>92.31</td>\n</tr>\n<tr>\n<td>k-Nearest Neighbours</td>\n<td>88.07</td>\n<td>82.76</td>\n<td>88.96</td>\n</tr>\n<tr>\n<td>SVM Linear</td>\n<td>94.87</td>\n<td>87.07</td>\n<td>88.96</td>\n</tr>\n</tbody>\n</table>\n<h2> Conclusion</h2>\n<p>By the looks of the result, one could say that using the random forest approach is the gold way, although we need to keep in mind that we have not fine tuned any of those models at all! Therefore due to its design <em>Random Forest</em> performs relatively well “out-of-the-box” compared to <em>k-Nearest Neighbours</em> and <em>Support Vector Machine</em>.</p>\n<h2>References</h2>\n<div class="footnotes">\n<hr>\n<ol>\n<li id="fn-1">\n<p>Symantec Corporation. (2016). <a href="https://www.symantec.com/content/dam/symantec/docs/reports/istr-21-2016-en.pdf">Internet Security Threat Report (Vol. 21)</a>.</p>\n<a href="#fnref-1" class="footnote-backref">↩</a>\n</li>\n<li id="fn-2">\n<p>Nucleus Research. (2007). <a href="https://nucleusresearch.com/press/nucleus-research-spam-costing-us-businesses-712-per-employee-each-year/">Spam costing US Businesses $712 Per Employee</a>.</p>\n<a href="#fnref-2" class="footnote-backref">↩</a>\n</li>\n<li id="fn-3">\n<p>Statista. (2017). <a href="https://www.statista.com/statistics/420391/spam-email-traffic-share/">Global spam email traffic share 2014-2017</a>.</p>\n<a href="#fnref-3" class="footnote-backref">↩</a>\n</li>\n<li id="fn-4">\n<p>Tin Kam Ho. (1995). Random decision forests. <a href="https://doi.org/10.1109/ICDAR.1995.598994">Proceedings of 3rd International Conference on Document Analysis and Recognition, 1, 278–282</a>.</p>\n<a href="#fnref-4" class="footnote-backref">↩</a>\n</li>\n<li id="fn-5">\n<p>Stephen Marsland. (2014). <a href="https://www.crcpress.com/Machine-Learning-An-Algorithmic-Perspective-Second-Edition/Marsland/p/book/9781466583283">Machine Learning: An Algorithmic Perspective (2nd ed.). Chapman; Hall/CRC</a>.</p>\n<a href="#fnref-5" class="footnote-backref">↩</a>\n</li>\n<li id="fn-6">\n<p>Breiman, L. (2001). <a href="https://doi.org/10.1023/A:1010933404324">Random Forests. Machine Learning, 45 (1), 5–32</a>.</p>\n<a href="#fnref-6" class="footnote-backref">↩</a>\n</li>\n<li id="fn-7">\n<p>James, G., Witten, D., Hastie, T., &#x26; Tibshirani, R. (2013). <a href="https://doi.org/10.1007/978-1-4614-7138-7">An Introduction to Statistical Learning</a>.</p>\n<a href="#fnref-7" class="footnote-backref">↩</a>\n</li>\n<li id="fn-8">\n<p>Vapnik, V., &#x26; Chervonenkis, A. (1964). A note on one class of perceptrons. Automation and Remote Control, 25.</p>\n<a href="#fnref-8" class="footnote-backref">↩</a>\n</li>\n</ol>\n</div>',frontmatter:{date:"11 February, 2018",hn_id:16365895,path:"/comparison-of-machine-learning-methods-in-email-spam-detection/",tags:"classification algorithms, unsolicited email, spam",title:"Comparison of machine learning methods in email spam detection"},wordCount:{words:1634}}},pathContext:{path:"/comparison-of-machine-learning-methods-in-email-spam-detection/"}}}});
//# sourceMappingURL=path---comparison-of-machine-learning-methods-in-email-spam-detection-4e3e25f3b5b4c34b5e02.js.map