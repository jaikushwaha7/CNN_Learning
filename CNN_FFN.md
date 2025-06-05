# Why ConvNets over Feed-Forward Neural Nets?
Flattening of a 3x3 image matrix into a 9x1 vector

![alt text](/images/image-2.png)

- An image is nothing but a matrix of pixel values, right? So why not just flatten the image (e.g. 3x3 image matrix into a 9x1 vector) and feed it to a Multi-Level Perceptron for classification purposes? Uh.. not really.

- In cases of extremely basic binary images, the method might show an average precision score while performing prediction of classes but would have little to no accuracy when it comes to complex images having pixel dependencies throughout.

A **ConvNet** is able to successfully capture the **Spatial and Temporal dependencies in an image through the application of relevant filters**. The architecture performs a better fitting to the image dataset due to the **reduction in the number of parameters involved** and the **reusability of weights**. In other words, the network can be trained to understand the sophistication of the image better.


![alt text](images/convoluting-a-5x5x1-image-with-a-3x3x1-kernel-to-get-a-3x3x1-convolved-feature.gif)
