var expect = require('expect');

var {generateMessage} = require('./message')

describe('generate', ()=>{
  it('should generate correct message object', ()=>{
    //store res in variable
    //assert from match
    //assert text match
    //assert createdAt is number
    var from = 'Alex';
    var text = 'Cualquier mensaje';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({ from, text});

  })
})