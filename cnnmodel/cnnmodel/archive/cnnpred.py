import numpy as np 
import pandas as pd 
# Input data files are available in the read-only "../input/" directory
# For example, running this (by clicking run or pressing Shift+Enter) will list all files under the input directory
ls = []
import os
# for dirname, _, filenames in os.walk('C:/Users/NIMIT/Desktop/cnnmodel/archive/Indian-monuments/images'):
for dirname, _, filenames in os.walk('C:/Adi ~ College/react tut/react-2024/RBL_Project/cnnmodel/cnnmodel/archive/Indian-monuments/images'):
    for filename in filenames:
        ls.append(os.path.join(dirname, filename))
ls[0]

import cv2
import pathlib
import numpy as np
import pandas as pd
import tensorflow as tf
import os
# View an image
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import random

path = "C:/Adi ~ College/react tut/react-2024/RBL_Project/cnnmodel/cnnmodel/archive/Indian-monuments/images"
#for dirpath, dirnames, filenames in os.walk(path):
#  print(f"There are {len(dirnames)} directories and {len(filenames)} images in '{dirpath}'.")

# append the training and the testing paths to the original path
train_dir =  path + "/train/"
test_dir = path + "/test/"
train_dir

#get class names

data_dir = pathlib.Path(train_dir)
class_names = np.array(sorted([item.name for item in data_dir.glob("*")]))
class_names

# function used to view an random image
def view_random_image(target_dir, target_class):
    target_folder = target_dir  + target_class
    
  # Get a random image path
    random_image = random.sample(os.listdir(target_folder), 1)

  # Read in the image and plot it using matplotlib
    img = mpimg.imread(target_folder + "/" + random_image[0])
    plt.imshow(img)
    plt.title(target_class)
    plt.axis("off");

    print(f"Image shape: {img.shape}") # show the shape of the image

    return img

def plot_loss_curves(history):
  """
  Returns separate loss curves for training and validation metrics.
  """ 
  loss = history.history['loss']
  val_loss = history.history['val_loss']

  accuracy = history.history['accuracy']
  val_accuracy = history.history['val_accuracy']

  epochs = range(len(history.history['loss']))

  # Plot loss
  plt.plot(epochs, loss, label='training_loss')
  plt.plot(epochs, val_loss, label='val_loss')
  plt.title('Loss')
  plt.xlabel('Epochs')
  plt.legend()

  # Plot accuracy
  plt.figure()
  plt.plot(epochs, accuracy, label='training_accuracy')
  plt.plot(epochs, val_accuracy, label='val_accuracy')
  plt.title('Accuracy')
  plt.xlabel('Epochs')
  plt.legend();



#img = view_random_image(target_dir=train_dir, target_class=random.choice(class_names)) # get a random class name



# from tensorflow.keras.preprocessing.image import ImageDataGenerator
# from tensorflow.keras.models import Sequential
# from tensorflow.keras.layers import Conv2D, MaxPool2D, Flatten, Dense

# # Rescale the data and create data generator instances
# train_datagen = ImageDataGenerator(rescale=1/255.)
# test_datagen = ImageDataGenerator(rescale=1/255.)

# # Load data in from directories and turn it into batches
# train_data = train_datagen.flow_from_directory(train_dir,
#                                                target_size=(300, 300),
#                                                batch_size=32,
#                                                class_mode='categorical') 

# test_data = train_datagen.flow_from_directory(test_dir,
#                                               target_size=(300, 300),
#                                               batch_size=32,
#                                               class_mode='categorical')


# from tensorflow.keras.models import Sequential
# from tensorflow.keras.layers import Conv2D, MaxPool2D, Flatten, Dense
# """ # Create our model 
# model_1 = Sequential([
#    Conv2D(10, 3, activation='relu', input_shape=(300, 300, 3)),
#    Conv2D(10, 3, activation='relu'),
#    MaxPool2D(),
#    Conv2D(10, 3, activation='relu'),
#    Conv2D(10, 3, activation='relu'),
#    MaxPool2D(),
#    Flatten(),
#    Dense(24, activation='softmax') 
#  ])
# # Compile the model
# model_1.compile(loss="categorical_crossentropy", 
#                  optimizer=tf.keras.optimizers.Adam(),
#                  metrics=["accuracy"])




# history_1 = model_1.fit(train_data, 
#                          epochs=5,
#                          steps_per_epoch=steps_per_epoch,
#                          validation_data=test_data,
#                          validation_steps=validation_steps)

# model_1.evaluate(test_data)

# plot_loss_curves(history_1) """


# # model_10 = Sequential([
# #   Conv2D(10, 3, activation='relu', input_shape=(300, 300, 3)),
# #   MaxPool2D(),
# #   Conv2D(10, 3, activation='relu'),
# #   MaxPool2D(),
# #   Flatten(),
# #   Dense(24, activation='softmax')
# # ])

# # model_10.compile(loss='categorical_crossentropy',
# #                  optimizer=tf.keras.optimizers.Adam(),
# #                  metrics=['accuracy'])

# # history_10 = model_10.fit(train_data,
# #                           epochs=5,
# #                           steps_per_epoch=115,
# #                           validation_data=test_data,
# #                           validation_steps=1056)


# adjusted_model = Sequential([
#     Conv2D(32, (3, 3), activation='relu', input_shape=(300, 300, 3)),
#     MaxPool2D((2, 2)),
#     Conv2D(64, (3, 3), activation='relu'),
#     MaxPool2D((2, 2)),
#     Flatten(),
#     Dense(128, activation='relu'),
#     Dense(24, activation='softmax')
# ])

# # Compile the adjusted model
# adjusted_model.compile(loss='categorical_crossentropy',
#                        optimizer=tf.keras.optimizers.Adam(),
#                        metrics=['accuracy'])



# # Train the model with the adjusted steps per epoch
# history_adjusted = adjusted_model.fit(train_data,
#                                       epochs=5,
#                                       steps_per_epoch=len(train_data) ,
#                                       validation_data=test_data,
#                                       validation_steps=len(test_data))


# plot_loss_curves(history_adjusted)
from tensorflow.keras.models import load_model

filename = 'my_combined_model.h5' 
final_model=load_model(filename)






def load_and_prep_image(filename, img_shape=300):
  """
Reads an image from filename, turns it into a tensor
and reshapes it to (img_shape, img_shape, colour_channel).
  """
  # Read in target file (an image)
  img = tf.io.read_file(filename)

  # Decode the read file into a tensor & ensure 3 colour channels 
  # (our model is trained on images with 3 colour channels and sometimes images have 4 colour channels)
  img = tf.image.decode_image(img, channels=3)

  # Resize the image (to the same size our model was trained on)
  img = tf.image.resize(img, size = [img_shape, img_shape])

  # Rescale the image (get all values between 0 and 1)
  img = img/255.
    
  return img

# Adjust function to work with multi-class
def pred_and_plot(model, filename, class_names):
  """
 Imports an image located at filename, makes a prediction on it with
a trained model and plots the image with the predicted class as the title.
  """
  # Import the target image and preprocess it
  img = load_and_prep_image(filename)

  # Make a prediction
  pred = model.predict(tf.expand_dims(img, axis=0))

  # Get the predicted class
  if len(pred[0]) > 1: # check for multi-class
    pred_class = class_names[pred.argmax()] # if more than one output, take the max
  else:
    pred_class = class_names[int(tf.round(pred)[0][0])] # if only one output, round

  # Plot the image and predicted class
  plt.imshow(img)
  plt.title(f"Prediction: {pred_class}")
  # plt.axis(False);
  plt.axis(False)   #changed



pred_and_plot(final_model,"C:/Adi ~ College/react tut/react-2024/RBL_Project/cnnmodel/cnnmodel/archive/Indian-monuments/images/predict/download.jpg",class_names )