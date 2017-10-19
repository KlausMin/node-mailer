import Route from '@ember/routing/route';

export default Route.extend({
  actions : {
    sendTo(model){
      //get nodemailer
      var nodemailer = this.require('nodemailer');

      var transporter = nodemailer.createTransport({
        service : 'Gmail',  //smtp server
        auth : {
          user : 'skyfpt1@gmail.com',
          pass : 'energetic4936!'
        }
      });

      const mailOptions = {
        from : 'service@9ple.com',
        to : 'skyfpt@naver.com', //Reciever Email Address
        subject: 'ttest', // Subject line
        text: 'test',
        html: '<p><h1>html contents</h1></p>'
      };

      transporter.sendMail(mailOptions);
    }
  }
});
