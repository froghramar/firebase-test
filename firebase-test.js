/**
 * Created by feroze.ahmmed on 3/6/2017.
 */
(function(window){
    window.onload = function(){
        var config = {
            apiKey: "AIzaSyChZYXRZQg9BBsd7to530mlFlPiM40nhFA",
            authDomain: "test-cd8ce.firebaseapp.com",
            databaseURL: "https://test-cd8ce.firebaseio.com",
            storageBucket: "test-cd8ce.appspot.com",
            messagingSenderId: "227637868594"
        };
        firebase.initializeApp(config);
        const preObject = document.getElementById('object');
        const dbRefObject = firebase.database().ref().child('key');
        dbRefObject.on('value', function (snap) {
            document.getElementById('object').innerHTML = JSON.stringify(snap.val());
        });
    }
})(window);