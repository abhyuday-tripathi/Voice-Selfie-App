const SpeechRecognition = window.webkitSpeechRecognition;
const Recognition = new SpeechRecognition();

function start() {
  document.getElementById('textarea1').innerHTML = '';
  Recognition.start();
}

Recognition.onresult = function (e) {
  const Content = e.results[0][0].transcript;
  document.getElementById('textarea1').innerHTML = Content;
  if (Content == 'take my selfie') {
    speak();
  }
};

function speak() {
  const synthesis = window.speechSynthesis;
  const text = 'Taking your selfie in 5 seconds';
  const voice1 = new SpeechSynthesisUtterance(text);
  synthesis.speak(voice1);
  Webcam.attach(camera);
  setTimeout(function () {
    snapshot();
    save1();
  }, 5000);
}

camera = document.getElementById('output');

Webcam.set({
  width: 360,
  height: 250,
  image_format: 'jpeg',
  jpeg_quality: 90,
});

function snapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById(
      'result'
    ).innerHTML = `<img src=${data_uri} id="image1" />`;
  });
}

function save1() {
  document.getElementById('selfie_image').href = document.getElementById(
    'image1'
  ).src;
  document.getElementById('selfie_image').click();
}
