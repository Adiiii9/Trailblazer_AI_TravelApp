
import os
import random
import pathlib
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt
import matplotlib.image as mpimg


# path = "C:/Users/NIMIT/Desktop/cnnmodel/archive/Indian-monuments/images"
# # Walk through the directory and list number of files
# for dirpath, dirnames, filenames in os.walk(path):
#   print(f"There are {len(dirnames)} directories and {len(filenames)} images in '{dirpath}'.")

# train_dir =  path + "/train/"
# test_dir = path + "/test/"
# train_dir

# data_dir = pathlib.Path(train_dir)
# class_names = np.array(sorted([item.name for item in data_dir.glob("*")]))
# class_names



def get_class_names(directory_path):
    """
    Retrieves class names from the provided directory path.
    """
    # Walk through the directory and list number of files
    class_names = []
    for dirpath, dirnames, filenames in os.walk(directory_path):
        class_names.extend(dirnames)
        break  # Only need to get class names from the top-level directory
    return np.array(sorted(class_names))


# def load_and_prep_image(filename, img_shape=300):
#     """
#     Reads an image from filename, turns it into a tensor,
#     and reshapes it to (img_shape, img_shape, colour_channel).
#     """
#     # Read in target file (an image)
#     img = tf.io.read_file(filename)

#     # Decode the read file into a tensor & ensure 3 colour channels 
#     # (our model is trained on images with 3 colour channels and sometimes images have 4 colour channels)
#     img = tf.image.decode_image(img, channels=3)

#     # Resize the image (to the same size our model was trained on)
#     img = tf.image.resize(img, size=[img_shape, img_shape])

#     # Rescale the image (get all values between 0 and 1)
#     img = img / 255.

#     return img


from PIL import Image

def load_and_prep_image(image, img_shape=300):
    """
    Takes an image file path or a file-like object,
    reads the image, turns it into a tensor,
    and reshapes it to (img_shape, img_shape, colour_channel).
    """
    # If 'image' is a file path, open it
    if isinstance(image, str):
        img = Image.open(image)
    else:  # If 'image' is a file-like object
        img = Image.open(image)
    
    # Convert to RGB (in case of RGBA)
    img = img.convert("RGB")

    # Resize the image (to the same size our model was trained on)
    img = img.resize((img_shape, img_shape))

    # Convert PIL Image to NumPy array
    img_array = tf.keras.preprocessing.image.img_to_array(img)

    # Rescale the image (get all values between 0 and 1)
    img_array = img_array / 255.0

    # Add batch dimension
    img_array = tf.expand_dims(img_array, axis=0)

    return img_array

def predict_image(model, filename, class_names):
    """
    Imports an image located at filename, makes a prediction on it with
    a trained model, and returns the predicted class.
    """
    # Import the target image and preprocess it
    img = load_and_prep_image(filename)

    # Make a prediction
    pred = model.predict(tf.expand_dims(img, axis=0))

    # Get the predicted class
    if len(pred[0]) > 1:  # check for multi-class
        pred_class = class_names[pred.argmax()]  # if more than one output, take the max
    else:
        pred_class = class_names[int(tf.round(pred)[0][0])]  # if only one output, round

    return pred_class


def plot_loss_curves(history):
    """
    Plots loss curves for training and validation metrics.
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
    plt.legend()

def view_random_image(target_dir, target_class):
    """
    Views a random image from the target directory with the specified target class.
    """
    target_folder = os.path.join(target_dir, target_class)

    # Get a random image path
    random_image = random.sample(os.listdir(target_folder), 1)

    # Read in the image and plot it using matplotlib
    img = mpimg.imread(os.path.join(target_folder, random_image[0]))
    plt.imshow(img)
    plt.title(target_class)
    plt.axis("off")

    print(f"Image shape: {img.shape}")  # show the shape of the image

    return img


def load_model(model_path):
    """
    Loads a pre-trained model from the specified path.
    """
    model = tf.keras.models.load_model(model_path)
    return model



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
  plt.axis(False);