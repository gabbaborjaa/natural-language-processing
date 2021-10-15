"use strict";
self["webpackHotUpdatenatural_language_processing"]("main",{

/***/ "./src/client/js/formHandler.js":
/*!**************************************!*\
  !*** ./src/client/js/formHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleSubmit": () => (/* binding */ handleSubmit)
/* harmony export */ });
function handleSubmit(event) {
    event.preventDefault()
        // check what text was put into the form field
    let formText = document.getElementById('name').value;
    const data = {
        formText
    }
    if (Client.checkForName(formText)) {
        fetch('http://localhost:9000/userText', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(function(res) {
                document.getElementById('model').innerHTML = 'Model: ' + res.model;
                document.getElementById('score_tag').innerHTML = 'Score: ' + res.score_tag;
                document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
                document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
                document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
            })
            .catch(error => {
                console.log('error!');
                console.error(error);
            })
    } else {
        alert('Please enter a valid URL')
    };
}



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1b57a2f53ec9211fec2e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.58a8e7c8c49617d46124.hot-update.js.map