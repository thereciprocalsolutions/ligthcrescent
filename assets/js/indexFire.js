  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD7GOpuvsx8PkiSZNcFzeEo_HG-oAVcyf0",
    authDomain: "lightcrescent-e52f5.firebaseapp.com",
    databaseURL: "https://lightcrescent-e52f5.firebaseio.com",
    projectId: "lightcrescent-e52f5",
    storageBucket: "lightcrescent-e52f5.appspot.com",
    messagingSenderId: "644754024792",
    appId: "1:644754024792:web:5f713976c739dfd9c49d2d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference for form collection
  let formMessage = firebase.database().ref('quota');

  let form = document.getElementById('contact-quote-form');
    if (form) {
        form.addEventListener('submit', (event) => {
        event.preventDefault();
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let phone = document.querySelector('#phone').value;
        let note = document.querySelector('#note').value;

        sendFirebase(name, email, phone, note);

        if (name && email && phone && note) {
            let alerty = document.querySelector('#success');

            alerty.style.display = "block";
    
            setTimeout(() => {
                alerty.style.display = 'none';
              }, 4000);
        } else {
            let alerty = document.querySelector('#error');

            alerty.style.display = "block";
    
            setTimeout(() => {
                alerty.style.display = 'none';
              }, 4000);
        }


        //Form Reset After Submission
        document.getElementById('contact-quote-form').reset();
    });
    } 

    //Send Message to Firebase
    let sendFirebase = (name, email, phone, note) => {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
        name: name,
        email: email,
        phone: phone,
        note: note
    });
    }