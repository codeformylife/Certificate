
let btnLinkToLinkedin = document.querySelectorAll('button.button-link.add-to-linkedin-label');
for (let i = 3; i < btnLinkToLinkedin.length; i++) {
    btnLinkToLinkedin[i].click();
}

let linkedin_details = document.querySelectorAll('.linkedin-details div');
let output = '';
for (let i = 0; i < linkedin_details.length; i++) {
    output += '> ' + linkedin_details[i].children[0].children[1].innerText + '\n';
    output += linkedin_details[i].innerText.replace(/:\n/mg, ': ');
    output += '\n\n';
}

output = output.replace(/Name:/mg, '- Name:');
output = output.replace(/Issuing/mg, '- Issuing');
output = output.replace(/Issue/mg, '- Issue');
output = output.replace(/Expiration/mg, '- Expiration');
output = output.replace(/Credential/mg, '- Credential');