document.getElementById('button').onclick = duplicate;


var i = 0;
var original = document.getElementById('duplicater');

function duplicate() {
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "duplicetor" + ++i; // there can only be one element with an ID
    original.parentNode.appendChild(clone);
}


document.getElementById('buttonrule').onclick = duplicaterule;


var irule = 0;
var originalrule = document.getElementById('duplicaterrule');

function duplicaterule() {
    var clonerule = originalrule.cloneNode(true); // "deep" clone
    clonerule.id = "duplicetorrule" + ++irule; // there can only be one element with an ID
    originalrule.parentNode.appendChild(clonerule);
}