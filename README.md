# Real-Time Object Detection in Browser using TensorFlow.js

This is a minimal web-based object detection demo using [TensorFlow.js](https://www.tensorflow.org/js) and the pre-trained [COCO-SSD](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) model.

## 🧠 Features
- Detect objects in images using deep learning directly in the browser.
- No installation required — pure HTML, JS, and TensorFlow.js.
- Lightweight and fast for demo purposes.

## 🚀 How It Works
1. Loads the COCO-SSD model using TensorFlow.js.
2. Grabs an image (e.g., `dog.png`) from the DOM.
3. Runs object detection and displays results (object type and confidence score).

## 🖼️ Example
Using the included `dog.png` image, it might detect:
- Class: Dog | Score: 98.23%

## 🛠️ How to Run
1. Make sure the following files are in your project folder:
   - `index.html` (provided code)
   - `Check.js` (script that includes `runDetection()` logic)
   - `dog.png` (sample image)

2. Open `index.html` in any modern browser.

## 📦 Dependencies
- [TensorFlow.js](https://cdn.jsdelivr.net/npm/@tensorflow/tfjs)
- [COCO-SSD Model](https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd)

## 📄 License
MIT - Feel free to use and modify.
