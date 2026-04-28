const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const fetch = require('node-fetch');

async function testUpload() {
  const form = new FormData();
  
  // create a dummy image
  const dummyFile = path.join(__dirname, 'dummy.jpg');
  fs.writeFileSync(dummyFile, 'dummy content');
  
  form.append('image', fs.createReadStream(dummyFile));
  
  try {
    const res = await fetch('http://localhost:8000/api/v1/auth/upload-image', {
      method: 'POST',
      body: form,
    });
    console.log('Status:', res.status);
    const text = await res.text();
    console.log('Response:', text);
  } catch (err) {
    console.error(err);
  }
}

testUpload();
