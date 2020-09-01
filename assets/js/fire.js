    var firebaseConfig = {
        apiKey: "AIzaSyD7GOpuvsx8PkiSZNcFzeEo_HG-oAVcyf0",
        authDomain: "lightcrescent-e52f5.firebaseapp.com",
        databaseURL: "https://lightcrescent-e52f5.firebaseio.com",
        projectId: "lightcrescent-e52f5",
        storageBucket: "lightcrescent-e52f5.appspot.com",
        messagingSenderId: "644754024792",
        appId: "1:644754024792:web:0586d0591d4816a0c49d2d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //Reference for form collection
    let formMessage = firebase.database().ref('register');

    let form = document.getElementById('contact-form-main');
    if (form) {
        form.addEventListener('submit', (event) => {
        event.preventDefault();
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let phone = document.querySelector('#phone').value;
        let company = document.querySelector('#company').value;
        let note = document.querySelector('#note').value;

        sendFirebase(name, email, phone, company, note);

        if (name && email && phone && company && note) {
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
        document.getElementById('contact-form-main').reset();
    });
    } 

    //Send Message to Firebase
       let sendFirebase = (name, email, phone, company, note) => {
        if (name && email && phone && company && note) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
        name: name,
        email: email,
        phone: phone,
        company: company,
        note: note
    });
    }
    }    
