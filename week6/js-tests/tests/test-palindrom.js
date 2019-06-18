let expect = require('chai').expect;

function palindrome(expiation) {
    let text = expiation;
    text = text.toLowerCase();
    for (let i = 0; i <= (text.length / 2); i++) {
        if (text[i] != text[text.length - (i + 1)]) return false;
    }
    return true;
}
it('should return true', function () {
    expect(palindrome("eye")).to.equal(true);}
    );

it('should return false', function () {
    expect(palindrome("standing")).to.equal(false);}
    );
it('should return a boolean', function(){
    expect(palindrome("seventy")).to.be.a("boolean");
    });




