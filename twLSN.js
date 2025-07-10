var twLSN = [
  'tokowhatsapp.blogspot.com',
  'toko-whatsapp.blogspot.com',
  'jasa-design.web.id',
  'www.jasa-design.web.id',
  'storetechhackerxyz.blogspot.com' // your domain
];

var redirectUrl = 'http://bit.ly/toko-whatsapp';

var currentHost = window.location.hostname;
if (!twLSN.includes(currentHost)) {
  window.location.href = redirectUrl;
}
